import type { ShotSpec } from "@/lib/images";

// The playground page and the home page strip both read from this list, in this order.
// To add a photo: drop it in photos-raw/photography/<name>.jpg, run `npm run photos`,
// and add an entry here pointing at /photography/<name>.jpg. `caption` is optional.
export const photos: ShotSpec[] = [
  { src: "/photography/01-blue-lake.jpg", alt: "A deep blue high-altitude lake with a sandy spit in the foreground and bare mountains behind" },
  { src: "/photography/02-stars-over-camp.jpg", alt: "A sky full of stars over a snowy mountain valley, with lit tents at the bottom of the frame" },
  { src: "/photography/03-meadow-trail.jpg", alt: "Trekkers on a trail across a sunlit green meadow, with snow-capped peaks under a dark blue sky" },
  { src: "/photography/04-tower-bridge.jpg", alt: "Tower Bridge seen from the river under broken cloud" },
  { src: "/photography/05-snow-valley.jpg", alt: "A snowfield leading up a valley to a snow-covered peak under a deep blue sky" },
  { src: "/photography/06-tents-at-dusk.jpg", alt: "Glowing yellow tents at a mountain campsite at dusk, with more camp lights down the valley" },
  { src: "/photography/07-lake-sunset.jpg", alt: "A calm lake at sunset with the last light on distant peaks and people on the far shore" },
  { src: "/photography/08-valley-trek.jpg", alt: "Three trekkers walking down a rocky green valley beside a stream under heavy cloud" },
  { src: "/photography/09-river-dusk.jpg", alt: "A still river winding between forested hills at dusk, the sky fading from blue to orange" },
  { src: "/photography/10-river-bend.jpg", alt: "A wide silty river bending through bare brown mountains, with a road along one bank" },
  { src: "/photography/11-camp-under-clouds.jpg", alt: "A campsite at night under bright moonlit clouds, with an orange tent and a figure lit by lamps" },
  { src: "/photography/12-scuba.jpg", alt: "A scuba diver underwater making a heart shape with both hands" },
  { src: "/photography/13-waterfall.jpg", alt: "A person in a green hoodie leaning on a railing, watching a tall waterfall" },
  { src: "/photography/14-night-sky.jpg", alt: "Stars and thin cloud above the dark outline of two ridges" },
];
