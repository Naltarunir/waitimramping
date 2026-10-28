import type spell from "@data/spells/spell";
import { getTalentRank, type TalentMap } from "@data/shared/engine";

export interface AllyState {
    id: number;
    buffs: {
        envelopingMist: {
            remaining: number;
            amp: number;
        };
        renewingMist: {
            remaining: number;
            amp: number;
        };
    };
}

export interface RotationResult {
    id: string;
    name: string;
    hps: number;
    totalHealing: number;
    duration: number;
    spells: spell[];
    breakdown: Array<{
        spellName: string;
        healing: number;
        percentage: number;
        sources: {
            baseHealing?: number;
            chiJiGusts?: number;
            ancientTeachings?: number;
            wayOfTheCrane?: number;
            gustOfMists?: number;
            chiCocoons?: number;
            rapidDiffusion?: number;
        };
    }>;
}

export function getOptionTalentRank(
  options: SimulationOptions,
  talent: spell
): number {
  return Math.max(getTalentRank(options.specTalents, talent), getTalentRank(options.classTalents, talent));
}

export function isTalentEnabled(
  options: SimulationOptions,
  talent: spell
): boolean {
  return getOptionTalentRank(options, talent) > 0;
}

export interface SimulationOptions {
    intellect: number;
    totalHp: number;
    crit: number;
    versatility: number;
    mastery: number;
    haste: number;
    enemyCount: number;
    allyCount: number;
    specTalents: TalentMap;
    classTalents: TalentMap;
}