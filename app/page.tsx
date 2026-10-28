"use client";
import Link from "next/link";
import {
    Typography,
    Container,
    Box,
    Avatar,
} from "@mui/material";
import RainbowCard, { RAINBOW_COLORS, RAINBOW_GRADIENT } from "@components/Buttons/RainbowCard";
import Reveal from "@components/Reveal/Reveal";
import { CONTENT_WIDTH, FONT, HAIRLINE, MONO_FONT } from "@components/Theme/tokens";

const CURRENT_PATCH = "12.1.5";

const leadTools = [
    {
        title: "When Do I Ramp?",
        description: "Calculate when to start your ramp before a mechanic",
        path: "/when-do-i-ramp",
        preview: "/previews/when-do-i-ramp.png"
    },
    {
        title: "Spell Timeline",
        description: "Build timelines for spell casts and cooldowns",
        path: "/timeline",
        preview: "/previews/timeline.png"
    }
];

const tools = [
    {
        title: "Reference",
        description: "View spellpower data for every spell and talent",
        path: "/analysis/spell-reference",
        preview: "/previews/spell-reference.png"
    },
    {
        title: "Analysis",
        description: "Compare healing mechanics with the math",
        path: "/analysis",
        preview: "/previews/heart-of-the-jade-serpent.png"
    },
    {
        title: "Bugs",
        description: "Track known bugs and issues by specialization",
        path: "/bugs",
        preview: "/previews/bugs.png"
    }
];

const STATUS_GREEN = RAINBOW_COLORS[1];

const StatusLine = () => (
    <Typography component="div" sx={{ fontSize: FONT.small, color: 'text.secondary' }}>
        current for patch{' '}
        <Box component="span" sx={{ fontFamily: MONO_FONT, fontWeight: 600, color: STATUS_GREEN }}>
            {CURRENT_PATCH}
        </Box>
    </Typography>
);

const Hero = () => (
    <Box sx={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
    }}>
        <Typography
            variant="h2"
            component="h1"
            sx={{
                fontWeight: 700,
                maxWidth: 680,
                background: RAINBOW_GRADIENT,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
            }}
        >
            Wait, I'm Ramping!
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 680 }}>
            Healer theorycrafting and optimization tools for World of Warcraft
        </Typography>
        <StatusLine />
    </Box>
);

const ToolCard = ({ tool, height }: { tool: typeof tools[number]; height: number }) => (
    <RainbowCard
        href={tool.path}
        sx={{
            display: { xs: 'grid', sm: 'flex' },
            gridTemplateColumns: '110px 1fr',
            flexDirection: 'column',
            height: '100%',
            overflow: 'hidden',
            '&:hover .tool-shot': { opacity: 1 },
        }}
    >
        <Box sx={{
            position: 'relative',
            overflow: 'hidden',
            height: { xs: 'auto', sm: height },
            minHeight: 76,
            borderBottom: { sm: `1px solid ${HAIRLINE}` },
            borderRight: { xs: `1px solid ${HAIRLINE}`, sm: 'none' },
        }}>
            <Box
                className="tool-shot"
                sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${tool.preview})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.7,
                    transition: 'opacity 0.25s cubic-bezier(0.32,0.72,0,1)',
                }}
            />
        </Box>
        <Box sx={{ p: { xs: 1.5, sm: 2 }, textAlign: { xs: 'left', sm: 'center' } }}>
            <Typography sx={{ fontSize: FONT.subhead, fontWeight: 700, mb: 0.25, color: 'text.primary' }}>
                {tool.title}
            </Typography>
            <Typography sx={{ fontSize: { xs: FONT.small, sm: FONT.body }, color: 'text.secondary' }}>
                {tool.description}
            </Typography>
        </Box>
    </RainbowCard>
);

const ToolGrid = () => (
    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(6, 1fr)' }, gap: 2 }}>
        {leadTools.map((tool, i) => (
            <Box key={tool.path} sx={{ gridColumn: { md: 'span 3' } }}>
                <Reveal delay={i * 100} sx={{ height: '100%' }}>
                    <ToolCard tool={tool} height={180} />
                </Reveal>
            </Box>
        ))}
        {tools.map((tool, i) => (
            <Box key={tool.path} sx={{ gridColumn: { md: 'span 2' } }}>
                <Reveal delay={200 + i * 100} sx={{ height: '100%' }}>
                    <ToolCard tool={tool} height={120} />
                </Reveal>
            </Box>
        ))}
    </Box>
);

const Byline = () => (
    <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <Link href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer', '&:hover': { '& p': { color: 'text.primary' } } }}>
                <Avatar
                    src={"/swirl_panda.jpg"}
                    alt="swirl"
                    sx={{ width: 24, height: 24, borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}
                />
                <Typography sx={{ fontSize: FONT.body, fontWeight: 600, color: 'text.secondary', transition: 'color 0.2s cubic-bezier(0.32,0.72,0,1)' }}>
                    made by{' '}
                    <Box
                        component="span"
                        sx={{
                            background: RAINBOW_GRADIENT,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        swirl
                    </Box>
                </Typography>
            </Box>
        </Link>
    </Box>
);

const Home = () => (
    <Container maxWidth="lg" sx={{ mt: 1, mb: 2 }}>
        <Box sx={{ maxWidth: CONTENT_WIDTH.wide, mx: 'auto', display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Reveal>
                <Hero />
            </Reveal>
            <ToolGrid />
            <Byline />
        </Box>
    </Container>
);

export default Home;
