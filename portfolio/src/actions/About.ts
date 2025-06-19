import type { Payload } from "payload";

export async function getAboutMe(payload: Payload) {
  const AboutMe = await payload.findGlobal({
    slug: 'about-me',
  });

  return AboutMe;
}