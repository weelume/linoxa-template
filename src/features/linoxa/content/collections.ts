export type CollectionLocale = 'zh' | 'en'
export interface BilingualText { zh: string; en: string }
export interface Project {
  slug: string
  title: BilingualText
  category: 'build' | 'creative' | 'design' | 'vision'
  categoryLabel: BilingualText
  summary: BilingualText
  image: string
  gallery: string[]
  date: string
  client: string
  service: BilingualText
  location: BilingualText
  concept: BilingualText
  overview: BilingualText[]
  files: BilingualText[]
}
export interface Article {
  slug: string
  title: BilingualText
  category: 'design' | 'culture' | 'sustainability'
  categoryLabel: BilingualText
  summary: BilingualText
  image: string
  coverImage: string
  author: string
  authorImage: string
  date: string
  readingMinutes: number
  intro: BilingualText
  sections: { heading: BilingualText; body: BilingualText }[]
  quote: BilingualText
  bullets: BilingualText[]
}
const bi = (zh: string, en: string): BilingualText => ({ zh, en })
export const projectCategories = {
  build: bi('建造', 'Build'), creative: bi('创意', 'Creative'),
  design: bi('设计', 'Design'), vision: bi('愿景', 'Vision'),
} satisfies Record<Project['category'], BilingualText>
export const articleCategories = {
  design: bi('设计观察', 'Design'), culture: bi('文化与空间', 'Culture'),
  sustainability: bi('可持续建筑', 'Sustainability'),
} satisfies Record<Article['category'], BilingualText>

export const projects: Project[] = [
  {
    slug: 'contemporary-retreat', title: bi('当代静居', 'Contemporary retreat'), category: 'creative', categoryLabel: projectCategories.creative,
    summary: bi('让结构、光线与自然共同定义一处安静的居所', 'Exploring spaces shaped by structure, light and modern innovation'),
    image: 'bjHJVmaf7AOpCow8MepBHR1E.webp', gallery: ['bjHJVmaf7AOpCow8MepBHR1E.webp', 'QThkTwJMranON8THR0cTd6fcI4.webp', 'cVTvF2G78mAl9Ov8eSGyYQzG8k.webp'], date: '2026-03-24', client: 'Jonathan Reed',
    service: bi('建筑设计与室内规划', 'Architecture & interior planning'), location: bi('加利福尼亚，美国', 'California, USA'),
    concept: bi('把日常生活安放在景观与光之间', 'A quiet home between landscape and light'),
    overview: [
      bi('这座低层住宅依地形展开，以中央庭院连接起居、餐厨与休憩空间。入口有意压低视线，在走入客厅的一刻让完整景观徐徐打开。', 'This low-rise retreat follows the contours of its site, bringing living, dining and resting spaces together around a sheltered courtyard. A compressed entrance gradually opens to a wide view of the landscape.'),
      bi('深挑檐控制夏季日晒，向庭院敞开的玻璃面让自然光进入室内。木材与浅色石材的触感贯穿内外，减少空间边界的生硬感。', 'Deep overhangs temper summer sun while courtyard-facing glazing brings daylight into the interior. Timber and pale stone continue from outside to inside, softening the boundary between the two.'),
      bi('设计把私密与开放视为同一件事的两面。安静的卧室位于庭院一侧，共享空间面向远景，让一家人的相处与独处各得其所。', 'Privacy and openness are complementary conditions. Quiet bedrooms occupy one side of the courtyard while shared rooms face the long view, giving family life room for both company and solitude.'),
    ], files: [bi('场地与概念分析', 'Site & concept study'), bi('建筑平立剖面', 'Architectural drawings'), bi('室内材料方案', 'Interior material palette'), bi('三维空间可视化', 'Spatial visualization')],
  },
  {
    slug: 'modern-facade-study', title: bi('现代立面研究', 'Modern facade study'), category: 'design', categoryLabel: projectCategories.design,
    summary: bi('以细致的立面节奏回应建筑的功能与身份', 'Designing environments that balance form, function, and identity'),
    image: 'yMZVZFggRQEdPGRF4hTvNTtmc.webp', gallery: ['yMZVZFggRQEdPGRF4hTvNTtmc.webp', 'o1H9gUEaugER24ks5wn0LPpWhw8.webp', '2azvocHshTkAqfDkqfDQ74gq6i8.webp'], date: '2026-03-24', client: 'Michael Carter',
    service: bi('立面设计与材料研究', 'Facade design & material research'), location: bi('伦敦，英国', 'London, UK'),
    concept: bi('让表皮成为空间与城市之间的调节层', 'A facade that mediates between the city and the interior'),
    overview: [
      bi('这项立面研究从一组可重复的垂直构件出发，探索不同朝向、开窗比例与遮阳深度之间的关系。模块的节奏赋予建筑清晰而克制的城市表情。', 'This facade study begins with repeatable vertical elements, testing the relationship between orientation, window proportions and shading depth. Their rhythm gives the building a clear, restrained urban presence.'),
      bi('设计通过实尺度细部和日照模拟共同推进。通透与实体交替排列，在保证室内视野的同时降低眩光，并为窗边提供更舒适的工作环境。', 'Full-scale details and daylight studies developed together. Alternating transparent and solid elements preserve outward views, reduce glare and create more comfortable conditions beside the windows.'),
      bi('耐候金属、低反射玻璃与可替换连接节点使后续维护成为设计的一部分。最终方案把性能、施工逻辑和视觉秩序整合为统一系统。', 'Weather-resistant metal, low-reflectivity glazing and replaceable connections make maintenance part of the design. The proposal brings performance, construction logic and visual order into one coherent system.'),
    ], files: [bi('立面模块研究', 'Facade module studies'), bi('日照与遮阳分析', 'Daylight & shading analysis'), bi('构造节点图', 'Construction details'), bi('材料样板记录', 'Material sample register')],
  },
  {
    slug: 'urban-living-concept', title: bi('城市生活构想', 'Urban living concept'), category: 'vision', categoryLabel: projectCategories.vision,
    summary: bi('让建筑愿景转化为真实而丰富的城市生活', 'Where architectural vision transforms space into living experience'),
    image: 'ccVaBn6nqn9R4I5rXGA0ehOGd4.webp', gallery: ['ccVaBn6nqn9R4I5rXGA0ehOGd4.webp', 'QThkTwJMranON8THR0cTd6fcI4.webp', 'Nmm5e0nEnRf70hGmgKRIy3faQOI.webp'], date: '2026-03-24', client: 'Olivia Bennett',
    service: bi('总体规划与住宅概念', 'Master planning & residential concepts'), location: bi('纽约，美国', 'New York, USA'),
    concept: bi('一座鼓励相遇又尊重独处的城市街区', 'An urban neighbourhood with room to connect and retreat'),
    overview: [
      bi('项目以步行为尺度组织住宅、共享设施与街角商业。原本封闭的地块被分解为可穿行的空间，让邻里交流自然发生在日常路径上。', 'Housing, shared amenities and corner shops are arranged at a walkable scale. A formerly closed block becomes a series of connected spaces where everyday routes make room for neighbourhood encounters.'),
      bi('不同户型围绕采光良好的公共核心布置，屋顶和退台形成层层绿意。设计同时考虑家庭、独居者与长者，避免用单一生活模式定义整个社区。', 'A range of dwelling types surrounds bright shared cores, with planted roofs and terraces stepping through the development. Families, single residents and older people are considered without prescribing one model of urban life.'),
      bi('地面层的雨水花园与连续树荫改善微气候，开放的自行车入口连接周边街道。生活便利性与可持续出行由空间组织共同支持。', 'Rain gardens and continuous tree cover improve the ground-level microclimate, while accessible bicycle entrances connect to surrounding streets. Spatial planning supports both daily convenience and lower-impact mobility.'),
    ], files: [bi('街区总体布局', 'Neighbourhood master plan'), bi('住宅户型研究', 'Housing typology studies'), bi('公共空间系统', 'Public realm strategy'), bi('街景与模型', 'Streetscapes & models')],
  },
  {
    slug: 'minimal-space-design', title: bi('极简空间设计', 'Minimal space design'), category: 'vision', categoryLabel: projectCategories.vision,
    summary: bi('用清晰的结构和细致的材料建立空间秩序', 'Creating structures that reflect purpose, precision and beauty'),
    image: 'BHCkzHEmrmTDwXbD2OvxYKwNcA.webp', gallery: ['Nmm5e0nEnRf70hGmgKRIy3faQOI.webp', 'QThkTwJMranON8THR0cTd6fcI4.webp', 'cVTvF2G78mAl9Ov8eSGyYQzG8k.webp', 'o1H9gUEaugER24ks5wn0LPpWhw8.webp', '2azvocHshTkAqfDkqfDQ74gq6i8.webp'], date: '2026-03-24', client: 'Christopher Lane',
    service: bi('三维建模与可视化', '3D modeling & visualization'), location: bi('悉尼，澳大利亚', 'Sydney, Australia'),
    concept: bi('以庭院、自然光和触感材料构成学习环境', 'A learning environment shaped by courtyards, daylight and tactile materials'),
    overview: [
      bi('这座小学围绕一系列相互连接的花园庭院规划，庭院既是户外教室，也是不同年龄学生自由游戏的场所。每间教室的朝向都兼顾北向采光与暖季的日照控制。', 'This primary school campus is planned around interconnected garden courtyards that serve as outdoor classrooms and informal play environments for students of all ages. Each classroom pavilion maximises northern light while limiting solar heat gain during warmer months.'),
      bi('设计优先考虑无障碍、感官体验和灵活使用。可拆卸隔墙使空间能够随着教学方式变化而重新组织，让建筑在多年使用中持续回应学校的需要。', 'Accessibility, sensory engagement and flexibility guide the design. Demountable partitions allow spaces to be reconfigured as teaching approaches evolve, keeping the building responsive to the school over time.'),
      bi('夯土墙、回收木材天花与抛光混凝土地面构成耐用而温暖的材料体系，为年轻的使用者创造清晰、安全且富有亲切感的日常环境。', 'Rammed earth walls, recycled timber ceilings and polished concrete floors form a robust yet warm material palette, creating a legible, safe and welcoming everyday environment for young learners.'),
    ], files: [bi('概念与场地规划', 'Concept & site planning'), bi('空间模型', 'Spatial model'), bi('材料与构造设计', 'Materials & detailing'), bi('交互式可视化', 'Interactive visualization')],
  },
  {
    slug: 'concrete-harmony', title: bi('混凝土协奏', 'Concrete harmony'), category: 'build', categoryLabel: projectCategories.build,
    summary: bi('在结构与触感之间寻找平静而有力的表达', 'A study of space, structure and thoughtful architectural expression'),
    image: '1d0LKp7GOPlFM520jos8Flixc.webp', gallery: ['1d0LKp7GOPlFM520jos8Flixc.webp', 'cVTvF2G78mAl9Ov8eSGyYQzG8k.webp', '2azvocHshTkAqfDkqfDQ74gq6i8.webp'], date: '2026-03-24', client: 'Ethan Brooks',
    service: bi('建筑设计与结构协调', 'Architectural design & structural coordination'), location: bi('墨尔本，澳大利亚', 'Melbourne, Australia'),
    concept: bi('用光线赋予坚实的材料柔和的表情', 'Giving a solid material a softer expression through light'),
    overview: [
      bi('清水混凝土墙体围合出一组比例明确的房间，天窗和狭长开口引导光线缓慢移动。建筑用少量材料回应场地的安静气质。', 'Exposed concrete walls define carefully proportioned rooms, while rooflights and narrow openings let daylight move slowly across their surfaces. A small material palette responds to the quiet character of the site.'),
      bi('结构构件同时承担围护与空间分隔的角色，避免不必要的装饰。模板拼缝、拉杆孔与木质嵌件在施工阶段被逐项协调，让细节与整体尺度一致。', 'Structural elements also enclose and divide the spaces. Formwork joints, tie holes and timber inserts are coordinated through construction so details belong to the larger order.'),
      bi('厚重墙体提供热惰性，通风路径把庭院空气带入室内。材料的原始感与环境性能共同构成这座建筑经得起时间的特质。', 'The substantial walls provide thermal mass, and ventilation routes draw courtyard air into the interior. Material directness and environmental performance together give the building an enduring character.'),
    ], files: [bi('结构与空间方案', 'Structure & space concept'), bi('混凝土构造节点', 'Concrete details'), bi('施工协调图', 'Construction coordination'), bi('采光研究', 'Daylight study')],
  },
  {
    slug: 'spatial-innovation', title: bi('空间新生', 'Spatial innovation'), category: 'creative', categoryLabel: projectCategories.creative,
    summary: bi('以灵活的组织方式激发工作与交流的新可能', 'Shaping built environments through innovation and design clarity'),
    image: '2EXwUvLGaqI7PwxP60HDAW1CSK4.webp', gallery: ['2EXwUvLGaqI7PwxP60HDAW1CSK4.webp', 'o1H9gUEaugER24ks5wn0LPpWhw8.webp', 'QThkTwJMranON8THR0cTd6fcI4.webp'], date: '2026-03-24', client: 'Sophia Turner',
    service: bi('空间策略与室内改造', 'Spatial strategy & interior transformation'), location: bi('柏林，德国', 'Berlin, Germany'),
    concept: bi('一套随团队协作方式持续变化的空间', 'A spatial system that grows with the way teams work'),
    overview: [
      bi('旧工业空间被改造为面向创意团队的共享工作场所。开放工作区、安静房间和项目展示区交错安排，使不同强度的协作都能找到合适的位置。', 'A former industrial space becomes a shared workplace for creative teams. Open work areas, quiet rooms and project displays alternate so different intensities of collaboration find an appropriate setting.'),
      bi('可移动家具与轻质分隔构成空间的第二层结构，不触碰原有承重体系也能调整布局。色彩与声学材料帮助使用者识别不同区域。', 'Movable furniture and lightweight partitions form a second spatial structure that can adapt without changing the existing frame. Colour and acoustic materials help people recognise different zones.'),
      bi('保留的砖墙与新加入的精细构件形成对话。改造用尽可能少的新增材料延长建筑寿命，让空间更新与资源节约相互支持。', 'Retained brickwork sits alongside precisely detailed new elements. A restrained use of new materials extends the life of the building, aligning spatial renewal with resource conservation.'),
    ], files: [bi('工作方式调研', 'Workplace research'), bi('灵活布局系统', 'Flexible layout system'), bi('声学与照明方案', 'Acoustic & lighting scheme'), bi('改造施工图', 'Refurbishment drawings')],
  },
  {
    slug: 'sustainable-habitat', title: bi('可持续栖居', 'Sustainable habitat'), category: 'design', categoryLabel: projectCategories.design,
    summary: bi('让低能耗、自然材料与舒适居住融为一体', 'Creative space design concepts'),
    image: '6YjOHJgRksLxxGrPDuicQVfMw.webp', gallery: ['6YjOHJgRksLxxGrPDuicQVfMw.webp', '2azvocHshTkAqfDkqfDQ74gq6i8.webp', 'cVTvF2G78mAl9Ov8eSGyYQzG8k.webp'], date: '2026-03-23', client: 'Emma Wilson',
    service: bi('可持续住宅设计', 'Sustainable residential design'), location: bi('温哥华，加拿大', 'Vancouver, Canada'),
    concept: bi('从气候出发设计一种更轻盈的生活', 'A lighter way of living, designed around climate'),
    overview: [
      bi('住宅从当地风向与日照条件出发，合理安排起居空间、保温围护与遮阳。节能首先来自建筑本身的形体和朝向，而非后期添加设备。', 'Local wind and sun patterns inform living spaces, the insulated envelope and shading. Energy efficiency begins with the form and orientation of the house rather than equipment added afterwards.'),
      bi('木结构与可追溯的天然材料降低施工对环境的负担。可维护的连接与耐久表面让建筑在使用过程中更容易维修和更新。', 'Timber construction and traceable natural materials reduce construction impacts. Accessible connections and durable finishes make the building easier to maintain and adapt throughout its life.'),
      bi('雨水收集、透水地面与乡土种植组成完整的场地水循环策略。居住体验因此与周围生态建立联系，绿色设计成为可感知的日常。', 'Rainwater collection, permeable surfaces and native planting form an integrated site water strategy. Living connects to the surrounding ecology, making sustainable design tangible in daily use.'),
    ], files: [bi('被动式策略分析', 'Passive design strategy'), bi('木结构设计', 'Timber structure design'), bi('场地水循环方案', 'Site water strategy'), bi('材料追溯清单', 'Material sourcing register')],
  },
  {
    slug: 'timeless-structure', title: bi('恒久之构', 'Timeless structure'), category: 'build', categoryLabel: projectCategories.build,
    summary: bi('以清晰的构造和耐久的材料重新理解建成空间', 'Redefining built spaces with clarity, creativity and purpose'),
    image: 'Hkgvw2HB1Jjysy8dGjwbKTBC0.webp', gallery: ['Hkgvw2HB1Jjysy8dGjwbKTBC0.webp', 'Nmm5e0nEnRf70hGmgKRIy3faQOI.webp', 'o1H9gUEaugER24ks5wn0LPpWhw8.webp'], date: '2026-03-23', client: 'Daniel Foster',
    service: bi('公共建筑与细部设计', 'Public architecture & detailing'), location: bi('哥本哈根，丹麦', 'Copenhagen, Denmark'),
    concept: bi('让建筑在时间中保持开放与从容', 'A building that remains open and useful over time'),
    overview: [
      bi('公共大厅以均匀的结构网格组织活动、展览与日常停留。简洁的受力逻辑带来宽敞的内部空间，也为未来用途保留了调整余地。', 'A regular structural grid organises events, exhibitions and everyday occupation within this public hall. A clear structural system creates generous interiors while leaving room for future changes of use.'),
      bi('入口、庭院和室内大厅形成连续的公共路径。建筑在街道尺度上保持亲切，进入内部后才逐渐显露其结构节奏与空间深度。', 'Entrances, courtyards and the main hall form a continuous public route. The building stays approachable at street level, revealing structural rhythm and spatial depth as visitors move inside.'),
      bi('砖、石和金属按各自特性使用，细节考虑耐候、排水与易维修。建筑的长期价值由可靠的构造和持续服务公共生活的能力共同定义。', 'Brick, stone and metal are used according to their strengths, with details that address weathering, drainage and repair. Long-term value rests on reliable construction and an enduring ability to serve public life.'),
    ], files: [bi('公共流线设计', 'Public circulation design'), bi('结构网格研究', 'Structural grid study'), bi('耐久性细部', 'Durability details'), bi('施工与材料规范', 'Construction specifications')],
  },
  {
    slug: 'refined-living', title: bi('精致日常', 'Refined living'), category: 'creative', categoryLabel: projectCategories.creative,
    summary: bi('在结构和空间之间建立舒适生活的设计语言', 'Where structure and space merge into functional design language'),
    image: 'A8VQmPi2FnSvjbZLqipNz6ojWlE.webp', gallery: ['A8VQmPi2FnSvjbZLqipNz6ojWlE.webp', 'QThkTwJMranON8THR0cTd6fcI4.webp', 'cVTvF2G78mAl9Ov8eSGyYQzG8k.webp'], date: '2026-03-23', client: 'Isabella Hayes',
    service: bi('住宅室内与定制家具', 'Residential interiors & bespoke furniture'), location: bi('米兰，意大利', 'Milan, Italy'),
    concept: bi('用少量精确的细节改善每一天的生活', 'Making everyday life better through a few precise details'),
    overview: [
      bi('公寓更新从重新整理日常动线开始，将分散的餐厨与起居功能合为连续空间。自然光沿着浅色墙面深入室内，使有限面积显得舒展。', 'The apartment renovation reconsiders everyday movement, joining separate dining, kitchen and living functions into one continuous space. Daylight travels across pale surfaces, bringing generosity to a compact plan.'),
      bi('嵌入式收纳和定制家具顺应建筑尺度，隐藏杂乱却不剥夺生活痕迹。天然石材、织物和木饰面以细微色差建立丰富而安静的层次。', 'Integrated storage and bespoke furniture follow architectural proportions, containing clutter without erasing daily life. Stone, textiles and timber build quiet layers through subtle differences of tone.'),
      bi('照明区分工作、阅读和休息场景，每个房间都有可调整的亮度。精致在这里体现为触手可及的舒适，而不是额外的装饰。', 'Lighting distinguishes tasks, reading and rest, with adjustable levels in every room. Refinement is expressed as accessible comfort rather than an accumulation of decoration.'),
    ], files: [bi('室内平面与动线', 'Interior layout & circulation'), bi('定制家具图纸', 'Bespoke furniture drawings'), bi('灯光场景方案', 'Lighting scenes'), bi('材质与织物清单', 'Materials & textiles')],
  },
  {
    slug: 'elegant-form', title: bi('优雅之形', 'Elegant form'), category: 'design', categoryLabel: projectCategories.design,
    summary: bi('让建筑形体在概念、环境与创造力之间找到平衡', 'Built environments driven by concept, context and creativity'),
    image: '7AcTPiRfKgporLK1uiTOK4Y94.webp', gallery: ['7AcTPiRfKgporLK1uiTOK4Y94.webp', 'o1H9gUEaugER24ks5wn0LPpWhw8.webp', 'Nmm5e0nEnRf70hGmgKRIy3faQOI.webp'], date: '2026-03-23', client: 'Lucas Morgan',
    service: bi('建筑概念与形体研究', 'Architectural concepts & form studies'), location: bi('巴塞罗那，西班牙', 'Barcelona, Spain'),
    concept: bi('由场地生成的几何与柔和的公共边界', 'Geometry shaped by the site, with a gentle public edge'),
    overview: [
      bi('项目借由几何体块的切分与转折，回应不规则街角和相邻建筑的高度。形体并非独立的雕塑，而是对城市条件的具体回答。', 'Cuts and turns in the building volume respond to an irregular corner and neighbouring building heights. Its form responds to urban conditions rather than acting as an isolated sculpture.'),
      bi('连续的廊道连接室内展厅与外部平台，观展和休憩的体验交替发生。柔和的边缘与遮蔽空间把路人吸引到建筑旁停留。', 'A continuous passage connects interior galleries with outdoor platforms, alternating viewing and rest. Gentle edges and sheltered spaces invite passers-by to pause beside the building.'),
      bi('石质外表面与精细的金属节点形成尺度对比。设计通过构造把复杂的几何变得清晰可读，保留形式的轻盈与使用的便利。', 'Stone surfaces contrast with finely made metal connections. Construction makes the complex geometry legible, preserving the lightness of the form and ease of use.'),
    ], files: [bi('形体推敲模型', 'Form development models'), bi('场地与街道剖面', 'Site & street sections'), bi('展厅流线研究', 'Gallery circulation study'), bi('外立面细节', 'Envelope details')],
  },
  {
    slug: 'visionary-hub', title: bi('未来共创中心', 'Visionary hub'), category: 'vision', categoryLabel: projectCategories.vision,
    summary: bi('把材料、空间与人的互动编织为共同创造的场所', 'Architecture that blends material, space, and human interaction'),
    image: '84sgQt8kZfcrD7nJE8yEsNks0Q.webp', gallery: ['84sgQt8kZfcrD7nJE8yEsNks0Q.webp', '2azvocHshTkAqfDkqfDQ74gq6i8.webp', 'QThkTwJMranON8THR0cTd6fcI4.webp'], date: '2026-03-23', client: 'Charlotte Ellis',
    service: bi('创新中心与公共空间', 'Innovation centre & public spaces'), location: bi('阿姆斯特丹，荷兰', 'Amsterdam, Netherlands'),
    concept: bi('让学习、制作与分享在同一座建筑中相遇', 'Bringing learning, making and sharing together'),
    overview: [
      bi('创新中心把共享工坊、讨论室与展览空间沿公共中庭布置。看得见的制作过程让不同背景的使用者相互启发，建筑成为知识交流的平台。', 'Shared workshops, discussion rooms and exhibitions line a public atrium. Visible processes of making allow users from different backgrounds to inspire one another, turning the building into a platform for exchange.'),
      bi('大跨度结构为不断变化的实验活动留出自由空间，设备与管线集中在易维护的带状区域。未来功能调整无需重新定义整座建筑。', 'A long-span structure leaves room for changing experiments, while services occupy accessible bands. New uses can be introduced without redefining the entire building.'),
      bi('首层向街区开放，展览和咖啡空间延伸到室外广场。创新不被关在内部，而是在邻里生活中成为能够参与和理解的日常活动。', 'At ground level, exhibitions and a café open onto a neighbourhood square. Innovation becomes an activity people can encounter, understand and join as part of daily life.'),
    ], files: [bi('功能与参与策略', 'Programme & participation strategy'), bi('工坊空间系统', 'Workshop space system'), bi('结构与设备整合', 'Structure & services integration'), bi('公共空间设计', 'Public realm design')],
  },
  {
    slug: 'urban-essence', title: bi('城市本质', 'Urban essence'), category: 'build', categoryLabel: projectCategories.build,
    summary: bi('以平衡、精准与创造力构成清晰的城市愿景', 'A vision of space defined by balance, precision and creativity'),
    image: 'wBsSBK5aLKKRMQ6nkxziKuv8PU.webp', gallery: ['wBsSBK5aLKKRMQ6nkxziKuv8PU.webp', 'cVTvF2G78mAl9Ov8eSGyYQzG8k.webp', 'o1H9gUEaugER24ks5wn0LPpWhw8.webp'], date: '2026-03-23', client: 'William Parker',
    service: bi('城市更新与场所营造', 'Urban renewal & placemaking'), location: bi('鹿特丹，荷兰', 'Rotterdam, Netherlands'),
    concept: bi('用更细腻的公共空间重新连接街区', 'Reconnecting a neighbourhood through thoughtful public space'),
    overview: [
      bi('更新项目把一处零散的城市空地转化为有层次的公共场所。保留既有树木和通行路径，在熟悉的空间关系上加入新的活动与停留点。', 'This renewal project transforms a fragmented urban site into a layered public place. Existing trees and pedestrian routes remain, with new activities and places to pause built around familiar relationships.'),
      bi('低矮建筑围合广场边缘，以连续雨棚和可打开的立面支持市场、社区课堂与小型展览。公共空间因此能够适应天气和不同时间的使用需求。', 'Low buildings define a square, with continuous canopies and opening facades supporting markets, community classes and small exhibitions. Public space adapts to weather and changing patterns of use.'),
      bi('本地砖材与透水铺装延续街区的材料记忆。项目通过细小、可实施的设计行动提升公共生活，而不抹去原有的城市性格。', 'Local brick and permeable paving continue the material memory of the neighbourhood. Small, buildable design moves improve public life without erasing the existing character of the city.'),
    ], files: [bi('社区调研与场地记录', 'Community research & site record'), bi('广场与界面方案', 'Square & edge strategy'), bi('景观与铺装设计', 'Landscape & paving design'), bi('分期实施计划', 'Phased implementation plan')],
  },
]

export const articles: Article[] = [
  {
    slug: 'trends-shaping-modern-architectural-design', title: bi('塑造当代建筑的设计趋势', 'Trends shaping modern architectural design'), category: 'design', categoryLabel: articleCategories.design,
    summary: bi('从适应性空间到低碳材料，观察建筑如何回应不断变化的生活', 'From adaptable spaces to lower-carbon materials, architecture responds to changing ways of living.'),
    image: 'Gaxdl4ApsywmhxdIjrUjNe9sE.webp', coverImage: '95hwp93XdIWtbxHfdSCW7ArrL1A.webp', author: 'Jaydon Press', authorImage: '9kXTW1sPwh8emChfSjgmhigppVs.webp', date: '2026-02-28', readingMinutes: 6,
    intro: bi('当代建筑的变化并不只发生在外观上。气候责任、日常使用方式和材料的完整生命周期，正在共同影响设计师最初提出的问题。', 'Changes in contemporary architecture go deeper than appearance. Climate responsibility, patterns of everyday use and the full life of materials are changing the questions designers ask at the start of a project.'),
    sections: [
      { heading: bi('为变化而设计', 'Designing for change'), body: bi('住宅需要容纳远程工作，公共建筑需要接纳新的活动，空间的价值越来越依赖适应能力。清晰的结构网格、可逆的隔断与可维护的设备带，让未来变化成为可以提前设计的条件。', 'Homes accommodate remote work and public buildings welcome new activities. Spatial value increasingly depends on adaptability. Clear structural grids, reversible partitions and accessible service zones make future change a condition that can be designed for.') },
      { heading: bi('从材料开始承担气候责任', 'Climate responsibility begins with materials'), body: bi('节能设备无法替代对建筑体量、朝向和材料的思考。保留现有结构、选择耐久且来源可追溯的材料，并评估施工与维护成本，可以让环境目标融入整个设计过程。', 'Efficient equipment cannot replace thought about massing, orientation and materials. Keeping existing structures, choosing durable, traceable materials and considering construction and maintenance allow environmental goals to inform the entire design process.') },
      { heading: bi('让技术服务可感知的舒适', 'Technology in service of everyday comfort'), body: bi('数字建模和性能分析让设计决策更有依据，但最终评价仍来自使用者。自然光、空气、声学与温度的细微平衡，比单一的技术展示更能决定一座建筑是否值得长久使用。', 'Digital modelling and performance analysis inform decisions, yet users remain the final measure. The balance of daylight, air, acoustics and temperature matters more to enduring usefulness than a display of technology alone.') },
    ], quote: bi('好的设计趋势不是一种表面风格，而是一种更认真回应生活的方式', 'The most valuable design trends are ways of responding more carefully to life.'),
    bullets: [bi('为多种使用方式预留空间', 'Leave room for multiple patterns of use'), bi('同时评估材料与运行能耗', 'Consider embodied and operational impacts'), bi('把真实体验作为设计评价依据', 'Evaluate design through actual experience')],
  },
  {
    slug: 'evolution-of-architecture-through-time', title: bi('时间中的建筑演变', 'Evolution of architecture through time'), category: 'culture', categoryLabel: articleCategories.culture,
    summary: bi('追溯结构、材料与社会变化如何留下空间的印记', 'Tracing how structure, materials and social change leave their mark on space.'),
    image: 'igwP24VjKhV0XeIG1Tek7viE.webp', coverImage: 'igwP24VjKhV0XeIG1Tek7viE.webp', author: 'Phillip Mango', authorImage: 'dx14Tlxn4tqVfbTgug7ZHG72RnQ.webp', date: '2026-02-28', readingMinutes: 7,
    intro: bi('建筑是一份可以进入其中阅读的历史。每一个时代的材料、技术和公共观念，都在街道、房间与城市轮廓中留下具体的痕迹。', 'Architecture is a history that can be entered and read. The materials, technologies and public ideas of each period leave tangible traces in streets, rooms and city skylines.'),
    sections: [
      { heading: bi('材料打开新的可能', 'Materials open new possibilities'), body: bi('从承重石墙到钢架，再到能够跨越更大尺度的复合结构，技术改变了建筑的尺度和边界。但创新从来不是单向替换，旧材料经常在新的工艺中重新获得生命。', 'From load-bearing stone walls to steel frames and composite structures, technology has changed the limits of building. Innovation is not a one-way replacement: older materials often find new life through new techniques.') },
      { heading: bi('社会生活重塑空间', 'Social life reshapes space'), body: bi('车站、学校、图书馆和集合住宅的出现，反映了城市生活和公共服务的演变。理解这些建筑，不仅需要看形式，也需要看谁在使用、如何进入以及空间服务于什么活动。', 'Stations, schools, libraries and collective housing reflect changing urban life and public services. Understanding them means considering who uses them, how they are entered and the activities they support, as well as their form.') },
      { heading: bi('在继承中继续更新', 'Continuing through adaptation'), body: bi('今天的建筑实践面对已有建筑存量与新的环境责任。历史提供的不是可以直接复制的样式，而是关于气候适应、公共性与材料智慧的丰富经验。', 'Practice now works with existing buildings and new environmental responsibilities. History offers more than styles to repeat: it holds knowledge about climate, public life and the intelligent use of materials.') },
    ], quote: bi('建筑的历史，也是人们不断重新组织共同生活的历史', 'The history of architecture is also a history of how people organise life together.'),
    bullets: [bi('在历史背景中理解形式', 'Understand form within its historical context'), bi('关注工艺与社会需求的联系', 'Connect craft to social needs'), bi('把适应性更新视为新的创造', 'Treat adaptation as a new act of creation')],
  },
  {
    slug: 'the-influence-of-cultural-context-on-design', title: bi('文化语境如何影响设计', 'The influence of cultural context on design'), category: 'culture', categoryLabel: articleCategories.culture,
    summary: bi('从气候与地方工艺出发，建立属于场所的建筑语言', 'Developing a language of place through climate, local craft and everyday rituals.'),
    image: 'DW4VG5ohWoyYv249NkXYe63f5g.webp', coverImage: 'DW4VG5ohWoyYv249NkXYe63f5g.webp', author: 'Celine R. Williams', authorImage: 'cTT7euZqtnsxPNv6gqJVsdihw.webp', date: '2026-02-28', readingMinutes: 5,
    intro: bi('一座建筑是否属于某个地方，往往取决于它如何回应当地的生活，而不仅是是否使用了传统图案。文化语境存在于材料、尺度、气候与日常习惯之间。', 'Whether a building belongs to a place depends on its response to local life rather than traditional motifs. Cultural context lives in relationships between materials, scale, climate and everyday habits.'),
    sections: [
      { heading: bi('先倾听，再定义场所', 'Listen before defining the place'), body: bi('与居民、工匠和使用者交流，能够发现图纸之外的空间知识。门前停留、遮阳廊道和共享庭院等细节，常常承载着稳定而重要的社会关系。', 'Conversations with residents, craftspeople and users reveal knowledge that drawings alone cannot provide. Thresholds, shaded passages and shared courtyards often support important and lasting social relationships.') },
      { heading: bi('地方材料不只是视觉符号', 'Local materials are more than visual symbols'), body: bi('当地材料背后包含运输距离、施工技能、维修方式和触感记忆。与本地工艺协作，可以让新的建筑同时保持当代表达与地域连续性。', 'Local materials carry knowledge of transport, construction, repair and tactile memory. Working with local craft lets new buildings hold a contemporary expression while continuing the life of their region.') },
      { heading: bi('在尊重中创造变化', 'Create change through respect'), body: bi('文化并非静止的档案。设计可以引入新的技术和公共活动，但应清楚理解已有价值，让变化与地方生活形成对话，而不是用统一的形式抹平差异。', 'Culture is not a static archive. Design can introduce new technologies and activities while understanding existing values, allowing change to enter a conversation with local life instead of flattening differences.') },
    ], quote: bi('场所的身份来自持续的生活，而不只来自被观看的外表', 'The identity of a place comes from continuing life, not only an appearance to be viewed.'),
    bullets: [bi('记录日常使用与地方故事', 'Record daily use and local stories'), bi('让本地工艺参与设计过程', 'Involve local craft in the design process'), bi('允许传统在当代生活中演变', 'Allow traditions to evolve with contemporary life')],
  },
  {
    slug: 'sustainable-solutions-in-urban-architecture', title: bi('城市建筑的可持续解法', 'Sustainable solutions in urban architecture'), category: 'sustainability', categoryLabel: articleCategories.sustainability,
    summary: bi('让建筑与水、能源、交通和公共生活协同运作', 'Connecting buildings to water, energy, mobility and public life at the urban scale.'),
    image: 'tdPXq27SLQan2FoScLUOfCuaI.webp', coverImage: 'tdPXq27SLQan2FoScLUOfCuaI.webp', author: 'Giana Aminoff', authorImage: 'ZbixhPl7MhylkgVjKUvRVESoQ4.webp', date: '2026-02-28', readingMinutes: 6,
    intro: bi('城市的可持续性无法只靠一座高效建筑完成。建筑之间的连接、地面空间与基础设施的组织，决定了环境目标能否转化为真实的日常改变。', 'Urban sustainability needs more than one efficient building. Connections, ground-level spaces and infrastructure determine whether environmental goals become meaningful changes in everyday life.'),
    sections: [
      { heading: bi('先减少需求，再优化供给', 'Reduce demand before improving supply'), body: bi('紧凑而可步行的街区减少出行距离，适宜的建筑朝向与遮阳降低冷暖负荷。能源策略应从城市形态和使用方式开始，再考虑设备与清洁能源配置。', 'Compact, walkable neighbourhoods reduce journeys, while orientation and shading lower heating and cooling loads. Energy strategy should begin with urban form and use before equipment and clean energy are specified.') },
      { heading: bi('把雨水作为场地资源', 'Treat rainwater as a site resource'), body: bi('透水铺装、雨水花园和屋顶绿化可以共同减缓地表径流。这些设施同时带来树荫、生物栖息地与更宜人的公共空间，使环境策略能够被看见和体验。', 'Permeable paving, rain gardens and green roofs work together to slow runoff. They also provide shade, habitats and welcoming public spaces, making environmental strategies visible and experiential.') },
      { heading: bi('用全生命周期衡量价值', 'Measure value across the whole life'), body: bi('材料碳排放、维护能力和未来改造都应进入方案比较。能被长期使用、方便维修且支持多种功能的建筑，往往比短期性能突出的单一方案更具持续价值。', 'Embodied impacts, maintainability and adaptation should all inform comparisons. Buildings that remain useful, easy to repair and open to different functions often offer more lasting value than solutions optimised for one short-term measure.') },
    ], quote: bi('可持续城市由相互支持的日常选择构成', 'A sustainable city is made of everyday choices that support one another.'),
    bullets: [bi('优先步行、自行车和公共交通', 'Prioritise walking, cycling and public transport'), bi('把绿地与水循环整合设计', 'Design planting and water as one system'), bi('记录长期运营和维护表现', 'Track long-term operation and maintenance')],
  },
  {
    slug: 'historic-preservation-in-modern-design', title: bi('当代设计中的历史保护', 'Historic preservation in modern design'), category: 'culture', categoryLabel: articleCategories.culture,
    summary: bi('让旧建筑继续使用，在真实的时间痕迹中加入当代生活', 'Keeping older buildings in use while bringing contemporary life into their existing fabric.'),
    image: 'bEBxMymvDHLCzSQAJFdxy7ppgc.webp', coverImage: 'bEBxMymvDHLCzSQAJFdxy7ppgc.webp', author: 'Cristofer Mango', authorImage: 'RFC9khWHgqLPFOrgvKKmFypYYU.webp', date: '2026-02-28', readingMinutes: 7,
    intro: bi('保护不是把建筑冻结在某一年的状态，而是在理解其价值的基础上，让新的使用继续为它提供生命。真实的历史往往存在于多次改变叠加的层次中。', 'Preservation does not freeze a building at a single moment. It understands its value and lets new uses sustain its life. Authentic history often exists in layers of change rather than one untouched state.'),
    sections: [
      { heading: bi('识别真正值得保留的价值', 'Identify what matters'), body: bi('在介入之前，应记录建筑的结构、材料、空间关系与社会记忆。保存的重点可能是一条通道、一组窗洞或一种施工技艺，不一定只是最显眼的立面。', 'Before intervening, document structure, materials, spatial relationships and social memory. What matters may be a passage, a set of openings or a building technique, rather than only the most visible facade.') },
      { heading: bi('让新旧保持可辨识的关系', 'Keep old and new legible'), body: bi('新的楼梯、服务设施与无障碍路径需要满足当代使用，但不必伪装成历史构件。克制且可辨识的连接能让两种时间同时被理解。', 'New stairs, services and accessible routes must meet contemporary needs without pretending to be historic fabric. Restrained, legible connections allow both periods to be understood at once.') },
      { heading: bi('持续使用也是保护', 'Continued use is a form of care'), body: bi('合理的运营、维护计划与可调整的功能能减少建筑再次闲置的风险。设计应把长期管理视为保护的一部分，为未来的小规模修缮留下空间。', 'Viable operation, maintenance and adaptable uses reduce the risk of vacancy. Design should treat long-term stewardship as part of preservation and allow for future small-scale repairs.') },
    ], quote: bi('最有生命力的保护，让过去与今天同时被认真对待', 'The most vital preservation takes both the past and the present seriously.'),
    bullets: [bi('介入前完成资料与现场记录', 'Document the building before intervention'), bi('尽量采用可逆、可维护的做法', 'Prefer reversible and maintainable interventions'), bi('为长期使用制定维护策略', 'Plan maintenance around continued use')],
  },
  {
    slug: 'enhancing-homes-through-architectural-design', title: bi('用建筑设计改善居住', 'Enhancing homes through architectural design'), category: 'design', categoryLabel: articleCategories.design,
    summary: bi('从光线、动线与收纳开始，让居住空间真正适合自己', 'Starting with light, movement and storage to make a home fit the people who use it.'),
    image: 'oEp0reVwfREYV8WOmbmhkb09bk.webp', coverImage: 'oEp0reVwfREYV8WOmbmhkb09bk.webp', author: 'Joanne V. Nelson', authorImage: 'OJXkR6HACRMeODh4eDS7qNwYuF0.webp', date: '2026-02-28', readingMinutes: 5,
    intro: bi('住宅设计的起点是具体的生活。早晨如何开始、家人怎样相聚、哪些物品需要被收纳，这些看似细小的问题比统一的风格更能决定家的舒适。', 'Home design begins with the details of life: how mornings start, how family members gather and which objects need a place. These questions shape comfort more directly than a prescribed style.'),
    sections: [
      { heading: bi('把动线还给生活', 'Let movement follow life'), body: bi('重新观察餐厨、洗衣、休息和工作的关系，可以发现浪费的路径和被忽略的角落。布局调整应减少冲突，让不同活动能够同时发生而互不打扰。', 'Looking at relationships between cooking, laundry, rest and work reveals wasted routes and overlooked corners. Layout changes should reduce conflicts and let different activities happen comfortably at the same time.') },
      { heading: bi('自然光与隐私一起考虑', 'Consider daylight and privacy together'), body: bi('开窗的价值不仅在面积，还在朝向、窗台高度和与邻居的关系。借光、内窗与浅色表面能够改善采光，同时保留需要安静与私密的空间。', 'A window matters for its orientation, sill height and relationship to neighbours as well as its size. Borrowed light, internal glazing and pale surfaces improve daylight while preserving quiet and privacy.') },
      { heading: bi('细节应该方便长期使用', 'Details should support long-term use'), body: bi('收纳深度、台面高度和灯光位置需要回应真实的身体尺度。耐久且容易清洁的材料，可以减少维护负担，让舒适不依赖持续的整理与更换。', 'Storage depths, worktop heights and lighting should respond to real bodies and habits. Durable, easy-to-clean materials reduce maintenance, allowing comfort without constant replacement and rearrangement.') },
    ], quote: bi('家的设计是否成功，要看普通的一天是否过得更从容', 'A home succeeds when an ordinary day becomes easier to live.'),
    bullets: [bi('先记录真实的生活习惯', 'Begin by recording actual habits'), bi('一起评估光线、隐私和动线', 'Evaluate light, privacy and movement together'), bi('用可维护的细节延长舒适', 'Sustain comfort with maintainable details')],
  },
  {
    slug: 'designing-spaces-with-timeless-elegance', title: bi('设计经得起时间的优雅空间', 'Designing spaces with timeless elegance'), category: 'design', categoryLabel: articleCategories.design,
    summary: bi('用比例、材料与克制的细节建立持久的空间品质', 'Building lasting spatial quality through proportion, materials and restrained detail.'),
    image: 'j2YKkqyLUhnbEw0wV34bMBNn0.webp', coverImage: 'j2YKkqyLUhnbEw0wV34bMBNn0.webp', author: 'Cristofer Carder', authorImage: 'hTKl1GeGaIq6seyia97rSj70.webp', date: '2026-02-28', readingMinutes: 4,
    intro: bi('经得起时间的空间不需要拒绝变化，而是拥有足够清晰的基础，能够容纳不同阶段的生活。比例、触感和细节的关系，比追逐某一种流行颜色更重要。', 'A lasting space needs a clear foundation that accommodates different stages of life. The relationships between proportion, touch and detail matter more than the pursuit of a fashionable colour.'),
    sections: [
      { heading: bi('比例先于装饰', 'Proportion before decoration'), body: bi('房间的高度、开口与墙面之间的平衡，决定了空间最初的感受。把基本关系调整到位，家具与艺术品便可以自然进入，而不需要过多装饰修补。', 'The balance between height, openings and wall surfaces determines a room’s first impression. With those relationships in place, furniture and art belong naturally without excess decoration to compensate.') },
      { heading: bi('选择会自然老去的材料', 'Choose materials that age naturally'), body: bi('木材、石材与金属各有自己的时间表达。了解它们的维护要求并接受合理的使用痕迹，可以让空间随着生活逐渐形成独有的温度。', 'Timber, stone and metal each express time differently. Understanding their care and accepting appropriate signs of use allows a place to develop warmth and individuality as life unfolds.') },
      { heading: bi('为个人表达留下余地', 'Leave room for personal expression'), body: bi('中性的建筑背景并不意味着缺乏性格。它可以为不同的收藏、织物和使用方式提供平静的承托，让居住者而不是设计概念成为空间的主角。', 'A neutral background can calmly support changing collections, textiles and habits, allowing the occupant rather than the design concept to remain at the centre of the space.') },
    ], quote: bi('真正持久的优雅，是空间能够从容容纳生活', 'Enduring elegance is a space that accommodates life with ease.'),
    bullets: [bi('先建立清晰的空间比例', 'Establish clear spatial proportions'), bi('理解材料如何维护和老化', 'Understand how materials age and are cared for'), bi('给人的生活留下表达空间', 'Leave room for everyday life to express itself')],
  },
  {
    slug: 'urban-design-principles-for-better-living', title: bi('让生活更好的城市设计原则', 'Urban design principles for better living'), category: 'sustainability', categoryLabel: articleCategories.sustainability,
    summary: bi('从可步行街道到共享绿地，把人的体验放回城市中心', 'From walkable streets to shared landscapes, placing human experience at the centre of the city.'),
    image: 'SL2b1yokUCHRNYZ2n5qbD8hg0A.webp', coverImage: 'SL2b1yokUCHRNYZ2n5qbD8hg0A.webp', author: 'Kaiya Siphron', authorImage: '4aYe1dHH4d7VSwqGd29ADGOggc.webp', date: '2026-02-28', readingMinutes: 6,
    intro: bi('好的城市设计从脚下的体验开始。道路是否容易穿越、树荫是否连续、公共座椅能否让不同的人停留，这些具体条件决定了城市是否友好。', 'Good urban design begins at ground level. Safe crossings, continuous shade and public seating that welcomes different people determine whether a city feels hospitable.'),
    sections: [
      { heading: bi('让日常目的地彼此接近', 'Bring everyday destinations closer'), body: bi('住宅、学校、商店与公共服务的合理混合，可以缩短出行距离并支持更活跃的街道。密度需要与开放空间和公共设施共同设计，而不是只追求建筑面积。', 'A mix of homes, schools, shops and public services shortens journeys and supports lively streets. Density should be designed with open space and public amenities, not measured only in floor area.') },
      { heading: bi('提供连续而公平的公共空间', 'Provide connected and equitable public space'), body: bi('宽度适宜的人行道、无障碍坡道和清晰的导向，让儿童、长者和行动不便者都能独立使用城市。公共空间的质量应以最需要支持的人能否使用来检验。', 'Comfortable pavements, accessible ramps and legible wayfinding help children, older people and those with limited mobility navigate independently. Judge public space by whether those who need support most can use it.') },
      { heading: bi('把自然带回日常路线', 'Bring nature into everyday routes'), body: bi('树木、雨水花园与小型绿地不只是装饰。它们改善热环境、承接雨水，也为散步、休息与邻里交流提供理由，让城市生活更有韧性。', 'Trees, rain gardens and small green spaces improve thermal conditions, hold rainfall and create reasons to walk, pause and meet neighbours, making urban life more resilient.') },
    ], quote: bi('城市的尺度，最终应当回到每一个人的身体与日常', 'The measure of a city should return to the body and everyday life of each person.'),
    bullets: [bi('优先连续、安全的步行体验', 'Prioritise continuous, safe walking routes'), bi('让公共设施服务不同能力的人', 'Make public amenities work for different abilities'), bi('将自然和水循环融入街道', 'Integrate nature and water into the street')],
  },
  {
    slug: 'the-intersection-of-art-and-architecture', title: bi('艺术与建筑的交汇', 'The intersection of art and architecture'), category: 'culture', categoryLabel: articleCategories.culture,
    summary: bi('探索形式、感知与公共表达如何共同塑造空间体验', 'Exploring how form, perception and public expression shape the experience of space.'),
    image: 'RC27FuT17O0mAIh2GzDmMilPmJM.webp', coverImage: 'RC27FuT17O0mAIh2GzDmMilPmJM.webp', author: 'Lindsey Carder', authorImage: 'YgSygsxIqSfAOnWoPLgjJqguCnc.webp', date: '2026-02-28', readingMinutes: 5,
    intro: bi('艺术与建筑共享对光、尺度和材料的敏感，却也承担不同责任。当两者在项目早期就开始合作，艺术可以进入空间本身，而不是在完成后被附加其上。', 'Art and architecture share sensitivity to light, scale and material while carrying different responsibilities. Early collaboration lets art become part of spatial experience rather than an addition at the end.'),
    sections: [
      { heading: bi('让感知成为设计材料', 'Design with perception'), body: bi('颜色、声音与移动中的视角都会改变人对空间的理解。艺术实践帮助建筑师观察那些难以被平面图表达的体验，让路径、停留和回望成为有意识的设计。', 'Colour, sound and changing views affect how space is understood. Artistic practice helps architects observe experiences that plans cannot easily describe, turning movement, pauses and looking back into conscious decisions.') },
      { heading: bi('从物件合作走向空间合作', 'Collaborate on space, not only objects'), body: bi('一件作品可以影响墙面的尺度、开口的位置甚至结构节奏。让艺术家参与早期讨论，能够创造更深的联系，同时为作品的维护与公众使用提前做好安排。', 'Art can influence a wall’s scale, the position of an opening or a structural rhythm. Early involvement creates deeper relationships while allowing care and public access to be considered from the beginning.') },
      { heading: bi('公共表达需要开放的理解', 'Public expression needs openness'), body: bi('艺术与建筑在公共空间中的价值，不是要求每个人得到同一种解释，而是提供可以停留、讨论与重新发现的场所。开放的体验让城市容纳更多声音。', 'Public art and architecture offer places to pause, discuss and rediscover rather than requiring a single interpretation. An open experience lets the city hold more than one voice.') },
    ], quote: bi('当建筑为想象力留下位置，空间便拥有了更多被理解的方式', 'When architecture leaves room for imagination, space can be understood in more ways.'),
    bullets: [bi('在概念阶段邀请跨学科协作', 'Invite interdisciplinary work at concept stage'), bi('同时考虑感知、使用与维护', 'Consider perception, use and care together'), bi('为公众保留参与和解读的空间', 'Leave room for participation and interpretation')],
  },
]

/** 消费方英文基础路径可能已带 /en；统一规范以防重复语言段。 */
export function collectionHref(basePath: string, locale: CollectionLocale, path: string): string {
  const base = basePath.replace(/\/en\/?$/, '').replace(/\/$/, '')
  const suffix = path.replace(/^\/+/, '')
  return `${base}${locale === 'en' ? '/en' : ''}${suffix ? `/${suffix}` : ''}` || '/'
}
export function collectionDate(date: string, locale: CollectionLocale): string {
  const [year, month, day] = date.split('-').map(Number)
  return new Intl.DateTimeFormat(locale === 'zh' ? 'zh-CN' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(new Date(Date.UTC(year, month - 1, day)))
}
