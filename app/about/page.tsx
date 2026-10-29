
import { Typography, Card, CardContent, Divider, Stack, Box } from "@mui/material";
import { PageMetadata } from "@components/PageMetadata/PageMetadata";
import { RAINBOW_COLORS } from "@components/Buttons/RainbowCard";
import SocialLinks from "@components/SocialLinks/SocialLinks";
import SwirlLink from "@components/SwirlLink/SwirlLink";
import { CONTENT_WIDTH, FONT, HAIRLINE } from "@components/Theme/tokens";

const title = "About";
const description = "Learn more about Swirl, the creator of Wait, I'm Ramping!";
export const metadata = PageMetadata(title, description);

const About = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
      <Card
        variant="outlined"
        sx={{
          maxWidth: CONTENT_WIDTH.narrow,
          width: { xs: "90%", sm: "90%", md: "100%" },
          mx: "auto",
          mt: 2,
          mb: { xs: 2, sm: 2 },
          boxSizing: "border-box",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <CardContent>
          <Stack spacing={2}>
            <Stack direction={{ xs: "column", sm: "row" }} alignItems="center" spacing={3} sx={{ mt: 1 }}>
              <Box
                component="img"
                src="/swirl_panda.jpg"
                alt="swirl"
                sx={{ width: 120, height: 120, borderRadius: 2, objectFit: "cover", border: `1px solid ${HAIRLINE}`, flexShrink: 0 }}
              />
              <Box sx={{ minWidth: 0 }}>
                <Typography variant="h4" align="left" sx={{ fontWeight: 700 }}>
                  swirl
                </Typography>
                <Typography align="left" sx={{ fontSize: FONT.body, color: "text.disabled", mb: 1.5 }}>
                  mistweaver monk, software engineer
                </Typography>
                <Box sx={{ ml: -1 }}>
                  <SocialLinks omit={["GITHUB"]} />
                </Box>
              </Box>
            </Stack>

            <Typography variant="body2" paragraph align="left" sx={{ mb: 0 }}>
              hi, i'm swirl :) i'm a gamer and software engineer who enjoys the mathematical side of the world, which translates directly into digging into how healing works across different games, mostly aligned with world of warcraft. i've been playing wow since cataclysm, and started maining mistweaver monk in mists of pandaria.
            </Typography>
            <Typography variant="body2" paragraph align="left" sx={{ mb: 0 }}>
              ever since, competitive healing has been a major focus in my gameplay. i've reached{" "}
              <Box component="span" sx={{ color: RAINBOW_COLORS[2], fontWeight: "bold" }}>
                world rank 20 in raid
              </Box>
              , earned multiple{" "}
              <Box component="span" sx={{ color: RAINBOW_COLORS[3], fontWeight: "bold" }}>
                0.1% titles in mythic+
              </Box>{" "}
              season to season. on another note, i am the{" "}
              <Box component="span" sx={{ color: RAINBOW_COLORS[1], fontWeight: "bold" }}>
                mistweaver guide writer for wowhead
              </Box>{" "}
              and i'm currently a{" "}
              <Box component="span" sx={{ color: RAINBOW_COLORS[0], fontWeight: "bold" }}>
                veteran and moderator in peak of serenity
              </Box>
              .{" "}
              i love helping other healers improve and enjoy the role more!
            </Typography>

            <Divider
              sx={{
                position: "relative",
                left: "50%",
                right: "50%",
                width: "calc(100% + 32px)",
                transform: "translateX(-50%)",
                my: 2,
                mx: 0,
                "&::before": {
                  content: '"𖦹"',
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "background.paper",
                  px: 2,
                  color: "text.secondary",
                  fontSize: FONT.subhead,
                },
              }}
            />

            <Typography variant="h4" gutterBottom align="left">
              about this project
            </Typography>
            <Typography variant="body2" paragraph align="left">
              <Box component="span" sx={{ color: "primary.main", fontWeight: "bold" }}>
                𖦹 wait, i'm ramping!
              </Box>{" "}
              is a site full of tools to help world of warcraft healers plan, visualize, and fine-tune their healing. it includes various components such as a ramp timer calculator, a spell timeline visualizer, many tools that compare spells and cooldowns (that i've implemented :p), and much more.
            </Typography>
            <Typography variant="body2" paragraph align="left">
              honestly, i started this website as a way to learn react which turned into much more: a method to share useful info for planning and optimizing healing - whether you're trying to clean up your sequencing, or satiate the desire to understand your spells a bit better.
            </Typography>
            <Typography variant="body2" paragraph align="left">
              this site is <Box component="span" sx={{ fontWeight: "bold" }}>free and open source</Box>.
              if you're interested in contributing or just want to chat about theorycrafting, feel free to reach out through any of the social links above or on github in the footer below!
            </Typography>
            <Typography variant="body2" paragraph align="left" sx={{ mb: 0 }}>
              want the longer story? read more about the project on my{" "}
              <SwirlLink href="https://rshevchenko.com/projects/waitimramping" target="_blank" rel="noopener noreferrer" sx={{ fontSize: "inherit" }}>
                personal portfolio
              </SwirlLink>
              .
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
