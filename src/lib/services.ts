import { Service } from "@/types";
import { readJsonFileOrNull, writeJsonFile, readJsonObject, writeJsonObject } from "@/lib/data";

// Bump this number whenever the seed data changes in a way that should overwrite
// existing blob data (e.g. a price update). The migration runs once and then
// the version is stored so it never runs again (admin changes after that are respected).
const SEED_VERSION = 7;

export const services: Service[] = [
  {
    slug: "microblading",
    name: "Microblading",
    shortDescription:
      "Ultra-fine hair strokes for naturally full, perfectly shaped brows.",
    description:
      "Microblading is a semi-permanent cosmetic tattooing technique that creates the appearance of natural, fuller eyebrows. Using a specialized hand-held tool with ultra-fine needles, our artists deposit pigment into the upper layers of the skin, drawing individual hair-like strokes that blend seamlessly with your existing brow hair.\n\nAt Velvet Brow by Tannaz, our microblading artists are trained in the latest techniques and use only premium pigments that are formulated to heal true to color. Each session begins with a detailed consultation where we analyze your facial structure, skin tone, and personal preferences to design brows that perfectly complement your features.\n\nThe result is a set of stunningly natural brows that frame your face beautifully, eliminating the need for daily brow makeup. Whether you have sparse brows, gaps, or simply want a more defined shape, microblading delivers effortless beauty that lasts 12 to 18 months.",
    duration: "2–2.5 hours",
    priceRange: "$550",
    touchUpPrice: "$150",
    image: "/images/custom/microblading.png",
    processSteps: [
      {
        title: "Consultation & Design",
        description:
          "We begin with an in-depth consultation to understand your desired look. Using precise measurements and mapping techniques, we design the perfect brow shape tailored to your facial structure.",
      },
      {
        title: "Color Matching",
        description:
          "Our artist selects a custom pigment blend that matches your natural brow color, hair tone, and skin undertone to ensure the most natural-looking result.",
      },
      {
        title: "Numbing & Preparation",
        description:
          "A topical numbing cream is applied to ensure your comfort throughout the procedure. The area is carefully prepped and sanitized.",
      },
      {
        title: "Microblading Procedure",
        description:
          "Using the hand-held tool, individual hair strokes are meticulously drawn following the natural growth pattern of your brows. This process takes approximately 1–1.5 hours.",
      },
      {
        title: "Aftercare Review",
        description:
          "We provide detailed aftercare instructions and a complimentary aftercare kit. A touch-up session is scheduled 6–7 weeks after your initial appointment.",
      },
    ],
    healingTimeline: [
      {
        day: "Days 1–3",
        description:
          "Brows will appear darker and bolder than the final result. Mild redness and tenderness around the area is normal. Avoid getting the area wet.",
      },
      {
        day: "Days 4–7",
        description:
          "Light flaking and itching may occur as the skin begins to heal. Do not pick or scratch the treated area. The color will appear to lighten significantly.",
      },
      {
        day: "Days 7–14",
        description:
          "The flaking subsides and brows may look patchy or lighter than expected. This is a normal part of the healing process as pigment settles into the skin.",
      },
      {
        day: "Days 14–28",
        description:
          "The true color begins to emerge as the skin fully heals. Brows will gradually darken and even out to reveal the final, beautiful result.",
      },
      {
        day: "Week 6–7",
        description:
          "Your touch-up appointment allows us to perfect the shape, fill any areas where pigment may not have retained, and adjust the color if needed.",
      },
    ],
    faqs: [
      {
        question: "What is Microblading?",
        answer:
          "Microblading is not the same as a traditional eyebrow tattoo. With microblading, we draw each hair stroke one by one to create a very real looking eyebrow. This is why getting your brows microbladed with elite can be a life changing experience.",
      },
      {
        question: "What is the difference between microblading and a brow tattoo?",
        answer:
          "Unlike traditional tattoos that go deep into the skin and use ink, microblading uses specialized pigment deposited into the upper dermis. The strokes mimic natural hair and the pigment fades naturally over time rather than turning blue or grey.",
      },
      {
        question: "How long does it last?",
        answer:
          "Microblading lasts 1-2 years and varies depending on your skin type and lifestyle. Microblading done on oily skin tends to fade faster than dry or normal skin. You need to keep touch up if you like the design.",
      },
      {
        question: "What is the healing process look like?",
        answer:
          "Your brows will need to heal for 10 days before you see the final result. During that healing process, the color of your brows will be slightly off and they might scab. You then come in for a follow up appointment 4-6 weeks after the initial procedure.",
      },
      {
        question: "Is microblading painful?",
        answer:
          "Most clients describe the sensation as mild discomfort rather than pain. We apply a professional-grade topical numbing cream before and during the procedure to ensure maximum comfort throughout your session.",
      },
      {
        question: "Who is not a good candidate for microblading?",
        answer:
          "Microblading may not be suitable for those who are pregnant or nursing, have diabetes, are on blood thinners, have active skin conditions in the brow area, or have very oily skin (combo brows may be a better option).",
      },
    ],
  },
  {
    slug: "ombre-powder-brows",
    name: "Ombre / Powder Brows",
    shortDescription:
      "Soft, powdery gradient brows that look like perfectly applied brow makeup — all day, every day.",
    description:
      "Ombre and Powder Brows is a semi-permanent technique that uses a digital machine to deposit tiny dots of pigment in a soft, gradient pattern across the brow. The result is a beautifully powdery, filled-in brow that mimics the look of professionally applied brow powder or pomade — without the daily effort.\n\nUnlike microblading, which uses manual strokes, the ombre powder technique works with the machine to create an even, dimensional finish that is especially flattering on oily, combination, or mature skin types. The gradient naturally fades from lighter at the front to more defined at the tail, giving a modern, polished look.\n\nAt Velvet Brow by Tannaz, every ombre brow session begins with careful shape mapping and color consultation to design a brow that suits your facial structure and skin tone. Whether you want a subtle everyday look or a bolder defined arch, we customize the intensity to match your preference.",
    duration: "2–2.5 hours",
    priceRange: "$550",
    touchUpPrice: "$150",
    image: "/images/custom/phibrows.png",
    processSteps: [
      {
        title: "Shape Mapping & Consultation",
        description:
          "We design your ideal brow shape using precise measurement techniques, ensuring perfect symmetry. Together we determine the ideal intensity — from soft and natural to bold and defined.",
      },
      {
        title: "Pigment Selection",
        description:
          "A custom pigment blend is selected based on your natural hair color, skin undertone, and desired warmth or coolness of tone. Test swatches are applied to preview the healed color.",
      },
      {
        title: "Numbing Application",
        description:
          "A topical numbing cream is applied generously and given time to take full effect before any work begins. Additional numbing is applied as needed throughout the session.",
      },
      {
        title: "Ombre Powder Application",
        description:
          "Using a precise digital machine, pigment is deposited in a soft dotting motion starting light at the front and gradually building density toward the arch and tail. This creates the signature ombre gradient effect.",
      },
      {
        title: "Aftercare & Touch-Up Booking",
        description:
          "You receive a complete aftercare guide and healing kit. Your touch-up appointment is scheduled 6–7 weeks after your initial session to perfect the color and fill any uneven areas.",
      },
    ],
    healingTimeline: [
      {
        day: "Days 1–3",
        description:
          "Brows appear significantly darker and more filled-in than the final result. This is expected and temporary. The area may feel slightly tender. Apply aftercare ointment as directed.",
      },
      {
        day: "Days 4–7",
        description:
          "The treated area begins to flake and peel. The powder effect may look patchy during this phase. Do not pick at flakes as this can affect pigment retention.",
      },
      {
        day: "Days 8–14",
        description:
          "Brows enter the ghost phase where they appear very light or faded. This is completely normal as fresh skin forms over the pigment below the surface.",
      },
      {
        day: "Days 15–30",
        description:
          "Color gradually returns and the powder effect becomes visible again. The final shade and soft gradient begin to emerge as the skin fully settles.",
      },
      {
        day: "Week 6–7",
        description:
          "The touch-up appointment perfects the shape and color. Any areas needing additional pigment or shade adjustments are addressed during this session.",
      },
    ],
    faqs: [
      {
        question: "What is Powder/Ombre Brows?",
        answer:
          "Powder brows is a much more defined eyebrow look than you will get with microblading. It looks less natural than microblading but will complement your makeup better and give you the look of perfectly shaped eyebrows all day long. Microblading is best suited for someone who does not wear makeup frequently and wants their brows to look very natural. Powder brows looks best on someone who wears makeup frequently and does not want to do their eyebrows every single time, saving lots of time.",
      },
      {
        question: "What is the difference between ombre brows and microblading?",
        answer:
          "Microblading uses a manual blade to create individual hair-stroke impressions. Ombre Powder Brows use a digital machine to create a soft, pixelated powder effect. Ombre brows tend to last longer and retain better on oily or mature skin types.",
      },
      {
        question: "How long does it last?",
        answer:
          "Microblading lasts 1-2 years and varies depending on your skin type and lifestyle. Microblading done on oily skin tends to fade faster than dry or normal skin.",
      },
      {
        question: "What is the healing process look like?",
        answer:
          "Your brows will need to heal for 10 days before you see the final result. During that healing process, the color of your brows will be slightly off and they might scab. You then come in for a follow up appointment 4-6 weeks after the initial procedure.",
      },
      {
        question: "Will ombre brows look natural?",
        answer:
          "Absolutely. The powder effect is fully customizable — from barely-there softness to bold and defined. Most clients are surprised by how natural and blended the results look once fully healed. We work with your existing brow hair to create a seamless result.",
      },
      {
        question: "Is ombre powder suitable for oily skin?",
        answer:
          "Yes — in fact, ombre powder brows are especially recommended for oily or combination skin. The machine technique creates more lasting pigment retention compared to manual microblading on skin that produces more oil.",
      },
    ],
  },
  {
    slug: "lip-blush",
    name: "Lip Blush",
    shortDescription:
      "A subtle wash of color for naturally rosy, perfectly defined lips.",
    description:
      "Lip blush is a semi-permanent cosmetic tattoo that enhances the natural color, shape, and definition of your lips. This technique deposits a soft wash of pigment into the lips, creating a beautiful tinted effect that looks like you are always wearing your favorite lip color.\n\nThe lip blush technique at Velvet Brow by Tannaz goes beyond simple color application. Our artists carefully correct asymmetries, define the lip border for a more polished appearance, and can even create the illusion of fuller lips through strategic shading and color placement. The result is effortlessly beautiful lips that look naturally flushed and youthful.\n\nWhether you want to correct uneven lip color, add definition to pale lips, restore color lost with age, or simply wake up with gorgeous lips every morning, lip blush is the perfect solution. Choose from a range of colors, from subtle nudes to rosy pinks to berry tones.",
    duration: "1.5–2 hours",
    priceRange: "$550",
    touchUpPrice: "$150",
    image: "/images/custom/lip-blush.png",
    processSteps: [
      {
        title: "Color Consultation",
        description:
          "We discuss your desired lip color and assess your natural lip tone, skin undertone, and lifestyle to select the perfect pigment shade. Test colors are applied to preview the result.",
      },
      {
        title: "Lip Design & Mapping",
        description:
          "Your lip shape is carefully outlined and any symmetry corrections are made. The design is drawn on and approved by you before any pigment is applied.",
      },
      {
        title: "Numbing Process",
        description:
          "A strong topical numbing cream is applied to the lips and given 20–30 minutes to take full effect. Additional numbing is applied throughout the procedure as needed for your comfort.",
      },
      {
        title: "Lip Blush Application",
        description:
          "Using a specialized machine, pigment is gently implanted into the lips in layers, building up from a soft base to the desired intensity. The color is blended for a natural gradient effect.",
      },
      {
        title: "Aftercare Instructions",
        description:
          "You receive a detailed aftercare guide and healing ointment. A touch-up session is booked for 6–7 weeks later to perfect the color and shape.",
      },
    ],
    healingTimeline: [
      {
        day: "Days 1–3",
        description:
          "Lips will appear very bright and saturated — up to 50% darker than the healed result. Swelling is normal, especially on day 2. Apply the provided healing balm frequently and stay hydrated.",
      },
      {
        day: "Days 4–7",
        description:
          "Lips begin to dry out, flake, and peel. The color will appear very uneven during this phase. Do not pick at the peeling skin. Keep lips moisturized with the aftercare balm.",
      },
      {
        day: "Days 7–14",
        description:
          "Most peeling is complete. Lips may look very light or like the color has disappeared entirely. This is temporary as the pigment is settling beneath the healed skin.",
      },
      {
        day: "Days 14–28",
        description:
          "The true lip blush color gradually emerges. Lips begin to look soft, natural, and beautifully tinted. The final result is typically 30–50% lighter than the initial application.",
      },
      {
        day: "Week 6–7",
        description:
          "Touch-up appointment to adjust the color intensity, perfect the shape, and add any additional pigment needed. This session is essential for achieving optimal, long-lasting results.",
      },
    ],
    faqs: [
      {
        question: "What is Lip Blush?",
        answer:
          "Having very pale or dark lips can be a huge knock on your confidence. You walk around seeing these beautiful people with luscious lips and want the same for yourself. There's nothing wrong with that. Lip blushing can be done with a very subtle and natural color or a bold red; it's totally up to you! We specialize in very natural looks and believe that it looks best on most clients.",
      },
      {
        question: "Is lip blush painful?",
        answer:
          "The lips are a sensitive area, but our thorough numbing protocol ensures most clients experience only mild discomfort. Many clients describe it as a tingling or vibrating sensation. We continuously check your comfort level throughout the procedure.",
      },
      {
        question: "How long does it last?",
        answer:
          "Lip blushing lasts 2-3 years and varies depending on your skin type and lifestyle. Lip blushing done on oily skin tends to fade faster than dry or normal skin.",
      },
      {
        question: "What is the healing process?",
        answer:
          "Your lips will need to heal for 10 days before you see the final result. During that healing process, the color of your lips will be slightly off and they might scab. You then come in for a follow up appointment 4-6 weeks after the initial procedure.",
      },
      {
        question: "Can lip blush make my lips look bigger?",
        answer:
          "While lip blush does not physically change lip size, it can create the illusion of fuller lips. By slightly extending the color just to the edge of the vermillion border and using strategic shading, we can enhance the appearance of lip volume and definition.",
      },
      {
        question: "What if I get cold sores?",
        answer:
          "If you have had a cold sore in the past, you will need to advise your doctor and take a medicine similar to Valtrex to prevent you from getting a cold sore after the treatment.",
      },
    ],
  },
  {
    slug: "brow-lamination-tint",
    name: "Brow Lamination & Tint",
    shortDescription:
      "Smooth, lifted, fuller-looking brows with a custom tint — no needles, no downtime.",
    description:
      "Brow lamination is a semi-permanent styling treatment that relaxes and re-sets your natural brow hairs into a uniform, lifted shape. The result is fuller, fluffier, perfectly groomed brows that stay in place — think of it as a perm for your eyebrows.\n\nPaired with a custom tint, we add depth and definition by darkening the brow hairs (and any fine, light hairs) to frame your face beautifully. It is the perfect option if you want a bolder, brushed-up brow without any tattooing or commitment.\n\nAt Velvet Brow by Tannaz, every lamination begins with a shape consultation so the finished look suits your features and lifestyle. Results typically last 4 to 6 weeks.",
    duration: "45–60 min",
    priceRange: "$120",
    image: "/images/custom/phibrows.png",
    processSteps: [
      {
        title: "Consultation & Shaping",
        description:
          "We assess your natural brows and discuss the shape and fullness you want, then clean up and map the brow area.",
      },
      {
        title: "Lamination",
        description:
          "A gentle lifting solution softens the hairs, which are then brushed up and set into your desired shape.",
      },
      {
        title: "Tint & Finish",
        description:
          "A custom tint adds depth and definition, followed by a nourishing treatment to keep the hairs healthy and conditioned.",
      },
    ],
    healingTimeline: [
      {
        day: "First 24 hours",
        description:
          "Keep the brows dry and avoid steam, sweat, and makeup on the area so the new shape fully sets.",
      },
      {
        day: "After 24 hours",
        description:
          "Resume your normal routine. Brush the brows into shape daily and apply a nourishing oil to keep them soft.",
      },
      {
        day: "4–6 weeks",
        description:
          "The lamination gradually relaxes as your natural growth cycle refreshes. Rebook to maintain the lifted look.",
      },
    ],
    faqs: [
      {
        question: "How long does brow lamination last?",
        answer:
          "Results typically last 4 to 6 weeks, depending on your natural hair growth and how you care for your brows at home.",
      },
      {
        question: "Is it safe for my brow hairs?",
        answer:
          "Yes. We use professional, gentle products and always finish with a conditioning treatment. We also perform a patch test if it is your first time.",
      },
      {
        question: "Can I combine it with a tint?",
        answer:
          "Absolutely — lamination and tint are the perfect pair. The tint adds definition and makes even fine, light hairs visible for a fuller look.",
      },
    ],
  },
  {
    slug: "lash-lift-tint",
    name: "Lash Lift & Tint",
    shortDescription:
      "Your own lashes, lifted and darkened for a wide-awake, mascara-free look.",
    description:
      "A lash lift is a semi-permanent treatment that curls your natural lashes from the base, creating the appearance of longer, fuller, beautifully lifted eyes — no extensions required. Add a tint to darken your lashes from root to tip, and you get an effortless, mascara-free look that lasts for weeks.\n\nIt is the ideal low-maintenance option for anyone who wants to wake up ready. Lash lift and tint is gentle on your natural lashes and works with your own length to open up the eyes.\n\nAt Velvet Brow by Tannaz, we customize the curl to suit your eye shape and lash length, so the result always looks natural and flattering. Results typically last 6 to 8 weeks.",
    duration: "45–60 min",
    priceRange: "$100",
    image: "/images/custom/permanent-eyeliner.png",
    processSteps: [
      {
        title: "Consultation",
        description:
          "We discuss your desired curl and assess your natural lashes and eye shape to choose the most flattering lift.",
      },
      {
        title: "Lift & Set",
        description:
          "Your lashes are gently lifted onto a silicone shield and set with a professional solution to create a natural, lasting curl.",
      },
      {
        title: "Tint & Nourish",
        description:
          "A custom tint darkens the lashes from root to tip, finished with a nourishing serum to keep them healthy and conditioned.",
      },
    ],
    healingTimeline: [
      {
        day: "First 24 hours",
        description:
          "Keep lashes dry and avoid steam, sweat, and eye makeup so the curl fully sets. Do not rub your eyes.",
      },
      {
        day: "After 24 hours",
        description:
          "Return to your normal routine. Brush lashes gently and apply a lash serum to keep them nourished.",
      },
      {
        day: "6–8 weeks",
        description:
          "The lift relaxes as your lashes naturally shed and regrow. Rebook to maintain the curl and tint.",
      },
    ],
    faqs: [
      {
        question: "How long does a lash lift last?",
        answer:
          "A lash lift and tint typically lasts 6 to 8 weeks, following your natural lash growth cycle.",
      },
      {
        question: "Will it damage my natural lashes?",
        answer:
          "No — when performed correctly with professional products, a lash lift is gentle and does not damage your lashes. We finish with a conditioning treatment.",
      },
      {
        question: "Can I wear mascara afterwards?",
        answer:
          "Yes, though most clients find they no longer need it. Wait 24 hours before applying mascara, and use an oil-free formula.",
      },
    ],
  },
  {
    slug: "threading",
    name: "Threading",
    shortDescription:
      "Precise, gentle hair removal that shapes your brows with crisp, clean definition.",
    description:
      "Threading is an all-natural hair removal technique that uses a twisted cotton thread to lift hair directly from the follicle. It offers incredible precision, making it the gold standard for shaping brows and removing fine facial hair with clean, defined lines.\n\nBecause it uses no chemicals or hot wax, threading is gentle and ideal for sensitive skin. It removes even the finest hairs for a crisp, polished finish.\n\nAt Velvet Brow by Tannaz, we map your brows to your unique features first, so every thread enhances your natural shape.",
    duration: "15 min",
    priceRange: "$20",
    image: "/images/custom/microblading.png",
    processSteps: [
      {
        title: "Brow Mapping",
        description:
          "We assess your natural shape and facial structure to design brows that flatter your features.",
      },
      {
        title: "Threading",
        description:
          "Using a twisted cotton thread, unwanted hairs are removed with precision, following your mapped shape.",
      },
      {
        title: "Soothe & Finish",
        description:
          "The area is soothed with a gentle, calming product to reduce any redness and leave the skin comfortable.",
      },
    ],
    healingTimeline: [
      {
        day: "Right after",
        description:
          "Mild redness is normal and settles within an hour or two. Avoid touching the area and skip heavy makeup for the rest of the day.",
      },
      {
        day: "First 24 hours",
        description:
          "Avoid sun exposure, saunas, and active skincare (retinol, exfoliants) to keep the freshly threaded skin calm.",
      },
    ],
    faqs: [
      {
        question: "Does threading hurt?",
        answer:
          "Most clients feel only a quick, mild sensation. Threading is fast and precise, and any redness fades within an hour or two.",
      },
      {
        question: "How is threading better than waxing for brows?",
        answer:
          "Threading offers greater precision for shaping, removes even the finest hairs, and uses no hot wax or chemicals — making it especially good for sensitive skin.",
      },
    ],
  },
  {
    slug: "waxing",
    name: "Waxing",
    shortDescription:
      "Smooth, long-lasting hair removal for the face with premium, gentle wax.",
    description:
      "Waxing removes hair directly from the root for smooth, long-lasting results that last far longer than shaving. Over time, regular waxing can leave regrowth looking finer and sparser.\n\nWe use premium, skin-friendly wax and careful technique to keep the experience as comfortable as possible, leaving your skin smooth and refined.\n\nAt Velvet Brow by Tannaz, our facial waxing is quick, precise, and tailored to your skin — perfect on its own or added to any brow appointment.",
    duration: "15–30 min",
    priceRange: "From $15",
    image: "/images/custom/combo-brows.png",
    processSteps: [
      {
        title: "Consultation & Prep",
        description:
          "We discuss the areas you would like treated, then cleanse and prep the skin to ensure the best results.",
      },
      {
        title: "Waxing",
        description:
          "Premium wax is applied and removed with a swift, careful technique to lift hair from the root while protecting the skin.",
      },
      {
        title: "Soothe & Finish",
        description:
          "A calming, hydrating product is applied to soothe the skin and minimize any redness.",
      },
    ],
    healingTimeline: [
      {
        day: "Right after",
        description:
          "Mild redness or sensitivity is normal and typically settles within a few hours. Avoid touching the treated area.",
      },
      {
        day: "First 24–48 hours",
        description:
          "Avoid sun, heat, saunas, swimming, and active skincare to let the skin fully calm. Keep the area clean and moisturized.",
      },
    ],
    faqs: [
      {
        question: "How long does waxing last?",
        answer:
          "Results typically last 3 to 4 weeks, depending on your natural hair growth cycle. Regular waxing can make regrowth appear finer over time.",
      },
      {
        question: "Which areas do you wax?",
        answer:
          "We offer facial waxing including brows, lip, chin, and sides. Let us know what you would like during your consultation.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}

export async function getServices(): Promise<Service[]> {
  const [stored, meta] = await Promise.all([
    readJsonFileOrNull<Service>("services.json"),
    readJsonObject<{ v: number }>("services-meta.json"),
  ]);

  // If blob exists AND migration is current → return as-is (respect admin edits)
  if (stored !== null && (meta?.v ?? 0) >= SEED_VERSION) return stored;

  // Migration: reconcile the stored list to the current seed — drop removed
  // services, add new ones, refresh branded copy, and keep admin's price + image.
  const storedBySlug = new Map((stored ?? []).map((s) => [s.slug, s]));
  const next: Service[] = services.map((seed) => {
    const prev = storedBySlug.get(seed.slug);
    if (!prev) return seed;
    return {
      ...seed,
      priceRange: prev.priceRange || seed.priceRange,
      touchUpPrice: prev.touchUpPrice || seed.touchUpPrice,
      image: prev.image || seed.image,
    };
  });

  await Promise.all([
    writeJsonFile("services.json", next),
    writeJsonObject("services-meta.json", { v: SEED_VERSION }),
  ]);
  return next;
}

export async function getServiceBySlugAsync(
  slug: string
): Promise<Service | undefined> {
  return (await getServices()).find((s) => s.slug === slug);
}

export async function getAllServiceSlugsAsync(): Promise<string[]> {
  return (await getServices()).map((s) => s.slug);
}
