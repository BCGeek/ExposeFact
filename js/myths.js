// myths.js — 100 myth entries for ExposeFact.com
// verdict options: FALSE | MOSTLY FALSE | PARTLY TRUE | MOSTLY TRUE | SURPRISINGLY TRUE

const MYTHS = [
  {
    slug: "only-use-10-percent-of-brain",
    claim: "Humans only use 10% of their brains",
    verdict: "FALSE",
    category: "health",
    emoji: "🧠",
    title: "Do We Really Only Use 10% of Our Brains?",
    truth: "Brain imaging shows we use virtually all of our brain — just not every region simultaneously. Different areas activate for different tasks: vision, language, movement, emotion. Over any given day, nearly every part of your brain fires at some point. The brain consumes about 20% of your body's total energy despite being only 2% of your mass — evolution would never preserve such costly tissue if 90% were truly idle. The myth was popularized by self-help books promising to unlock 'hidden potential.'",
    why: "Motivational speakers used it for decades to imply we have vast untapped mental reserves."
  },
  {
    slug: "reading-dim-light-ruins-eyesight",
    claim: "Reading in dim light ruins your eyesight",
    verdict: "FALSE",
    category: "health",
    emoji: "👁️",
    title: "Does Reading in Dim Light Damage Your Eyes?",
    truth: "Reading in low light causes eye strain and fatigue — your eyes work harder to focus, and you blink less, causing dryness. But these effects are entirely temporary and resolve with rest. Ophthalmologists confirm there is no evidence it causes any permanent structural damage to the eye. The American Academy of Ophthalmology has stated clearly that dim light reading does not hurt your eyes. It's simply uncomfortable, not harmful.",
    why: "Parents told children this for generations, and the short-term discomfort made it believable."
  },
  {
    slug: "eight-glasses-water-per-day",
    claim: "You need exactly 8 glasses of water a day",
    verdict: "MOSTLY FALSE",
    category: "health",
    emoji: "💧",
    title: "Do You Really Need 8 Glasses of Water a Day?",
    truth: "The '8×8' rule has no solid scientific foundation. Hydration needs vary widely based on body size, activity level, climate, and diet. Much of your daily water intake comes from food — fruits, vegetables, and even coffee contribute. The Institute of Medicine recommends about 3.7 liters for men and 2.7 liters for women total, but that includes water from all sources. The best guide is simply thirst — your body is well-equipped to signal when it needs water.",
    why: "The guideline likely traces to a 1945 nutritional recommendation that was widely misquoted."
  },
  {
    slug: "cracking-knuckles-causes-arthritis",
    claim: "Cracking your knuckles causes arthritis",
    verdict: "FALSE",
    category: "health",
    emoji: "🖐️",
    title: "Does Cracking Your Knuckles Cause Arthritis?",
    truth: "Doctor Donald Unger cracked the knuckles of only his left hand every day for 60 years, leaving his right hand alone as a control. Neither hand developed arthritis. Multiple studies confirm no link between knuckle cracking and arthritis. The popping sound is caused by nitrogen gas bubbles collapsing or forming in the synovial fluid of the joint. It may annoy people nearby, but it does not damage cartilage or cause joint disease.",
    why: "The loud pop sounds alarming, as if something is breaking, so damage seemed logical."
  },
  {
    slug: "shaving-makes-hair-grow-thicker",
    claim: "Shaving makes hair grow back thicker and darker",
    verdict: "FALSE",
    category: "health",
    emoji: "🪒",
    title: "Does Shaving Make Hair Grow Back Thicker?",
    truth: "A razor cuts hair at the surface, leaving a blunt, flat tip. As that flat tip grows out, it can feel stubbly and appear darker because you're seeing the full cross-section of the hair. But the follicle — buried under the skin — is completely unaffected by what happens at the surface. The hair's actual thickness, color, and growth rate are determined by the follicle, not the blade. Multiple clinical studies have confirmed shaving has no effect on hair properties.",
    why: "The stubbly regrowth genuinely feels rougher, so the conclusion seemed obvious."
  },
  {
    slug: "cold-weather-causes-colds",
    claim: "Going outside in cold weather gives you a cold",
    verdict: "FALSE",
    category: "health",
    emoji: "🤧",
    title: "Can Cold Weather Actually Give You a Cold?",
    truth: "Colds are caused by viruses — primarily rhinoviruses — not by cold temperatures. You can only catch a cold by exposure to the virus, typically from an infected person. Cold weather correlates with cold season because people spend more time indoors in close contact, making viral transmission easier. Some research suggests cold air may slightly reduce nasal defenses, but exposure to the virus is the necessary ingredient. Going out with wet hair in winter will not give you a cold.",
    why: "The timing overlap between cold weather and cold season made the association feel causal."
  },
  {
    slug: "humans-have-only-five-senses",
    claim: "Humans have only five senses",
    verdict: "FALSE",
    category: "health",
    emoji: "🫀",
    title: "Do Humans Really Have Only Five Senses?",
    truth: "The 'five senses' — sight, hearing, smell, taste, touch — were listed by Aristotle and the label stuck. But modern science recognizes many more. Proprioception tells you where your limbs are without looking. Vestibular sense gives you balance. Nociception detects pain. Thermoception senses temperature. Interoception tracks internal states like hunger, thirst, and heartbeat. Estimates of how many senses humans have range from 9 to over 20, depending on how you define and subdivide them.",
    why: "Aristotle's five-sense framework was taught as fact for over 2,000 years."
  },
  {
    slug: "most-heat-lost-through-head",
    claim: "You lose most body heat through your head",
    verdict: "FALSE",
    category: "health",
    emoji: "🎩",
    title: "Do You Really Lose Most Body Heat Through Your Head?",
    truth: "Heat loss depends on the surface area exposed, not on some special property of the head. The head is roughly 10% of your body's surface area — so if it's uncovered, it loses about 10% of your heat. The myth likely originated from 1950s military studies where soldiers wore insulated suits but left their heads bare, making the head appear to account for most heat loss. A bare torso would lose far more heat than a bare head.",
    why: "The military study was widely misreported in survival guides and parenting advice for decades."
  },
  {
    slug: "eating-before-bed-causes-weight-gain",
    claim: "Eating before bed makes you gain weight",
    verdict: "MOSTLY FALSE",
    category: "health",
    emoji: "🌙",
    title: "Does Eating Before Bed Make You Gain Weight?",
    truth: "Weight gain comes from total calorie surplus, not meal timing. Your body processes calories the same whether you eat at noon or midnight. The reason late-night eating correlates with weight gain in studies is that people tend to snack mindlessly on high-calorie foods while watching TV, not because the clock is the problem. Some research does suggest your metabolism runs slightly slower at night, but the effect is small compared to total intake. For most people, when you eat matters far less than what and how much.",
    why: "The correlation between late-night snacking and weight gain was mistaken for causation."
  },
  {
    slug: "sugar-makes-kids-hyperactive",
    claim: "Sugar makes children hyperactive",
    verdict: "FALSE",
    category: "health",
    emoji: "🍬",
    title: "Does Sugar Really Make Kids Hyperactive?",
    truth: "More than a dozen double-blind, placebo-controlled studies have found no link between sugar intake and hyperactivity in children. In one famous study, parents were told their children drank sugary drinks when they had actually consumed sugar-free drinks — parents still rated those children as more hyperactive. The real culprit is context: sugar-rich occasions (birthday parties, Halloween) naturally involve excitement and stimulation. The hyperactivity is from the event, not the sugar.",
    why: "It's an intuitive idea confirmed by the excitement of sugary occasions, which disguises the real cause."
  },
  {
    slug: "swimming-after-eating-is-dangerous",
    claim: "Swimming right after eating causes dangerous cramps",
    verdict: "FALSE",
    category: "health",
    emoji: "🏊",
    title: "Is It Dangerous to Swim Right After Eating?",
    truth: "The American Red Cross and most medical organizations have dropped warnings about swimming after eating. While digestion does divert some blood flow to the digestive system, there is no evidence this causes the severe muscle cramps that could cause drowning. You might feel some mild discomfort or reduced stamina during intense swimming on a full stomach, but nothing approaching a medical emergency. The myth was cautionary advice that became treated as medical fact.",
    why: "Parents used it as a practical post-meal rest rule, and the drowning risk made it stick firmly."
  },
  {
    slug: "hair-and-nails-grow-after-death",
    claim: "Hair and nails keep growing after death",
    verdict: "FALSE",
    category: "health",
    emoji: "💅",
    title: "Do Hair and Nails Really Grow After Death?",
    truth: "Hair and nail growth require active cellular metabolism — glucose and hormonal signals that stop completely at death. What actually happens is that skin dehydrates and retracts after death, making hair stubble and nail beds more visible, which creates the illusion of growth. A corpse's skin can retract by several millimeters, enough to make stubble that was already there appear to be new growth. No cell division continues after death.",
    why: "The visual effect of skin retraction in old reports made it appear as though growth had occurred."
  },
  {
    slug: "blood-is-blue-inside-the-body",
    claim: "Blood is blue inside your body until it hits oxygen",
    verdict: "FALSE",
    category: "health",
    emoji: "🩸",
    title: "Is Your Blood Blue Inside Your Body?",
    truth: "Blood is always red — whether oxygenated or not. Oxygenated blood is bright red; deoxygenated blood is a darker, deeper red. The confusion comes from looking at veins through the skin: veins appear blue or green because of how light penetrates and reflects through layers of tissue. Different wavelengths of light are absorbed differently by skin and tissue, making blue wavelengths more visible at the surface. If you could look directly at deoxygenated blood, it would be dark red.",
    why: "Veins visibly appear blue through the skin, and the science explanation was never taught clearly."
  },
  {
    slug: "alcohol-warms-you-up",
    claim: "Drinking alcohol keeps you warm in cold weather",
    verdict: "FALSE",
    category: "health",
    emoji: "🥃",
    title: "Does Alcohol Actually Warm You Up?",
    truth: "Alcohol causes blood vessels near the skin to dilate, which creates a sensation of warmth — but this actually accelerates heat loss from your body's core. You feel warmer while your core temperature is dropping. This is why alcohol is genuinely dangerous in cold conditions: the false warmth masks the real risk of hypothermia. The Saint Bernard rescue-dog brandy barrel is a charming image, but giving alcohol to a cold, distressed person is medically counterproductive.",
    why: "The warm flush from alcohol is a strong physical sensation that makes the warming effect seem real."
  },
  {
    slug: "carrots-improve-your-eyesight",
    claim: "Eating carrots improves your eyesight",
    verdict: "MOSTLY FALSE",
    category: "food",
    emoji: "🥕",
    title: "Do Carrots Actually Improve Your Eyesight?",
    truth: "Carrots contain beta-carotene, which your body converts to vitamin A — and vitamin A is essential for producing rhodopsin, a pigment in the eye needed for low-light vision. If you are severely vitamin A deficient (rare in developed countries), eating carrots can help restore normal vision. But if your vitamin A levels are already normal, eating more carrots does nothing extra for your eyesight. The myth was partly boosted by British WWII propaganda to hide the fact that radar — not exceptional pilot vision — was locating enemy planes.",
    why: "WWII British propaganda spread the story of 'carrot-enhanced' pilot eyesight to protect radar secrets."
  },
  {
    slug: "vitamin-c-prevents-colds",
    claim: "Taking vitamin C prevents you from catching a cold",
    verdict: "MOSTLY FALSE",
    category: "health",
    emoji: "🍊",
    title: "Does Vitamin C Actually Prevent Colds?",
    truth: "Large-scale reviews of vitamin C studies (Cochrane Review) found that regular vitamin C supplementation does not prevent colds in the general population. It may modestly reduce the duration of a cold by about half a day on average, and there is some evidence it helps people under extreme physical stress (like marathon runners) reduce cold frequency. But taking vitamin C after you feel cold symptoms starting has no proven benefit. The Nobel Prize-winning chemist Linus Pauling popularized megadose vitamin C, but the science has not supported his claims.",
    why: "Linus Pauling's passionate advocacy in the 1970s gave the idea enormous credibility."
  },
  {
    slug: "left-brain-right-brain-personality",
    claim: "People are either left-brained (logical) or right-brained (creative)",
    verdict: "FALSE",
    category: "health",
    emoji: "🔄",
    title: "Is the Left-Brain/Right-Brain Personality Theory Real?",
    truth: "A landmark 2013 study using fMRI scans on over 1,000 people found no evidence that individuals consistently use one brain hemisphere more than the other. Both hemispheres are constantly active and communicate continuously through the corpus callosum. While certain functions do have some lateralization (language tends to be left-hemisphere dominant in most people), this doesn't translate to personality types. The left/right brain personality model is a pop-psychology simplification with no basis in neuroscience.",
    why: "The theory emerged from split-brain surgery research that was dramatically oversimplified for popular audiences."
  },
  {
    slug: "stress-causes-gray-hair",
    claim: "Severe stress can turn your hair gray overnight",
    verdict: "MOSTLY FALSE",
    category: "health",
    emoji: "👴",
    title: "Can Stress Actually Turn Your Hair Gray?",
    truth: "Hair cannot turn gray overnight because only the growing portion of the hair shaft (inside the follicle) is alive. Already-grown hair is dead and cannot change color. However, research published in 2020 found that stress hormones can accelerate the depletion of melanocyte stem cells in hair follicles, which genuinely speeds up graying over time. Stories of leaders going gray during wartime (Marie Antoinette, Barack Obama) reflect real biological pressure — just compressed in our memory of the timeline.",
    why: "The dramatic political stories of overnight graying made the instantaneous version feel credible."
  },
  {
    slug: "antibiotics-must-always-be-finished",
    claim: "You must always finish a full antibiotic course, even if you feel better",
    verdict: "PARTLY TRUE",
    category: "health",
    emoji: "💊",
    title: "Should You Always Finish Your Antibiotics?",
    truth: "Medical guidance on this has shifted. The traditional 'always finish the course' advice was designed to prevent relapse and reduce resistance risk. But a 2017 paper in the BMJ argued that unnecessarily long antibiotic courses may actually increase resistance risk by exposing more bacteria to antibiotics for longer. Current thinking is more nuanced: some infections genuinely require full courses (tuberculosis, strep throat), while others may be safe to stop when symptoms resolve. Always follow your specific doctor's advice rather than a blanket rule.",
    why: "The 'finish the course' rule was drilled into patients for decades and is still often appropriate."
  },
  {
    slug: "coffee-stunts-your-growth",
    claim: "Coffee stunts children's growth",
    verdict: "FALSE",
    category: "food",
    emoji: "☕",
    title: "Does Coffee Actually Stunt Your Growth?",
    truth: "No scientific evidence links caffeine or coffee consumption to reduced height or stunted growth. The myth may have originated from old research suggesting coffee could contribute to osteoporosis by slightly reducing calcium absorption, but that effect is small and easily offset by adequate calcium intake. Height is primarily determined by genetics, nutrition, and sleep — not caffeine. Long-term studies tracking childhood coffee drinking have found no effect on adult height.",
    why: "Coffee was historically discouraged for children for behavioral reasons, and 'it stunts growth' made a convenient deterrent."
  },
  {
    slug: "eating-fat-makes-you-fat",
    claim: "Eating fat makes you fat",
    verdict: "MOSTLY FALSE",
    category: "food",
    emoji: "🥑",
    title: "Does Eating Fat Make You Fat?",
    truth: "Dietary fat does not directly translate to body fat. Weight gain results from consuming more calories than you expend, regardless of macronutrient source. Fat has more calories per gram than carbohydrates or protein, so portion awareness matters — but the fat itself isn't the culprit. The low-fat diet craze of the 1980s–90s led people to replace fat with refined carbohydrates and sugar, which contributed to rising obesity rates. Healthy fats from avocados, nuts, and olive oil are beneficial for heart health and satiety.",
    why: "The word 'fat' meaning both dietary fat and body fat made the connection seem literal and logical."
  },
  {
    slug: "brown-eggs-more-nutritious",
    claim: "Brown eggs are more nutritious than white eggs",
    verdict: "FALSE",
    category: "food",
    emoji: "🥚",
    title: "Are Brown Eggs Actually Better Than White Eggs?",
    truth: "The color of an eggshell is determined entirely by the breed of the hen — it has nothing to do with nutrition, diet, or quality. White-feathered hens with white earlobes generally lay white eggs; reddish-brown hens generally lay brown eggs. Nutritionally, brown and white eggs are identical. Brown eggs tend to cost more because the hen breeds that lay them are larger and eat more feed, raising production costs. The color is purely cosmetic.",
    why: "Brown eggs feel more natural and artisanal; white eggs look factory-processed — so the bias feels intuitive."
  },
  {
    slug: "searing-meat-seals-in-juices",
    claim: "Searing meat at high heat seals in its juices",
    verdict: "FALSE",
    category: "food",
    emoji: "🥩",
    title: "Does Searing Meat Really Seal In the Juices?",
    truth: "Food scientist Harold McGee and chef Heston Blumenthal both tested this experimentally. Seared meat actually loses more moisture than non-seared meat cooked at the same temperature. The real value of searing is the Maillard reaction — the complex browning of proteins and sugars on the surface that creates hundreds of flavor compounds. Searing tastes amazing because it creates flavor, not because it creates a physical moisture barrier. The 'sealed' surface is still permeable to moisture.",
    why: "The idea that a hard crust could seal liquid in is physically intuitive, and the technique does produce juicy results."
  },
  {
    slug: "margarine-healthier-than-butter",
    claim: "Margarine is healthier than butter",
    verdict: "MOSTLY FALSE",
    category: "food",
    emoji: "🧈",
    title: "Is Margarine Actually Healthier Than Butter?",
    truth: "The margarine-is-healthier belief came from decades of research focusing on saturated fat in butter. Early margarines were loaded with trans fats (hydrogenated vegetable oils), which turned out to be far more harmful to heart health than the saturated fat they replaced. Many margarines have since reformulated to remove trans fats, and some are now genuinely reasonable choices. But the blanket claim that margarine beats butter is no longer supported. The picture is complicated; both have trade-offs.",
    why: "Anti-saturated-fat public health campaigns in the 1970s–80s positioned margarine as the modern, safe alternative."
  },
  {
    slug: "spicy-food-causes-stomach-ulcers",
    claim: "Spicy food causes stomach ulcers",
    verdict: "FALSE",
    category: "food",
    emoji: "🌶️",
    title: "Does Spicy Food Actually Cause Stomach Ulcers?",
    truth: "The discovery that most peptic ulcers are caused by the bacterium Helicobacter pylori earned Barry Marshall and Robin Warren the 2005 Nobel Prize in Medicine. H. pylori — not spice — is responsible for the vast majority of ulcers. The second major cause is long-term use of NSAIDs like aspirin and ibuprofen. Spicy food can irritate an existing ulcer and worsen symptoms, but it does not create one. Marshall famously drank a culture of H. pylori to prove it caused gastritis.",
    why: "The burning sensation of spice on an ulcerated stomach made cause and symptom feel like the same thing."
  },
  {
    slug: "microwaving-food-destroys-nutrients",
    claim: "Microwaving food destroys its nutrients",
    verdict: "MOSTLY FALSE",
    category: "food",
    emoji: "📡",
    title: "Does Microwaving Destroy the Nutrients in Food?",
    truth: "All cooking methods degrade some nutrients — heat, water, and time are the main enemies. Microwaving is actually one of the gentler methods because it cooks food quickly with minimal water. Boiling vegetables, by contrast, leaches water-soluble vitamins (like vitamin C and B vitamins) into the cooking water. Microwaves heat food using radiation that causes water molecules to vibrate — they don't make food radioactive or structurally damage nutrients beyond what any heat source does.",
    why: "The word 'radiation' associated with microwaves triggers fear, even though it refers to non-ionizing wave energy."
  },
  {
    slug: "msg-is-dangerous",
    claim: "MSG (monosodium glutamate) is harmful to eat",
    verdict: "FALSE",
    category: "food",
    emoji: "🍜",
    title: "Is MSG Actually Bad for You?",
    truth: "MSG has been studied extensively and is classified as 'Generally Recognized As Safe' (GRAS) by the FDA. Glutamate — the flavor-active component — is found naturally in tomatoes, parmesan cheese, mushrooms, and soy sauce, and your body cannot distinguish the naturally occurring glutamate from the added form. Double-blind studies have consistently failed to confirm 'Chinese Restaurant Syndrome' symptoms (headache, flushing) at normal dietary doses. The bias against MSG has racist historical roots and is not supported by science.",
    why: "A 1968 letter in the New England Journal of Medicine linking MSG to vague symptoms launched a lasting stigma."
  },
  {
    slug: "fruit-juice-as-healthy-as-whole-fruit",
    claim: "Fruit juice is just as healthy as eating whole fruit",
    verdict: "FALSE",
    category: "food",
    emoji: "🍹",
    title: "Is Fruit Juice as Healthy as Whole Fruit?",
    truth: "Juicing fruit strips away most of the fiber, which is critical for slowing sugar absorption and supporting gut health. What remains is concentrated fruit sugar — fructose — that hits the bloodstream quickly. An 8 oz glass of orange juice contains roughly the same sugar as a can of soda, without the fiber that would buffer its effect. Studies link regular fruit juice consumption to increased type 2 diabetes risk, while whole fruit consumption is associated with reduced risk. Eating the whole fruit is meaningfully better.",
    why: "Juice marketing emphasizes vitamin content and natural origin, obscuring the high sugar and missing fiber."
  },
  {
    slug: "honey-never-expires",
    claim: "Honey never expires and lasts forever",
    verdict: "SURPRISINGLY TRUE",
    category: "food",
    emoji: "🍯",
    title: "Does Honey Really Last Forever?",
    truth: "This one is actually true. Archaeologists have found 3,000-year-old honey in Egyptian tombs that was still perfectly edible. Honey's remarkable preservation comes from several properties: extremely low moisture content (bacteria need water to grow), natural hydrogen peroxide produced by enzymes in honey, high sugar concentration that creates osmotic pressure lethal to microbes, and an acidic pH. As long as honey is stored sealed and dry, it will not spoil — ever. Crystallization is normal and reversible; it doesn't mean the honey has gone bad.",
    why: "It seems too good to be true that any food product could last indefinitely."
  },
  {
    slug: "organic-food-is-more-nutritious",
    claim: "Organic food is significantly more nutritious than conventional produce",
    verdict: "MOSTLY FALSE",
    category: "food",
    emoji: "🥦",
    title: "Is Organic Food Actually More Nutritious?",
    truth: "Large-scale systematic reviews — including a Stanford University meta-analysis of 237 studies — found no strong evidence that organic produce is consistently more nutritious than conventionally grown food. Some studies show marginally higher antioxidant levels in certain organic items, but the differences are small and their health significance unclear. Organic farming prohibits synthetic pesticides (using natural ones instead) and is associated with environmental benefits like soil health. But buying organic for nutritional reasons is not well-supported by current evidence.",
    why: "The 'natural' framing of organic food makes nutritional superiority feel intuitive."
  },
  {
    slug: "napoleon-was-very-short",
    claim: "Napoleon Bonaparte was unusually short",
    verdict: "FALSE",
    category: "history",
    emoji: "👑",
    title: "Was Napoleon Really That Short?",
    truth: "Napoleon stood about 5'7\" (170 cm) — average or slightly above average for a French man of his era. The confusion arose from a unit conversion error: French inches were longer than English inches, so his recorded height of '5 foot 2' in French units was mistranslated to English. British propaganda cartoonists, particularly James Gillray, also gleefully exaggerated his short stature for satirical effect. His nickname 'le petit caporal' referred to camaraderie with troops, not his height.",
    why: "British wartime propaganda made 'little Napoleon' a cultural fixture that outlasted the war by 200 years."
  },
  {
    slug: "columbus-proved-earth-was-round",
    claim: "Columbus sailed west to prove the Earth was round",
    verdict: "FALSE",
    category: "history",
    emoji: "🌍",
    title: "Did Columbus Actually Prove the Earth Was Round?",
    truth: "Educated Europeans already knew the Earth was spherical — this had been established by ancient Greek astronomers, most notably Eratosthenes, who calculated Earth's circumference with impressive accuracy around 240 BC. Medieval scholars, clergy, and navigators all accepted a spherical Earth. The actual debate before Columbus's voyage was about the size of the Earth, not its shape — Columbus's critics correctly argued he underestimated the distance. He got lucky that an unknown continent lay in his path.",
    why: "The flat-Earth misconception about medieval people was popularized by Washington Irving's fictional biography of Columbus in 1828."
  },
  {
    slug: "einstein-failed-math-in-school",
    claim: "Albert Einstein failed mathematics in school",
    verdict: "FALSE",
    category: "history",
    emoji: "📐",
    title: "Did Einstein Really Fail Math in School?",
    truth: "Einstein excelled at mathematics and physics from childhood. He mastered calculus by age 15. The confusion stems from a Swiss grading system where the highest grade is 6 and the lowest is 1 — the opposite of some other systems. When his transcripts were misread by people unfamiliar with this scale, his top marks appeared to be failures. He did fail his first entrance exam to the Swiss Federal Polytechnic, but that was for non-science subjects — his science and math scores were exceptional.",
    why: "The story is so appealing to underachievers that it spread widely despite being easily disproven."
  },
  {
    slug: "great-wall-visible-from-space",
    claim: "The Great Wall of China is visible from space with the naked eye",
    verdict: "FALSE",
    category: "history",
    emoji: "🏯",
    title: "Can You Really See the Great Wall of China from Space?",
    truth: "The Great Wall is roughly 15–30 feet wide — far too narrow to see from low Earth orbit (about 250 miles up) with the naked eye. Astronaut Ed Lu confirmed he could not see it during his mission. Chinese astronaut Yang Liwei also reported not seeing it. You would need eyesight roughly 17,000 times better than 20/20 vision to spot the Wall from the ISS unaided. Some clear photographs taken from low orbit have captured it, but with camera zoom assistance.",
    why: "The claim appeared in a 1932 Ripley's Believe It or Not and was repeated in textbooks for decades."
  },
  {
    slug: "vikings-wore-horned-helmets",
    claim: "Vikings wore horned helmets in battle",
    verdict: "FALSE",
    category: "history",
    emoji: "⚔️",
    title: "Did Vikings Actually Wear Horned Helmets?",
    truth: "Only one well-preserved Viking helmet has been found — the Gjermundbu helmet from Norway — and it has no horns. Historical and archaeological evidence suggests Vikings wore simple iron or leather helmets for practical combat purposes. The horned helmet image comes almost entirely from a 19th-century theatrical costume designer named Carl Emil Doepler, who created horned helmets for an 1876 production of Wagner's Ring Cycle. The romantic image stuck. Horned ceremonial helmets did exist in Scandinavia, but from the Bronze Age — over a thousand years before the Viking era.",
    why: "19th-century Romanticism reimagined Vikings as dramatic, savage warriors, and the look was irresistible."
  },
  {
    slug: "george-washington-had-wooden-teeth",
    claim: "George Washington had wooden dentures",
    verdict: "FALSE",
    category: "history",
    emoji: "🦷",
    title: "Did George Washington Have Wooden Teeth?",
    truth: "Washington did suffer severe dental problems and wore dentures for most of his adult life — but they were never made of wood. His dentures were made from ivory (hippopotamus, walrus, and elephant), human teeth (possibly purchased from enslaved people), and metal alloys. The construction was elaborate and painful-looking. Wood would be completely impractical as a dental material — it absorbs moisture and warps. The wood myth may have arisen from the discolored, grainy appearance of ivory dentures over time.",
    why: "The story of wooden teeth is so memorable and strange that it became fixed as a quirky historical fact."
  },
  {
    slug: "nero-fiddled-while-rome-burned",
    claim: "Emperor Nero played the fiddle while Rome burned in 64 AD",
    verdict: "FALSE",
    category: "history",
    emoji: "🎻",
    title: "Did Nero Really Fiddle While Rome Burned?",
    truth: "The fiddle (violin family) wasn't invented until the 16th century — over 1,500 years after the Great Fire of Rome. Nero did play the lyre and fancied himself an artist. Ancient sources like Tacitus report that Nero was at his villa in Antium (about 35 miles away) when the fire started, and he returned to Rome to organize relief efforts and open his estates to the homeless. Some ancient writers accused him of starting the fire, but even they didn't describe fiddling.",
    why: "The image of a narcissistic ruler performing while his city burned is so symbolically perfect it became legend."
  },
  {
    slug: "medieval-people-thought-earth-was-flat",
    claim: "Medieval Europeans believed the Earth was flat",
    verdict: "FALSE",
    category: "history",
    emoji: "🌐",
    title: "Did Medieval People Think the Earth Was Flat?",
    truth: "Educated medieval Europeans universally knew the Earth was spherical. This was established by Greek science, preserved through the Islamic world, and taught in medieval universities. Thomas Aquinas, Dante, Roger Bacon, and virtually every medieval scholar discussed Earth's spherical shape as established fact. Dante's Divine Comedy literally depicts a spherical Earth. The flat-Earth misconception about the Middle Ages was invented in the 19th century by authors like John William Draper, who wanted to portray the Church as anti-scientific.",
    why: "19th-century anti-clerical writers used the flat-Earth fable to paint religion as the enemy of science."
  },
  {
    slug: "lincoln-was-an-accomplished-wrestler",
    claim: "Abraham Lincoln was a talented wrestler",
    verdict: "SURPRISINGLY TRUE",
    category: "history",
    emoji: "🤼",
    title: "Was Abraham Lincoln Really a Champion Wrestler?",
    truth: "This one is completely true. Lincoln was considered one of the finest wrestlers in Illinois during his youth. At 6'4\" with long arms and exceptional strength, he dominated competitors for years. He lost only once in roughly 300 matches. His wrestling style was called 'catch-as-catch-can.' The National Wrestling Hall of Fame inducted Lincoln as an 'Outstanding American' in 1992. His wrestling reputation was well-known among his contemporaries and helped establish his frontier credentials.",
    why: "It seems incongruous with the bookish, lawyerly image of Lincoln that most people carry."
  },
  {
    slug: "edison-invented-the-lightbulb",
    claim: "Thomas Edison invented the lightbulb",
    verdict: "MOSTLY FALSE",
    category: "history",
    emoji: "💡",
    title: "Did Thomas Edison Really Invent the Lightbulb?",
    truth: "Incandescent light bulbs were developed by numerous inventors before Edison, including Humphry Davy (1802), Warren de la Rue (1840), and Joseph Swan in Britain (who patented a working bulb around the same time as Edison). What Edison and his team did invent was a practical, long-lasting, commercially viable bulb using a carbonized bamboo filament — and, crucially, the entire electrical distribution system needed to make it useful. Edison's real invention was the infrastructure of electric power. Swan and Edison eventually merged their UK companies.",
    why: "Edison's talent for publicity and his large organization made him the face of the invention in American culture."
  },
  {
    slug: "newton-apple-hit-on-head",
    claim: "An apple fell on Newton's head and inspired his theory of gravity",
    verdict: "MOSTLY FALSE",
    category: "history",
    emoji: "🍎",
    title: "Did an Apple Really Fall on Newton's Head?",
    truth: "Newton himself described seeing an apple fall from a tree while sitting in a garden — not being struck on the head. The story likely has a real kernel: Newton's niece Catherine Barton passed it on, and Newton mentioned the apple observation to multiple people. But it was a visual prompt for a thought already in development, not a sudden revelation. By the time Newton saw the apple, he had already been working on celestial mechanics for years. The head-strike version is a dramatic embellishment added later.",
    why: "A bump on the head triggering a genius insight is a more satisfying story than years of incremental calculation."
  },
  {
    slug: "cleopatra-was-egyptian",
    claim: "Cleopatra was Egyptian",
    verdict: "FALSE",
    category: "history",
    emoji: "🐫",
    title: "Was Cleopatra Actually Egyptian?",
    truth: "Cleopatra VII was Greek-Macedonian, a descendant of Ptolemy I — one of Alexander the Great's generals who took control of Egypt after Alexander's death in 323 BC. The Ptolemaic dynasty ruled Egypt for nearly 300 years but maintained their Macedonian Greek identity and culture. Cleopatra was notable for being the first ruler of her dynasty to actually learn to speak Egyptian, in addition to Greek and several other languages. She was ethnically Greek, not ethnically Egyptian.",
    why: "She ruled Egypt, lived in Egypt, and is depicted with Egyptian imagery — the association feels natural."
  },
  {
    slug: "roman-vomitoriums-were-for-vomiting",
    claim: "Romans used 'vomitoriums' to vomit so they could eat more at feasts",
    verdict: "FALSE",
    category: "history",
    emoji: "🏛️",
    title: "What Were Roman Vomitoriums Actually Used For?",
    truth: "A vomitorium (pl. vomitoria) is an architectural term for the passageways in Roman amphitheaters that allowed large crowds to quickly 'spew out' — as in, rapidly exit the stadium. They were highly effective crowd-management engineering, not purging rooms. While some wealthy Romans did occasionally induce vomiting at extended feasts (as recorded by a few ancient writers), this was not a widespread cultural practice and had no dedicated room. The modern conflation of the two meanings is entirely fictional.",
    why: "The word sounds like it describes exactly what the myth claims, making the error self-reinforcing."
  },
  {
    slug: "walt-disney-was-cryogenically-frozen",
    claim: "Walt Disney's body was cryogenically frozen after his death",
    verdict: "FALSE",
    category: "history",
    emoji: "❄️",
    title: "Was Walt Disney's Body Cryogenically Frozen?",
    truth: "Walt Disney died on December 15, 1966, and was cremated just two days later. His ashes were interred at Forest Lawn Memorial Park in Glendale, California. Cryonic preservation of humans wasn't even practiced until January 1967 — a month after Disney's death — when James Bedford became the first human to be cryonically preserved. There is no evidence Disney was interested in cryonics, and his family has consistently denied the rumor. It's a persistent urban legend with no factual basis.",
    why: "Disney's fascination with technology and the future made the story feel plausible, and it spread for decades."
  },
  {
    slug: "henry-viii-executed-six-wives",
    claim: "Henry VIII had all six of his wives executed",
    verdict: "FALSE",
    category: "history",
    emoji: "👸",
    title: "Did Henry VIII Execute All Six of His Wives?",
    truth: "The mnemonic 'Divorced, Beheaded, Died, Divorced, Beheaded, Survived' tells the actual story. Catherine of Aragon was divorced (marriage annulled). Anne Boleyn was executed. Jane Seymour died shortly after childbirth. Anne of Cleves was divorced (and received a generous settlement). Catherine Howard was executed. Catherine Parr outlived Henry. Two wives were executed, two were divorced, one died naturally, and one survived. The myth of mass execution says more about Henry's fearsome reputation than the historical record.",
    why: "Henry VIII's reputation for cruelty and the two dramatic executions overshadow the more mundane endings."
  },
  {
    slug: "lightning-never-strikes-same-place-twice",
    claim: "Lightning never strikes the same place twice",
    verdict: "FALSE",
    category: "science",
    emoji: "⚡",
    title: "Does Lightning Really Never Strike the Same Place Twice?",
    truth: "Lightning absolutely strikes the same place repeatedly — in fact, tall structures are specifically designed to exploit this. The Empire State Building is struck by lightning roughly 20–25 times per year. Lightning rods work precisely because they attract repeated strikes and safely channel the energy to ground. Lightning takes the path of least resistance, which often means returning to the same elevated, conductive object again and again. The saying is not just wrong — it's the opposite of how lightning protection engineering works.",
    why: "It sounds like a logical probability statement, and its use as a metaphor for unlikely repetition entrenched it."
  },
  {
    slug: "water-drains-opposite-direction-in-hemispheres",
    claim: "Water drains clockwise in the northern hemisphere and counter-clockwise in the southern hemisphere",
    verdict: "MOSTLY FALSE",
    category: "science",
    emoji: "🌀",
    title: "Does Water Really Drain Differently in Each Hemisphere?",
    truth: "The Coriolis effect is real — the Earth's rotation does deflect large-scale systems like hurricanes and ocean currents. But the Coriolis force is far too weak to influence the small scale of a draining sink or toilet. The actual direction a toilet or sink drains is determined by the shape of the bowl, the direction water enters, and existing turbulence — not the hemisphere you're in. In laboratory conditions with a perfectly still pool and no other influences, the Coriolis effect can theoretically be observed, but real-world plumbing swamps it.",
    why: "The Coriolis effect on hurricanes is taught in schools, and extrapolating it to sinks feels logical."
  },
  {
    slug: "the-sun-is-yellow",
    claim: "The sun is yellow",
    verdict: "FALSE",
    category: "science",
    emoji: "☀️",
    title: "What Color Is the Sun Actually?",
    truth: "The sun emits light across the full visible spectrum and is actually white. You can observe this in space photographs, where the sun appears white. From Earth's surface, the atmosphere scatters shorter blue wavelengths of sunlight — this is what makes the sky blue. The remaining transmitted light skews toward yellow, orange, and red wavelengths, especially near the horizon. But this is an atmospheric optical effect, not the sun's actual color. Astronomers classify the sun as a G-type yellow dwarf — but that 'yellow' classification refers to temperature, not apparent color.",
    why: "We see the sun as yellow through the atmosphere every day, and the experience of seeing directly determines our color belief."
  },
  {
    slug: "glass-is-a-slow-moving-liquid",
    claim: "Glass slowly flows over centuries — that's why old windows are thicker at the bottom",
    verdict: "FALSE",
    category: "science",
    emoji: "🪟",
    title: "Is Glass Actually a Slow-Moving Liquid?",
    truth: "Glass is an amorphous solid — it has a disordered molecular structure like a liquid, but at room temperature it does not flow. The old windows with thicker bottoms were manufactured that way: pre-modern glassblowing and cylinder-glass techniques produced glass with natural thickness variation, and glaziers installed them with the heavy edge down for stability. Modern physics experiments can detect no measurable flow in glass at room temperature over human timescales. Silicate glass would take longer than the age of the universe to visibly flow.",
    why: "The observation about old windows seems like empirical evidence, making the liquid explanation feel like a discovery."
  },
  {
    slug: "dogs-see-only-in-black-and-white",
    claim: "Dogs see the world only in black and white",
    verdict: "FALSE",
    category: "animals",
    emoji: "🐕",
    title: "Do Dogs Actually See in Black and White?",
    truth: "Dogs do not see in full color like humans, but they're not colorblind in the black-and-white sense. Humans have three types of color receptors (cones) sensitive to red, green, and blue light. Dogs have two types, sensitive to blue and yellow. Their color vision is roughly comparable to a person with red-green colorblindness — they can see blues and yellows well but confuse reds and greens. Dogs have significantly better low-light vision than humans and are better at detecting motion.",
    why: "Early scientific papers on animal color vision were misrepresented in popular accounts as 'colorblind = no color.'"
  },
  {
    slug: "goldfish-have-three-second-memory",
    claim: "Goldfish have a three-second memory",
    verdict: "FALSE",
    category: "animals",
    emoji: "🐟",
    title: "Do Goldfish Really Only Have a 3-Second Memory?",
    truth: "Goldfish can be trained and retain learned behaviors for months. Researchers have taught goldfish to press levers for food on a specific schedule, and the fish remembered the schedule even weeks later. Australian student Rory Stokes demonstrated goldfish learning and memory retention in a science fair experiment that garnered international attention. Scientists at the University of Plymouth trained goldfish to press levers at specific times. A three-second memory would make any form of learning or training completely impossible.",
    why: "It's a convenient cultural shorthand for short attention spans and became a go-to fact, repeated without checking."
  },
  {
    slug: "bats-are-blind",
    claim: "Bats are blind",
    verdict: "FALSE",
    category: "animals",
    emoji: "🦇",
    title: "Are Bats Actually Blind?",
    truth: "All bat species can see. Many can see quite well. Fruit bats (megabats), in particular, have large eyes and good daytime vision — some can even see ultraviolet light. Echolocation (emitting sounds and hearing their echoes) is used by most bat species for hunting insects in the dark, but this is a supplementary navigation sense, not a replacement for vision. The 'blind as a bat' phrase is simply incorrect. Vision and echolocation work together to give bats a sophisticated sensory picture of their environment.",
    why: "Because bats are active at night and navigating using sound, the assumption was that they must have no use for eyes."
  },
  {
    slug: "humans-and-dinosaurs-coexisted",
    claim: "Early humans lived at the same time as dinosaurs",
    verdict: "FALSE",
    category: "science",
    emoji: "🦕",
    title: "Did Humans and Dinosaurs Ever Live at the Same Time?",
    truth: "Non-avian dinosaurs went extinct approximately 66 million years ago after an asteroid impact ended the Cretaceous period. The earliest members of the genus Homo appear in the fossil record around 2–3 million years ago. That's a gap of over 63 million years. To put it in perspective: if you compressed Earth's history into a single year, the dinosaurs died in mid-October, and humans didn't arrive until the final hours of December 31. Note: birds are technically modern dinosaurs, so we do coexist with dinosaur descendants.",
    why: "Movies, cartoons, and some religious teachings have perpetuated this coexistence image for generations."
  },
  {
    slug: "space-is-completely-silent",
    claim: "Space is completely silent",
    verdict: "SURPRISINGLY TRUE",
    category: "science",
    emoji: "🚀",
    title: "Is Space Really Completely Silent?",
    truth: "In the vacuum of space, there is no medium for sound waves to travel through — sound requires molecules to compress and transmit vibrations. So in the traditional sense, yes: you cannot hear an explosion in space. However, NASA has recorded 'sounds' in space by capturing pressure waves in plasma or gas nebulae and translating them into the audible range — these are real waves, just not in air. The black hole at the center of the Perseus Cluster generates actual pressure waves, translated to a B-flat 57 octaves below middle C.",
    why: "Sci-fi movies always include sound effects in space, so the reality feels surprising."
  },
  {
    slug: "the-moon-has-a-permanently-dark-side",
    claim: "The moon has a permanent dark side that never sees sunlight",
    verdict: "FALSE",
    category: "science",
    emoji: "🌑",
    title: "Does the Moon Have a Permanent Dark Side?",
    truth: "The moon does have a 'far side' that faces away from Earth due to tidal locking — the moon rotates at the same rate as it orbits Earth. But this far side is not permanently dark. Both sides of the moon receive roughly equal amounts of sunlight over the course of a lunar cycle. The far side experiences its own two-week day and two-week night, just like the near side. 'Dark side' is a misnomer that means 'unseen from Earth,' not 'unlit.' China's Chang'e-4 mission landed on the far side in 2019.",
    why: "Pink Floyd's iconic album title, and the word 'dark' meaning both unlit and unknown, cemented the confusion."
  },
  {
    slug: "mount-everest-is-the-tallest-mountain",
    claim: "Mount Everest is the tallest mountain on Earth",
    verdict: "PARTLY TRUE",
    category: "science",
    emoji: "🏔️",
    title: "Is Everest Really the Tallest Mountain on Earth?",
    truth: "Everest is the highest mountain above sea level at 8,849 meters. But 'tallest' depends on your measurement. If measured from base to peak, Mauna Kea in Hawaii is taller — its base is on the ocean floor, making its total height about 10,210 meters (though only 4,205 m is above water). And if you measure from the center of the Earth, Mount Chimborazo in Ecuador is the most distant point from Earth's center due to the planet's equatorial bulge. Each claim is true under different definitions.",
    why: "We default to sea level as a baseline without considering that mountains sit on different starting elevations."
  },
  {
    slug: "hot-water-freezes-faster-than-cold",
    claim: "Hot water freezes faster than cold water",
    verdict: "PARTLY TRUE",
    category: "science",
    emoji: "🧊",
    title: "Can Hot Water Really Freeze Faster Than Cold Water?",
    truth: "This is called the Mpemba Effect, named after Tanzanian student Erasto Mpemba who noticed it in 1963. Under some conditions, hot water does freeze faster than cold water — but it's not universal and the mechanism is debated. Proposed explanations include convection currents, dissolved gas loss, evaporation (which reduces mass), and supercooling effects. The Royal Society of Chemistry investigated it and found the effect is real but sensitive to exact conditions. It doesn't always happen — it depends on container, environment, and water chemistry.",
    why: "It seems to obviously violate common sense, so the instinct is to call it false rather than investigate."
  },
  {
    slug: "black-holes-suck-everything-in",
    claim: "Black holes act like cosmic vacuum cleaners, sucking in everything nearby",
    verdict: "FALSE",
    category: "science",
    emoji: "🌌",
    title: "Do Black Holes Suck In Everything Around Them?",
    truth: "A black hole's gravity follows the same laws as any massive object — it only pulls you in if you get too close to it. If our sun were magically replaced by a black hole of the same mass, Earth would continue orbiting normally — nothing would change except the sun's light and heat would disappear. Black holes are dangerous because of their extreme density (allowing you to get very close before the event horizon), not because they have some special sucking force. Objects far from a black hole orbit it just like they orbit any star.",
    why: "The dramatic visual of a vortex pulling things in makes the vacuum cleaner model intuitive and cinematic."
  },
  {
    slug: "the-earth-is-perfectly-round",
    claim: "The Earth is a perfect sphere",
    verdict: "FALSE",
    category: "science",
    emoji: "🌍",
    title: "Is the Earth Actually a Perfect Sphere?",
    truth: "The Earth is an oblate spheroid — slightly flattened at the poles and bulging at the equator due to its rotation. The equatorial diameter is about 43 kilometers larger than the polar diameter. Additionally, the Earth has bumps, depressions, and irregularities from mountains, ocean trenches, and varying density in the mantle. Geographers call the true shape of Earth the 'geoid' — the shape the oceans would take if perfectly calm. It's close to a sphere, but meaningfully different in precise measurements.",
    why: "We're taught 'the Earth is round' as a correction to flat-Earth thinking, and round naturally implies perfectly spherical."
  },
  {
    slug: "humans-evolved-from-chimpanzees",
    claim: "Humans evolved from chimpanzees",
    verdict: "FALSE",
    category: "science",
    emoji: "🐒",
    title: "Did Humans Evolve from Chimpanzees?",
    truth: "Humans and chimpanzees share a common ancestor — a primate species that lived approximately 6–7 million years ago. After this common ancestor, two lineages diverged: one eventually leading to chimpanzees (and bonobos), the other leading to various hominid species and eventually modern humans. Neither evolved from the other; we are evolutionary cousins, not parent and offspring. We share about 98–99% of our DNA with chimpanzees, which reflects our shared ancestry, not our descent from them.",
    why: "The simplification 'descended from apes' is often taught without the important detail that apes also continued evolving."
  },
  {
    slug: "elephants-never-forget",
    claim: "Elephants never forget",
    verdict: "PARTLY TRUE",
    category: "animals",
    emoji: "🐘",
    title: "Is It True That Elephants Never Forget?",
    truth: "Elephants have exceptional long-term memory, and this is well-documented. They recognize individual humans and elephants after decades of separation, remember locations of water sources across vast territories, and can recall detailed spatial maps of their ranges. Matriarch elephants are particularly important — their memory of past droughts guides herd survival decisions. However, saying they 'never forget' is an overstatement; like all animals, elephant memory is selective and imperfect. The saying captures a real and impressive cognitive trait, just with some exaggeration.",
    why: "It's a poetic truth — elephants' memory is genuinely remarkable, and the phrase captures that spirit accurately enough."
  },
  {
    slug: "lemmings-jump-off-cliffs",
    claim: "Lemmings throw themselves off cliffs in mass suicide",
    verdict: "FALSE",
    category: "animals",
    emoji: "🐭",
    title: "Do Lemmings Really Commit Mass Suicide?",
    truth: "Lemmings do experience population booms and then dramatic crashes, and they migrate in large groups when overcrowded. Some do accidentally fall into water or off terrain during chaotic migrations. But the iconic cliff-jumping image was largely manufactured: a 1958 Disney documentary 'White Wilderness' famously staged this footage — lemmings were herded toward a riverbank and filmed plunging in. The filmmakers imported lemmings to Alberta (where they don't naturally live) specifically to create the scene. The myth became cultural fact because of a staged documentary.",
    why: "A Disney documentary showing it as fact was more persuasive than any scientific paper could be."
  },
  {
    slug: "a-duck-quack-does-not-echo",
    claim: "A duck's quack doesn't echo",
    verdict: "FALSE",
    category: "animals",
    emoji: "🦆",
    title: "Is It True That a Duck's Quack Doesn't Echo?",
    truth: "A duck's quack absolutely echoes. Acoustics researchers at the University of Salford in England tested this specifically in 2003 using anechoic chambers and echo chambers with a duck named 'Daffy.' The quack did echo. The reason the myth persists is that duck quacks are soft, fade out gradually, and have a trailing quality — so an echo of a quack sounds very similar to the original quack and may be hard to distinguish. But the physics of sound reflection don't make exceptions for ducks.",
    why: "The claim sounds like an obscure scientific fact, and the 'unusual natural phenomenon' format makes it feel credible."
  },
  {
    slug: "ostriches-bury-their-heads-in-sand",
    claim: "Ostriches bury their heads in the sand when frightened",
    verdict: "FALSE",
    category: "animals",
    emoji: "🪶",
    title: "Do Ostriches Actually Bury Their Heads in the Sand?",
    truth: "Ostriches never bury their heads in the sand — an animal that couldn't breathe when scared would not survive. What they do is lay their long necks flat against the ground when tending to eggs in their sand-dug nests, or when trying to hide from predators. From a distance, this can look like they've buried their head. They also rotate eggs and check nests by inserting their heads into the hole. Ostriches are formidable animals: when threatened, their preferred response is to run (up to 45 mph) or deliver devastating kicks.",
    why: "The image of an animal literally hiding from reality by burying its head became a perfect metaphor for denial."
  },
  {
    slug: "sharks-must-keep-swimming-to-breathe",
    claim: "Sharks must keep swimming continuously or they'll drown",
    verdict: "MOSTLY FALSE",
    category: "animals",
    emoji: "🦈",
    title: "Do Sharks Really Have to Keep Swimming to Survive?",
    truth: "Some shark species do require constant forward movement to push oxygen-rich water over their gills — this is called 'obligate ram ventilation.' Great white sharks, mako sharks, and whale sharks fall into this category. But many shark species, including nurse sharks, can rest on the seafloor and actively pump water over their gills using buccal pumping. Of the roughly 500 shark species, fewer than half need to keep moving to breathe. The generalized statement applies to some species but is false as a blanket rule.",
    why: "The species people think of most (great whites) do require swimming, making the generalization feel true."
  },
  {
    slug: "camel-humps-store-water",
    claim: "Camel humps store water for desert survival",
    verdict: "FALSE",
    category: "animals",
    emoji: "🐪",
    title: "What Do Camel Humps Actually Store?",
    truth: "Camel humps store fat, not water. This fat can be metabolized for energy when food is scarce, and fat metabolism does produce some water as a byproduct — but this is a minor secondary effect. Camels are remarkably efficient at water conservation: their kidneys produce highly concentrated urine, their body temperature fluctuates to reduce sweating, and their oval-shaped red blood cells can expand greatly to absorb water quickly after dehydration. A camel can drink up to 30 gallons of water in 13 minutes and store it systemically in their bloodstream and tissues.",
    why: "The desert context and the hump's clear function in survival made water storage the obvious intuitive answer."
  },
  {
    slug: "bulls-are-enraged-by-the-color-red",
    claim: "Bulls charge at bullfighters because of the color red",
    verdict: "FALSE",
    category: "animals",
    emoji: "🐂",
    title: "Are Bulls Actually Enraged by the Color Red?",
    truth: "Cattle are red-green colorblind, meaning they cannot distinguish red from green. When researchers tested bulls with differently colored flags, the bulls charged equally at all colors. What actually provokes bulls is the movement of the muleta (the matador's cape), not its color. The red color was traditionally used in bullfighting because it helps mask blood stains during the performance — a practical choice, not a behavioral trigger. A red flag waved motionlessly would not provoke a bull; any colored flag moved aggressively would.",
    why: "The powerful visual of a red cape and a charging bull in bullfighting cemented the color as the cause."
  },
  {
    slug: "mother-birds-abandon-touched-eggs",
    claim: "If you touch a baby bird or egg, the mother will abandon it",
    verdict: "FALSE",
    category: "animals",
    emoji: "🐣",
    title: "Will a Mother Bird Abandon Eggs That Humans Touch?",
    truth: "Birds have a limited sense of smell and cannot detect human scent on their eggs or chicks. This myth is completely false. Mother birds are strongly bonded to their nests and eggs and will not abandon them because of human touch. The myth may have originated as well-intentioned advice to keep children from disturbing nests and inadvertently damaging eggs or chicks. If you find a fallen fledgling, returning it to its nest (or placing it in a nearby bush) is actually the recommended course of action.",
    why: "The myth served as a useful deterrent to keep curious children from disturbing wildlife nests."
  },
  {
    slug: "cockroaches-could-survive-nuclear-war",
    claim: "Cockroaches could survive a nuclear war",
    verdict: "PARTLY TRUE",
    category: "animals",
    emoji: "🪳",
    title: "Could Cockroaches Really Survive Nuclear War?",
    truth: "Cockroaches are more radiation-resistant than humans — they can withstand doses roughly 6–15 times the human lethal dose. This is because their cells divide slowly (only when molting) and they have simple body organization with few rapidly dividing cells to be damaged. However, they would not survive a direct nuclear blast, and sustained high radiation would still kill them. Many other organisms are far more radiation-resistant — the Deinococcus radiodurans bacterium, for example, can withstand doses 1,000 times greater than the lethal human dose.",
    why: "Post-Hiroshima accounts of surviving cockroaches, combined with their general indestructibility reputation, made the legend grow."
  },
  {
    slug: "cats-always-land-on-their-feet",
    claim: "Cats always land on their feet no matter what height they fall from",
    verdict: "MOSTLY TRUE",
    category: "animals",
    emoji: "🐱",
    title: "Do Cats Always Land on Their Feet?",
    truth: "Cats have a remarkable 'righting reflex' — specialized vestibular anatomy that allows them to detect orientation mid-fall and rotate their flexible spine to land feet-first. This works remarkably well from most heights. However, from very low heights (under about 1–2 feet), there isn't enough time to complete the rotation, so cats can be injured in short falls. From very high drops, the righting reflex works but the impact force can still cause injury or death. Studies of 'high-rise syndrome' in cats found survival rates were high but not absolute.",
    why: "The reflex is so reliable and consistent that 'always' seems reasonable — the edge cases aren't commonly witnessed."
  },
  {
    slug: "daddy-longlegs-are-most-venomous",
    claim: "Daddy longlegs are the most venomous spider but can't bite humans",
    verdict: "FALSE",
    category: "animals",
    emoji: "🕷️",
    title: "Are Daddy Longlegs Really the World's Most Venomous Spiders?",
    truth: "This myth has two problems. First, there are three different animals called 'daddy longlegs': harvestmen (not spiders at all, no venom glands), cellar spiders (true spiders, with mild venom), and crane flies (insects). Second, no evidence supports the claim that any of these are extraordinarily venomous. Mythbusters tested this directly: they had a cellar spider bite Adam Savage, and he felt only a mild, brief stinging sensation. The claim has no scientific source — it appears to be pure invented folklore.",
    why: "The myth has the appealing structure of hidden danger — deadliest but harmless to us — which makes it irresistible to share."
  },
  {
    slug: "dogs-mouths-are-cleaner-than-humans",
    claim: "A dog's mouth is cleaner than a human's mouth",
    verdict: "FALSE",
    category: "animals",
    emoji: "🐶",
    title: "Is a Dog's Mouth Really Cleaner Than a Human's?",
    truth: "Dogs' and humans' mouths each contain hundreds of species of bacteria — but they're mostly different species adapted to each host. Dog mouths harbor plenty of pathogens (including Pasteurella, Capnocytophaga, and others) that can cause serious illness in humans if transmitted through bites or licking wounds. The 'clean mouth' myth likely originated from observations that dogs lick their wounds and they sometimes heal quickly — but saliva's limited antimicrobial properties are the same in dogs and humans. The comparison is meaningless because the bacterial ecosystems aren't directly comparable.",
    why: "Dogs licking wounds and those wounds healing was taken as evidence that dog saliva had superior cleaning properties."
  },
  {
    slug: "you-must-wait-24-hours-to-report-missing-person",
    claim: "Police won't accept a missing person report for 24 hours",
    verdict: "FALSE",
    category: "everyday",
    emoji: "🚨",
    title: "Do You Really Have to Wait 24 Hours Before Reporting Someone Missing?",
    truth: "There is no law or official policy in the US, UK, or most countries requiring a 24-hour waiting period before filing a missing person report. Police can and do accept reports immediately, especially for children, vulnerable adults, or anyone whose disappearance is out of character. Time is critical in missing person cases, and early reporting significantly improves outcomes. If you believe someone is missing, contact police immediately. This myth has real-world consequences: people delay reporting and lose critical hours.",
    why: "The myth appears repeatedly in TV dramas as a plot device, embedding it as apparent police procedure in public consciousness."
  },
  {
    slug: "humans-swallow-spiders-while-sleeping",
    claim: "People swallow an average of 8 spiders per year while asleep",
    verdict: "FALSE",
    category: "everyday",
    emoji: "🕸️",
    title: "Do People Really Swallow Spiders in Their Sleep?",
    truth: "Spiders are highly sensitive to vibrations and to the presence of large mammals. A sleeping human breathes, has a heartbeat, and occasionally moves — all significant vibrations that spiders would detect and avoid. A spider would have no reason to wander into a warm, vibrating, breathing cavity. The 8-spiders-per-year statistic has no scientific basis and was apparently invented in a 1993 article by columnist Lisa Holst specifically to illustrate how people believe plausible-sounding 'facts' they read.",
    why: "The statistic sounds specific and scientific, and the disturbing nature of the claim made it memorable and shareable."
  },
  {
    slug: "the-five-second-rule",
    claim: "Food dropped on the floor is safe to eat within five seconds",
    verdict: "MOSTLY FALSE",
    category: "everyday",
    emoji: "🍕",
    title: "Is the Five-Second Rule Actually Real?",
    truth: "Research from Rutgers University by food scientist Donald Schaffner found that bacteria transfer from floor to food happens in less than one second — contact time matters, but there's no five-second grace period. The key factors are food moisture (wet foods pick up far more bacteria than dry ones), surface type (carpet actually transfers less bacteria than tile), and what bacteria are on the floor. The risk from most dropped food is low in clean homes, but the 'safe window' mechanism is not real.",
    why: "It offers a socially acceptable excuse for doing something we instinctively know is a little questionable."
  },
  {
    slug: "wet-hair-causes-a-cold",
    claim: "Going outside with wet hair in winter causes a cold",
    verdict: "FALSE",
    category: "everyday",
    emoji: "🚿",
    title: "Does Going Out with Wet Hair Cause a Cold?",
    truth: "Colds are caused by viral infection — specifically rhinoviruses and related pathogens. Being cold or having wet hair does not introduce a virus into your body. Controlled experiments where volunteers were directly exposed to cold viruses showed that pre-chilling had no effect on infection rates or symptom severity. The association between winter and colds comes from increased time indoors, closer contact with others, and potentially lower vitamin D levels reducing immune function. Your wet hair is not the culprit.",
    why: "Parents have repeated this warning for generations, and the timing correlation between cold weather and colds makes it feel confirmed."
  },
  {
    slug: "chewing-gum-stays-in-stomach-for-seven-years",
    claim: "Swallowed chewing gum stays in your stomach for 7 years",
    verdict: "FALSE",
    category: "everyday",
    emoji: "🫧",
    title: "Does Swallowed Gum Really Stay in Your Stomach for 7 Years?",
    truth: "Gum base is indigestible — your body cannot break down the synthetic polymers, resins, and elastomers that give gum its texture. But indigestible doesn't mean it stays in your stomach. Your digestive system moves things through whether it can digest them or not. Insoluble fiber, grape seeds, and gum all pass through your gut and are excreted, typically within a few days. Cases of gum-caused intestinal blockage (bezoars) are extremely rare and involve unusual circumstances like swallowing large quantities frequently.",
    why: "The unpleasant specificity of '7 years' and the confirmed indigestibility of gum made the story stick."
  },
  {
    slug: "broken-bones-heal-stronger",
    claim: "A broken bone heals back stronger than before",
    verdict: "MOSTLY FALSE",
    category: "everyday",
    emoji: "🦴",
    title: "Do Broken Bones Actually Heal Stronger Than Before?",
    truth: "During healing, the body creates a callus of new bone tissue around the fracture site, which can temporarily be denser than the surrounding bone. But over time, this callus remodels to match the original bone's structure — it doesn't remain permanently stronger. The bone is typically restored to approximately its original strength, not stronger. Serious fractures, especially in older individuals, often leave bones weaker in the long term. The temporary callus observation was likely the origin of the myth.",
    why: "The visible callus bump at a healed fracture site feels like reinforcement — like a patched bone is now double-layered."
  },
  {
    slug: "toilet-flushes-opposite-direction-in-southern-hemisphere",
    claim: "Toilets flush in opposite directions in the southern hemisphere due to Earth's rotation",
    verdict: "FALSE",
    category: "everyday",
    emoji: "🚽",
    title: "Do Toilets Flush in Opposite Directions Below the Equator?",
    truth: "See entry #47 on the Coriolis effect and water draining — the same physics applies here. The Coriolis effect is far too weak to affect toilet bowl drainage, which is determined by the design of the bowl, the direction of the jets, and the force of the flush. Toilet manufacturers produce the same designs for both hemispheres. Australians' toilets flush in all directions, just like toilets everywhere. In a perfectly controlled lab setting with a still basin, a very subtle Coriolis effect can be measured — but no toilet ever meets those conditions.",
    why: "The Coriolis effect on cyclone rotation is a real and well-known phenomenon, making the toilet version feel like an extension of that."
  },
  {
    slug: "cell-phones-cause-brain-cancer",
    claim: "Cell phones cause brain cancer",
    verdict: "MOSTLY FALSE",
    category: "everyday",
    emoji: "📱",
    title: "Do Cell Phones Cause Brain Cancer?",
    truth: "Mobile phones emit non-ionizing radiofrequency radiation — the same type emitted by radio and TV signals. Non-ionizing radiation lacks the energy to break chemical bonds or damage DNA, which is how ionizing radiation (like X-rays or gamma rays) causes cancer. Decades of studies — including a large 2010 Interphone study and a 2014 Danish cohort study of 360,000 people — have found no convincing evidence linking mobile phone use to brain cancer. Brain cancer rates have not risen in line with mobile phone adoption. The WHO classifies mobile phone RF as 'possibly carcinogenic' — a precautionary classification also applied to coffee and talc.",
    why: "The visual of a radiation-emitting device held against your head daily naturally triggers concern."
  },
  {
    slug: "junk-dna-is-useless",
    claim: "95% of human DNA is useless 'junk'",
    verdict: "FALSE",
    category: "science",
    emoji: "🧬",
    title: "Is Most of Our DNA Actually Useless Junk?",
    truth: "The 'junk DNA' label was applied to non-protein-coding regions of DNA, which comprise about 98% of the genome. The ENCODE project (Encyclopedia of DNA Elements) found that at least 80% of the genome has some biochemical activity — involved in gene regulation, RNA production, structural roles, or other functions. Many former 'junk' sequences turn out to be regulatory elements that control when and how genes are expressed. The genome is not fully understood, but calling the non-coding regions useless was premature and is now considered incorrect.",
    why: "The term 'junk DNA' was coined by scientists and then adopted in popular science writing where 'junk' took on a literal meaning."
  },
  {
    slug: "tongue-has-distinct-taste-zones",
    claim: "Different regions of your tongue are responsible for different tastes",
    verdict: "FALSE",
    category: "health",
    emoji: "👅",
    title: "Is the Tongue Taste Map Real?",
    truth: "The tongue taste map — with sweet at the tip, bitter at the back, salty and sour on the sides — appeared in American textbooks for decades. It originated from a mistranslation of a 19th-century German paper and was propagated without testing. In reality, taste buds sensitive to all five basic tastes (sweet, salty, sour, bitter, umami) are distributed across the entire tongue. You can taste sweetness at the back and bitterness at the tip equally well. The map has been thoroughly debunked and removed from modern curricula.",
    why: "A simple, visual diagram of tongue zones made a neat teaching tool and was repeated in textbooks unchallenged."
  },
  {
    slug: "chocolate-causes-acne",
    claim: "Eating chocolate causes acne breakouts",
    verdict: "FALSE",
    category: "food",
    emoji: "🍫",
    title: "Does Chocolate Actually Cause Acne?",
    truth: "Multiple controlled studies have found no direct link between chocolate consumption and acne. Acne is primarily caused by sebum overproduction, clogged pores, bacteria (Cutibacterium acnes), and hormonal factors. High-glycemic-index foods (refined carbs, sugary drinks) may worsen acne in some people by spiking insulin and influencing hormone levels. If chocolate is consumed as part of high-sugar, high-fat foods that spike insulin, that could be a contributing factor — but pure cocoa has not been shown to cause breakouts. The correlation was confounded by other dietary factors.",
    why: "Teenagers noticed breakouts around the same time they ate candy, and the correlation was assumed to be causal."
  },
  {
    slug: "alcohol-kills-brain-cells",
    claim: "Drinking alcohol kills brain cells",
    verdict: "MOSTLY FALSE",
    category: "health",
    emoji: "🍺",
    title: "Does Alcohol Kill Your Brain Cells?",
    truth: "Moderate alcohol consumption does not kill neurons. What alcohol does is temporarily disrupt communication between neurons and, with chronic heavy drinking, damages the myelin sheath (insulating layer) around neurons and can impair dendritic connections. Severe, chronic alcoholism is associated with Wernicke-Korsakoff syndrome, which involves actual brain tissue loss — but this is linked to thiamine (vitamin B1) deficiency that often accompanies alcoholism rather than direct neuron death from alcohol. Occasional drinking does not noticeably kill brain cells in healthy adults.",
    why: "The dramatic cognitive impairment from intoxication makes 'killing cells' feel like an accurate description of what's happening."
  },
  {
    slug: "chameleons-change-color-to-camouflage",
    claim: "Chameleons change color to blend into their surroundings",
    verdict: "MOSTLY FALSE",
    category: "animals",
    emoji: "🦎",
    title: "Why Do Chameleons Really Change Color?",
    truth: "Chameleons primarily change color to communicate — to signal dominance, sexual availability, mood, and stress responses. Color change is also used for thermoregulation: darker colors absorb more heat. Active camouflage against a background is a secondary ability, and chameleons are not especially good at instantaneous background-matching. Their resting color is already a reasonable environmental camouflage. When researchers showed chameleons different colored backgrounds, color change was primarily driven by social context, not background matching.",
    why: "Chameleons are so strongly associated with camouflage in pop culture that their actual social signaling use is rarely taught."
  },
  {
    slug: "a-penny-dropped-from-skyscraper-could-kill",
    claim: "A penny dropped from the Empire State Building could kill someone below",
    verdict: "FALSE",
    category: "everyday",
    emoji: "🪙",
    title: "Could a Penny Dropped from a Skyscraper Really Kill Someone?",
    truth: "A penny is light, small, and tumbles as it falls, creating significant air resistance. Terminal velocity for a penny falling flat is roughly 25 mph — far below the speed needed to penetrate skin or cause lethal injury. Physicist Louis Bloomfield tested this extensively, including firing pennies at his own skin. At terminal velocity, a penny sting would feel something like a hard flick. The Empire State Building's wind conditions also cause coins to drift significantly before reaching street level. This myth is definitively physics-busted.",
    why: "High-speed falling objects are instinctively dangerous, and a coin from that height feels like a bullet."
  },
  {
    slug: "there-are-only-four-blood-types",
    claim: "There are only four blood types: A, B, AB, and O",
    verdict: "FALSE",
    category: "health",
    emoji: "🩺",
    title: "Are There Really Only Four Blood Types?",
    truth: "The ABO system (A, B, AB, O) is the most important blood classification for transfusions, but it's just one of 36 internationally recognized blood group systems. When you include the Rh system, you get A+, A−, B+, B−, AB+, AB−, O+, O− (8 types). Beyond that, the Kell, Duffy, Kidd, MNS, Lewis, and other systems create hundreds of possible combinations. Some extremely rare blood types have been found in only a handful of people worldwide. The full genetic complexity of blood typing is far beyond the basic four-type teaching.",
    why: "The four-type ABO system is all that's typically taught and tested, so it's naturally taken as the complete picture."
  },
  {
    slug: "the-great-wall-is-one-continuous-wall",
    claim: "The Great Wall of China is one continuous wall spanning thousands of miles",
    verdict: "FALSE",
    category: "history",
    emoji: "🧱",
    title: "Is the Great Wall of China One Continuous Wall?",
    truth: "The Great Wall is actually a series of walls, fortifications, towers, and barriers built by different Chinese states and dynasties over roughly 2,000 years. The walls were often built in parallel, not end to end — some sections overlap, some have gaps, some are miles apart. The total length of all wall sections combined is estimated at over 13,000 miles, but no single continuous wall of that length exists. Many sections are in ruins, buried, or exist only in records. The iconic image of a uniform wall across China doesn't match the complex reality.",
    why: "The name 'The Great Wall' implies a single unified structure, and the romantic image of a continuous mountain wall is hard to let go of."
  },
  {
    slug: "bananas-grow-on-trees",
    claim: "Bananas grow on trees",
    verdict: "FALSE",
    category: "science",
    emoji: "🍌",
    title: "Do Bananas Really Grow on Trees?",
    truth: "Banana plants look like trees but are actually the world's largest herbaceous plants — they have no woody tissue. What appears to be a tree trunk is actually a 'pseudostem' made from tightly packed leaf bases. The plant grows from a rhizome (underground stem) and each 'trunk' dies after producing one bunch of bananas, then a new shoot grows from the rhizome. Because they have no wood and don't produce seeds (commercially grown bananas are seedless clones), they are technically giant herbs, more closely related to ginger than to trees.",
    why: "The tall, upright, single-stem structure with leaves at the top looks exactly like what we call a tree."
  },
  {
    slug: "the-first-computer-bug-was-a-real-bug",
    claim: "The first computer 'bug' was an actual insect found in a computer",
    verdict: "SURPRISINGLY TRUE",
    category: "history",
    emoji: "🐛",
    title: "Was the First Computer 'Bug' Really a Real Insect?",
    truth: "On September 9, 1947, Grace Hopper's team at Harvard found an actual moth causing a malfunction in the Mark II computer. They taped it into the logbook with the note 'First actual case of bug being found.' The term 'bug' for technical problems predates this — Thomas Edison used it for engineering problems in the 1870s — but the moth incident is real and documented. The logbook is preserved at the Smithsonian's National Museum of American History. The incident popularized the computing use of 'bug' and 'debugging.'",
    why: "It sounds too cute to be true, like a retrospectively invented origin story — but in this case it's genuine history."
  },
  {
    slug: "fortune-cookies-are-a-chinese-tradition",
    claim: "Fortune cookies originated in China",
    verdict: "FALSE",
    category: "food",
    emoji: "🥠",
    title: "Are Fortune Cookies Actually Chinese?",
    truth: "Fortune cookies were invented in California in the early 20th century, most likely by Japanese immigrants. Makoto Hagiwara of the Japanese Tea Garden in San Francisco and David Jung of the Hong Kong Noodle Company in Los Angeles both claimed invention around 1910–1920. The style closely resembles a traditional Japanese senbei cracker with fortunes inside. During WWII Japanese internment, Chinese-American restaurant owners took over their production, cementing the Chinese-restaurant association. Fortune cookies are virtually unknown in China as a cultural tradition.",
    why: "Fortune cookies are exclusively served in Chinese-American restaurants, making the Chinese origin assumption feel certain."
  },
  {
    slug: "starfish-are-fish",
    claim: "Starfish are a type of fish",
    verdict: "FALSE",
    category: "animals",
    emoji: "⭐",
    title: "Are Starfish Actually Fish?",
    truth: "Starfish — more properly called sea stars — are echinoderms, the same phylum as sea urchins, sand dollars, and sea cucumbers. They share no common ancestry with fish, which are vertebrates. Sea stars lack a backbone, brain, and blood — they use seawater pumped through a hydraulic system (the water vascular system) to move their tube feet. They have two stomachs and can digest prey outside their bodies. Marine biologists now prefer the term 'sea star' precisely to avoid the misleading fish implication.",
    why: "The name 'starfish' has been used for centuries, and the '-fish' suffix implies a biological category it doesn't belong to."
  },
  {
    slug: "everyone-has-a-dominant-eye",
    claim: "Everyone has a dominant eye",
    verdict: "SURPRISINGLY TRUE",
    category: "health",
    emoji: "🎯",
    title: "Does Everyone Have a Dominant Eye?",
    truth: "This one is actually true, and most people are unaware of it. Like handedness, eye dominance (ocular dominance) is a real neurological phenomenon where one eye's input is preferentially processed by the brain. You can easily test it: extend your arm, create a small circle with your fingers around a distant object, then alternately close each eye — the eye that keeps the object centered is your dominant eye. About 65–70% of people are right-eye dominant. It matters significantly for photography, archery, shooting sports, and batting stance.",
    why: "Most people have never heard of it — unlike handedness, eye dominance isn't commonly discussed or tested in everyday life."
  },
  {
    slug: "the-eiffel-tower-is-the-same-height-year-round",
    claim: "The Eiffel Tower is the same height year-round",
    verdict: "FALSE",
    category: "science",
    emoji: "🗼",
    title: "Does the Eiffel Tower Actually Change Height?",
    truth: "Metal expands when heated and contracts when cooled — thermal expansion is a fundamental property of materials. The Eiffel Tower, made of wrought iron, grows by approximately 15–17 centimeters (6–7 inches) in summer heat compared to winter cold. At the top of the tower, this expansion causes the structure to lean slightly away from the sun on hot days. This is accounted for in the engineering, and the tower's flexibility is part of its strength. The same thermal expansion affects bridges, railways, and most large metal structures.",
    why: "We intuitively think of large solid structures as rigid and unchanging, ignoring that thermal expansion applies at all scales."
  },
  {
    slug: "you-explode-in-space-without-a-suit",
    claim: "Without a spacesuit, you would instantly freeze or explode in space",
    verdict: "FALSE",
    category: "science",
    emoji: "👨‍🚀",
    title: "What Actually Happens if You're Exposed to Space Without a Suit?",
    truth: "The reality is less dramatic than movies suggest. You would not explode — skin is strong enough to hold your body together against the pressure differential. You would not instantly freeze — space is a vacuum with no medium to conduct heat away from you, so cooling actually takes time. You would lose consciousness in about 15 seconds from hypoxia (lack of oxygen) as gases in your body expanded. Your saliva would boil on your tongue at body temperature (liquids boil at lower temperatures in a vacuum). You'd be dead within 2 minutes, but not from the causes movies show.",
    why: "Dramatic science fiction depictions of instant explosion or flash-freezing became the default mental model."
  },
  {
    slug: "eating-chocolate-is-an-aphrodisiac",
    claim: "Chocolate is a scientifically proven aphrodisiac",
    verdict: "FALSE",
    category: "food",
    emoji: "❤️",
    title: "Is Chocolate Really an Aphrodisiac?",
    truth: "Chocolate contains phenylethylamine (PEA) and serotonin — compounds associated with mood and pleasure. Aztec Emperor Montezuma reportedly drank large quantities of cocoa before visiting his harem, seeding the romantic association. However, PEA from food is largely broken down by enzymes in the gut before it reaches the brain, and studies have found that chocolate does not produce measurable aphrodisiac effects. A 2006 study in the Journal of Sexual Medicine found no difference in sexual function between women who ate chocolate regularly and those who didn't.",
    why: "The pleasurable experience of eating good chocolate and its historical romantic context created a self-reinforcing cultural belief."
  },
  {
    slug: "diamonds-are-made-from-coal",
    claim: "Diamonds form from compressed coal deep underground",
    verdict: "FALSE",
    category: "science",
    emoji: "💎",
    title: "Are Diamonds Really Made from Coal?",
    truth: "The vast majority of natural diamonds formed 1–3 billion years ago, deep in the Earth's mantle (100–200 miles below the surface), long before significant coal deposits existed. Coal is a sedimentary rock derived from ancient plant material and formed at much shallower depths. Most diamonds formed from pure carbon already present in the deep mantle under enormous heat and pressure, transported to the surface by volcanic activity. Some diamonds do have organic carbon sources, but not coal. The concept of 'coal-to-diamond' machines is also a fiction.",
    why: "Coal is 'compressed carbon' and diamonds are 'compressed carbon' — the one-step logical leap feels sound."
  },
  {
    slug: "alcohol-improves-your-creativity",
    claim: "Alcohol boosts creative thinking",
    verdict: "MOSTLY FALSE",
    category: "health",
    emoji: "🎨",
    title: "Does Alcohol Actually Make You More Creative?",
    truth: "Alcohol reduces inhibition and can make people more willing to voice ideas they'd normally filter — which can create the subjective feeling of increased creativity. A 2012 University of Illinois study found that mildly intoxicated participants performed slightly better on one specific creative thinking task (Remote Associates Test). However, alcohol impairs working memory, executive function, and critical evaluation — all crucial for actual creative work. The ideas generated while drunk often seem less impressive when reviewed sober. Many great artists had complicated relationships with alcohol, but productivity typically came despite it, not because of it.",
    why: "The relaxing of social inhibition feels like a creative unlocking, and the anecdotes of drinking artists are memorable."
  },
  {
    slug: "penguins-mate-for-life",
    claim: "Penguins mate for life and are completely faithful",
    verdict: "MOSTLY TRUE",
    category: "animals",
    emoji: "🐧",
    title: "Do Penguins Really Mate for Life?",
    truth: "Many penguin species, including Adélie, chinstrap, and gentoo penguins, do show strong mate fidelity — returning to the same partner in subsequent breeding seasons at rates of 70–90%. However, they are not perfectly monogamous. Divorce (choosing a new mate) does occur, especially after failed breeding seasons. 'Extra-pair copulations' (infidelity) have been documented. Emperor penguins, famously loyal, lose partners to death and predation and take new mates. The statement is broadly true for most species but overstated as an absolute.",
    why: "March of the Penguins and similar documentaries presented penguin monogamy as an inspiring and complete truth."
  },
  {
    slug: "blood-type-affects-personality",
    claim: "Your blood type determines your personality",
    verdict: "FALSE",
    category: "health",
    emoji: "🅰️",
    title: "Does Your Blood Type Determine Your Personality?",
    truth: "Blood type personality theory (ketsueki-gata) is extremely popular in Japan and South Korea — blood type is asked on job applications and dating profiles. However, no peer-reviewed scientific evidence supports any link between ABO blood type and personality traits. Large studies consistently find no correlation. Blood type is determined by antigens on red blood cell surfaces — proteins that play no role in neurology or psychology. The belief likely arose in 1920s Japan partly influenced by racial theories and has persisted through cultural momentum, not scientific validation.",
    why: "It provides a simple, testable framework for personality categorization, filling the same niche as astrology in Western cultures."
  }
];

// ── Helpers ──────────────────────────────────────────────────────────────────

// Rotate through all myths based on days since a fixed epoch
const BASE_DATE = new Date('2026-01-05').getTime();

function getTodaysMythIndex() {
  const daysSinceBase = Math.floor((Date.now() - BASE_DATE) / 86400000);
  return ((daysSinceBase % MYTHS.length) + MYTHS.length) % MYTHS.length;
}

function getMythBySlug(slug) {
  return MYTHS.find(m => m.slug === slug) || null;
}

function getMythsByCategory(category) {
  return MYTHS.filter(m => m.category === category);
}

const CATEGORIES = [
  { id: 'health',   label: 'Health & Body',    emoji: '🏥' },
  { id: 'food',     label: 'Food & Drink',      emoji: '🍽️' },
  { id: 'history',  label: 'History',           emoji: '📜' },
  { id: 'science',  label: 'Science & Nature',  emoji: '🔬' },
  { id: 'animals',  label: 'Animals',           emoji: '🐾' },
  { id: 'everyday', label: 'Everyday Life',     emoji: '🏠' },
];

const VERDICT_META = {
  'FALSE':             { label: 'FALSE',              color: '#dc2626', bg: '#fef2f2' },
  'MOSTLY FALSE':      { label: 'MOSTLY FALSE',       color: '#ea580c', bg: '#fff7ed' },
  'PARTLY TRUE':       { label: 'PARTLY TRUE',        color: '#ca8a04', bg: '#fefce8' },
  'MOSTLY TRUE':       { label: 'MOSTLY TRUE',        color: '#0d9488', bg: '#f0fdfa' },
  'SURPRISINGLY TRUE': { label: 'SURPRISINGLY TRUE',  color: '#7c3aed', bg: '#faf5ff' },
};
