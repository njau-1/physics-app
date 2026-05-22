/**
 * 物理探秘 - 仿真实验模块
 * 初中物理实验大全 · 力热声光电五类
 */

// ==================== 实验数据 ====================

var EXP_CATEGORIES = [
  {
    id: 'force', icon: '💪', title: '力 学',
    color: '#4A90E2',
    bgColor: '#EBF5FF',
    experiments: [
      { id: 'speed', name: '测平均速度', desc: '利用 v=s/t 测量小车平均速度' },
      { id: 'density', name: '测物质的密度', desc: '用天平和量筒测量密度 ρ=m/V', phetId: 'density' },
      { id: 'gravity-mass', name: '重力与质量关系', desc: '探究 G=mg，重力与质量成正比', phetId: 'gravity-force-lab-basics' },
      { id: 'inertia', name: '阻力对运动的影响', desc: '探究阻力对物体运动的影响（牛顿第一定律）', phetId: 'forces-and-motion-basics' },
      { id: 'balance-force', name: '二力平衡条件', desc: '探究二力平衡的四个条件', phetId: 'balancing-act' },
      { id: 'friction', name: '滑动摩擦力', desc: '探究压力与粗糙程度对摩擦力的影响', phetId: 'friction' },
      { id: 'pressure', name: '压力作用效果', desc: '探究压力、深度和密度对压强的影响', phetId: 'under-pressure' },
      { id: 'flow-p', name: '流体压强与流速', desc: '探究伯努利原理：流速大压强小', phetId: 'fluid-pressure-and-flow' },
      { id: 'buoyancy', name: '阿基米德原理', desc: '探究浮力 F浮=ρgV排', phetId: 'buoyancy-basics' },
      { id: 'lever', name: '杠杆平衡条件', desc: '探究杠杆原理 F₁L₁=F₂L₂', phetId: 'balancing-act' },
      { id: 'pulley', name: '测滑轮组机械效率', desc: '测量 η=Gh/Fs' },
      { id: 'energy', name: '动能与势能', desc: '探究动能、势能的大小与相互转化', phetId: 'energy-skate-park-basics' },
      { id: 'hooke', name: '胡克定律', desc: '探究弹簧弹力与伸长量的关系', phetId: 'hookes-law' },
      { id: 'projectile', name: '抛体运动', desc: '探究速度与角度对抛射轨迹的影响', phetId: 'projectile-motion' },
    ]
  },
  {
    id: 'heat', icon: '🔥', title: '热 学',
    color: '#F56C6C',
    bgColor: '#FFF0F0',
    experiments: [
      { id: 'melt', name: '固体熔化规律', desc: '探究晶体与非晶体熔化时温度变化', phetId: 'states-of-matter' },
      { id: 'heat-absorb', name: '不同物质吸热能力', desc: '探究比热容：不同物质吸热升温不同', phetId: 'energy-forms-and-changes' },
      { id: 'gas-props', name: '气体性质', desc: '探究压强、体积、温度与分子运动的关系', phetId: 'gas-properties' },
    ]
  },
  {
    id: 'sound', icon: '🔊', title: '声 学',
    color: '#E6A23C',
    bgColor: '#FFF6E5',
    experiments: [
      { id: 'sound-gen', name: '声音的产生与传播', desc: '探究声音由振动产生，传播需要介质', phetId: 'sound-waves' },
      { id: 'pitch-volume', name: '音调与响度', desc: '探究频率决定音调，振幅决定响度', phetId: 'sound-waves' },
      { id: 'wave-string', name: '绳波', desc: '观察波的传播、反射与驻波现象', phetId: 'wave-on-a-string' },
      { id: 'waves-intro', name: '波入门', desc: '观察水波、声波和光的波动特性', phetId: 'waves-intro' },
    ]
  },
  {
    id: 'optics', icon: '🌈', title: '光 学',
    color: '#9B59B6',
    bgColor: '#F5EEF8',
    experiments: [
      { id: 'reflect', name: '光的反射定律', desc: '探究三线共面、反射角等于入射角', phetId: 'bending-light' },
      { id: 'mirror', name: '平面镜成像特点', desc: '探究像与物等大等距、左右相反', phetId: 'geometric-optics' },
      { id: 'refract', name: '光的折射特点', desc: '探究光从空气进入水中的偏折规律', phetId: 'bending-light' },
      { id: 'lens-img', name: '凸透镜成像', desc: '探究物距变化对成像的影响', phetId: 'geometric-optics' },
      { id: 'dispersion', name: '光的色散', desc: '观察白光通过三棱镜分解为七色光' },
      { id: 'color-mix', name: '颜色视觉', desc: '探究红绿蓝三原色光混合原理', phetId: 'color-vision' },
    ]
  },
  {
    id: 'electric', icon: '⚡', title: '电 与 磁',
    color: '#67C23A',
    bgColor: '#F0F9EB',
    experiments: [
      { id: 'circuit', name: '串并联电路', desc: '探究串、并联电路的电流电压特点', phetId: 'circuit-construction-kit-dc' },
      { id: 'res-factor', name: '影响电阻的因素', desc: '探究电阻与材料、长度、横截面积的关系', phetId: 'resistance-in-a-wire' },
      { id: 'ohm-law', name: '欧姆定律', desc: '探究电流与电压、电阻的关系 I=U/R', phetId: 'ohms-law' },
      { id: 'resistance', name: '伏安法测电阻', desc: '用电流表电压表测未知电阻 R=U/I', phetId: 'circuit-construction-kit-dc-virtual-lab' },
      { id: 'power', name: '测小灯泡电功率', desc: '测量小灯泡的额定功率和实际功率', phetId: 'circuit-construction-kit-dc-virtual-lab' },
      { id: 'joule', name: '焦耳定律', desc: '探究电流热效应 Q=I²Rt' },
      { id: 'solenoid', name: '螺线管磁场', desc: '探究通电螺线管的磁场分布（安培定则）', phetId: 'electromagnet' },
      { id: 'emagnet', name: '电磁铁磁性强弱', desc: '探究电流与匝数对电磁铁磁性的影响', phetId: 'electromagnet' },
      { id: 'induction', name: '电磁感应', desc: '探究磁生电的条件（法拉第定律）', phetId: 'faradays-law' },
      { id: 'motor', name: '磁场对电流的作用', desc: '探究通电导线在磁场中受力（电动机原理）', phetId: 'faradays-law' },
      { id: 'static', name: '摩擦起电', desc: '探究摩擦起电与电荷相互作用', phetId: 'balloons-and-static-electricity' },
      { id: 'charges', name: '电荷与电场', desc: '观察点电荷周围的电场分布', phetId: 'charges-and-fields' },
    ]
  }
];

// ==================== 实验指导 ====================

var EXP_GUIDANCE = {
  // ---- 力学 ----
  'density': {
    steps: ['1. 在 PhET 仿真中选择不同物体（木块、冰块、砖块等）', '2. 分别测量每个物体的质量和体积', '3. 计算密度 ρ=m/V，比较不同物质的密度'],
    result: '同种物质密度相同，不同物质密度一般不同。密度是物质的一种特性，与质量和体积无关。'
  },
  'gravity-mass': {
    steps: ['1. 在仿真中选择不同质量的物体', '2. 用弹簧测力计测量物体所受重力', '3. 记录多组数据，计算 G/m 的比值'],
    result: '物体所受重力与其质量成正比，G/m 为常数（约 9.8 N/kg），即 G=mg。'
  },
  'inertia': {
    steps: ['1. 在水平面上放置小车，施加不同大小的推力', '2. 观察小车运动速度变化', '3. 改变接触面粗糙程度，重复实验'],
    result: '力是改变物体运动状态的原因，不是维持运动的原因。阻力越小，物体运动越远（牛顿第一定律）。'
  },
  'balance-force': {
    steps: ['1. 在杠杆两侧悬挂不同数量的钩码', '2. 调节钩码位置，使杠杆平衡', '3. 记录力的大小和力臂长度'],
    result: '二力平衡条件：大小相等、方向相反、作用在同一直线上、作用在同一物体上。杠杆平衡条件：F₁L₁=F₂L₂。'
  },
  'friction': {
    steps: ['1. 用弹簧测力计水平拉动木块做匀速直线运动', '2. 在木块上加砝码，改变压力大小', '3. 更换不同粗糙程度的接触面'],
    result: '滑动摩擦力大小与压力大小成正比，与接触面粗糙程度有关。与接触面积大小无关。'
  },
  'pressure': {
    steps: ['1. 选择不同液体（水、盐水等），观察压强计示数', '2. 改变金属盒在液体中的深度', '3. 改变金属盒方向，观察示数变化'],
    result: '液体内部压强随深度增加而增大，同一深度各方向压强相等。液体压强还与液体密度有关。'
  },
  'flow-p': {
    steps: ['1. 在管道中让流体通过不同粗细的截面', '2. 观察流速变化处压强计的水柱高度差', '3. 改变流体速度，重复观察'],
    result: '流体流速越大的位置压强越小（伯努利原理）。如：飞机翼型、喷雾器等应用。'
  },
  'buoyancy': {
    steps: ['1. 将不同物体（木块、铁块等）放入液体中', '2. 观察物体的浮沉状态', '3. 改变液体密度，观察浮力变化'],
    result: '物体在液体中受到的浮力等于排开液体的重力，F浮=ρ液gV排。物体密度小于液体密度时上浮，大于时下沉。'
  },
  'lever': {
    steps: ['1. 在杠杆两端不同位置悬挂钩码', '2. 调节位置使杠杆水平平衡', '3. 记录动力、阻力、动力臂、阻力臂'],
    result: '杠杆平衡条件：F₁×L₁=F₂×L₂。动力臂越长越省力，阻力臂越长越费力。'
  },
  'energy': {
    steps: ['1. 将滑板车放在不同高度释放', '2. 观察滑板车运动过程中速度变化', '3. 观察能量条中动能和势能的变化'],
    result: '下落过程中势能转化为动能（机械能守恒）。有摩擦时，机械能转化为内能，总能量保持不变。'
  },
  'hooke': {
    steps: ['1. 在弹簧下端悬挂不同质量的钩码', '2. 测量弹簧的伸长量（原长 - 现长）', '3. 记录多组数据，画出 F-Δx 图像'],
    result: '在弹性限度内，弹簧的伸长量与受到的拉力成正比，即 F=kΔx（胡克定律）。'
  },
  'projectile': {
    steps: ['1. 调整发射角度（如 30°、45°、60°）', '2. 调整初速度大小', '3. 观察并比较不同条件下的抛射轨迹'],
    result: '抛射角为 45° 时射程最远。初速度越大，射程越远。抛体轨迹为抛物线。'
  },
  // ---- 热学 ----
  'melt': {
    steps: ['1. 选择晶体物质（冰），开始加热', '2. 观察温度随时间的变化', '3. 再选择非晶体物质（蜡），重复实验对比'],
    result: '晶体熔化时温度保持不变（熔点），非晶体熔化时温度持续上升。凝固过程同理。'
  },
  'heat-absorb': {
    steps: ['1. 选择两种不同物质（如水、油）', '2. 用相同的热源给它们加热相同时间', '3. 比较两种物质的温度升高情况'],
    result: '相同条件下，不同物质吸收相同热量，升高的温度不同。比热容越大的物质升温越慢。'
  },
  'gas-props': {
    steps: ['1. 改变容器体积，观察压强变化', '2. 改变气体温度，观察压强变化', '3. 改变气体分子数量，观察压强变化'],
    result: '气体压强与体积成反比（温度一定时），与温度成正比（体积一定时），与分子数成正比。'
  },
  // ---- 声学 ----
  'sound-gen': {
    steps: ['1. 点击声源（音叉）观察振动情况', '2. 改变音叉振动的频率和振幅', '3. 观察声波在介质中的传播'],
    result: '声音由物体振动产生（声源），以声波形式在介质中传播。真空不能传声。'
  },
  'pitch-volume': {
    steps: ['1. 改变音叉振动频率，听音调变化', '2. 改变振动幅度，听响度变化', '3. 对比不同频率和振幅的波形图'],
    result: '音调由频率决定：频率越高，音调越高。响度由振幅决定：振幅越大，响度越大。'
  },
  'wave-string': {
    steps: ['1. 调整绳子的张力（松紧）', '2. 改变振动频率', '3. 观察波的传播、反射和驻波现象'],
    result: '波速由介质决定。频率越高波长越短。入射波与反射波叠加可形成驻波。'
  },
  'waves-intro': {
    steps: ['1. 切换到水波模式，点击水面产生波', '2. 切换到声波模式，观察纵波传播', '3. 切换到光波模式，观察横波传播'],
    result: '波是能量传递的一种方式。水波是横波，声波是纵波，光波是电磁横波。'
  },
  // ---- 光学 ----
  'reflect': {
    steps: ['1. 调整入射光线角度', '2. 观察反射光线的方向变化', '3. 比较入射角和反射角的大小'],
    result: '反射定律：反射光线、入射光线和法线在同一平面内；反射光线和入射光线分居法线两侧；反射角等于入射角。'
  },
  'mirror': {
    steps: ['1. 在平面镜前放置物体', '2. 观察像的位置和大小', '3. 改变物体位置，观察像的变化'],
    result: '平面镜成像特点：像与物等大、等距、左右相反，成虚像。像距 = 物距。'
  },
  'refract': {
    steps: ['1. 让光线从空气射入水中，观察折射', '2. 改变入射角，观察折射角变化', '3. 让光线从水射入空气，观察全反射现象'],
    result: '光从空气斜射入水中时，折射角小于入射角。入射角增大，折射角也增大。光从光密介质射入光疏介质时可能发生全反射。'
  },
  'lens-img': {
    steps: ['1. 将物体放在凸透镜前不同位置（u>2f、2f>u>f、u<f）', '2. 观察所成像的特点（大小、正倒、虚实）', '3. 记录物距 u 和像距 v 的关系'],
    result: 'u>2f 成倒立缩小实像（照相机）；f<u<2f 成倒立放大实像（投影仪）；u<f 成正立放大虚像（放大镜）。'
  },
  'color-mix': {
    steps: ['1. 分别打开红、绿、蓝三色光源', '2. 调节各光源亮度', '3. 观察不同颜色叠加后的效果'],
    result: '红+绿=黄，红+蓝=品红，绿+蓝=青，红+绿+蓝=白。这是色光加色原理（RGB）。'
  },
  // ---- 电与磁 ----
  'circuit': {
    steps: ['1. 用导线将电池、灯泡、开关连接成串联电路', '2. 测量各处的电流和电压', '3. 改接成并联电路，重复测量'],
    result: '串联电路：电流处处相等，总电压等于各用电器电压之和。并联电路：各支路电压相等，干路电流等于各支路电流之和。'
  },
  'res-factor': {
    steps: ['1. 选择不同材料的导线（铜、铁、镍铬）', '2. 改变导线的长度和横截面积', '3. 测量并比较电阻值'],
    result: '电阻大小与材料、长度、横截面积有关。同种材料：长度越大电阻越大，横截面积越大电阻越小。'
  },
  'ohm-law': {
    steps: ['1. 改变电路中的电压，观察电流变化', '2. 改变电阻值，观察电流变化', '3. 记录多组数据，画出 I-U 图像'],
    result: '通过导体的电流与导体两端电压成正比，与导体电阻成反比，即 I=U/R（欧姆定律）。'
  },
  'resistance': {
    steps: ['1. 用伏安法连接电路', '2. 测量待测电阻两端的电压和通过它的电流', '3. 利用 R=U/I 计算电阻值'],
    result: '伏安法测电阻的原理是 R=U/I。多次测量取平均值可减小误差。'
  },
  'power': {
    steps: ['1. 用伏安法连接电路测小灯泡功率', '2. 调节滑动变阻器改变小灯泡两端电压', '3. 分别测量 U=U额、U>U额、U<U额时的功率'],
    result: 'P=UI。当 U=U额 时 P=P额 为额定功率。电压偏离额定值时，实际功率也随之改变。'
  },
  'solenoid': {
    steps: ['1. 给螺线管通电，用小磁针探测磁场方向', '2. 改变电流方向，观察磁场方向变化', '3. 观察螺线管内部和外部的磁场分布'],
    result: '通电螺线管外部磁场与条形磁铁相似。安培定则：用右手握住螺线管，四指指向电流方向，拇指指向 N 极。'
  },
  'emagnet': {
    steps: ['1. 给电磁铁通电，测试磁性强度（吸引回形针数量）', '2. 改变电流大小，观察磁性变化', '3. 改变线圈匝数，观察磁性变化'],
    result: '电磁铁磁性随电流增大而增强，随线圈匝数增多而增强。电磁铁优点：磁性强弱可控，可通断电控制。'
  },
  'induction': {
    steps: ['1. 将磁铁插入线圈，观察电流表指针偏转', '2. 改变磁铁插入速度，观察感应电流变化', '3. 改变磁铁极性和运动方向'],
    result: '闭合电路的部分导体做切割磁感线运动时产生感应电流。感应电流方向与磁场方向和运动方向有关。'
  },
  'motor': {
    steps: ['1. 将通电导体放入磁场中，观察受力运动', '2. 改变电流方向，观察运动方向变化', '3. 改变磁场方向，观察运动方向变化'],
    result: '通电导体在磁场中受到力的作用（安培力）。受力方向与电流方向和磁场方向有关（左手定则）。这是电动机原理。'
  },
  'static': {
    steps: ['1. 用毛皮摩擦气球，使气球带电', '2. 观察带电气球间的相互作用', '3. 将带电气球靠近轻小物体'],
    result: '摩擦可以使物体带电（摩擦起电）。同种电荷相互排斥，异种电荷相互吸引。带电体能吸引轻小物体。'
  },
  'charges': {
    steps: ['1. 放置单个点电荷，观察电场线分布', '2. 放置两个同种电荷，观察电场', '3. 放置两个异种电荷，观察电场'],
    result: '电场线从正电荷出发到负电荷终止。电场线密集处电场强。同种电荷间电场线互相排斥。'
  }
};

// ==================== 渲染列表 ====================

function renderExperimentList() {
  var container = document.getElementById('exp-list');
  if (!container) return;
  var html = '';
  var count = EXP_CATEGORIES.length;
  EXP_CATEGORIES.forEach(function(cat, ci) {
    var isLast = (ci === count - 1);
    html += '<div class="exp-card" data-cat="' + ci + '">';
    html += '<div class="exp-card-header" onclick="toggleCat(this)" style="border-left:4px solid ' + cat.color + ';">';
    html += '<span class="exp-card-icon" style="background:' + cat.color + '">' + cat.icon + '</span>';
    html += '<span class="exp-card-title">' + cat.title + '</span>';
    html += '<span class="exp-card-count">' + cat.experiments.length + ' 个实验</span>';
    html += '<span class="exp-card-arrow"><svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M4.5 2L9 6l-4.5 4V2z"/></svg></span>';
    html += '</div>';
    html += '<div class="exp-card-body" id="cat-body-' + ci + '">';
    cat.experiments.forEach(function(exp) {
      html += '<div class="exp-item" onclick="openExperiment(\'' + cat.id + '\',\'' + exp.id + '\')" style="border-left:3px solid ' + cat.color + ';">';
      html += '<div class="exp-item-icon" style="background:' + cat.color + '">' + (cat.experiments.indexOf(exp) + 1) + '</div>';
      html += '<div class="exp-item-info"><div class="exp-item-name">' + exp.name + '</div><div class="exp-item-desc">' + exp.desc + '</div></div>';
      html += '<span class="exp-item-arrow">›</span>';
      html += '</div>';
    });
    html += '</div></div>';
  });
  container.innerHTML = html;
}

function toggleCat(el) {
  var card = el.parentElement;
  var body = card.querySelector('.exp-card-body');
  if (!body) return;
  
  // 切换状态
  var isOpen = card.classList.contains('open');
  
  if (isOpen) {
    // 收起
    card.classList.remove('open');
    body.style.display = 'none';
  } else {
    // 展开
    card.classList.add('open');
    body.style.display = 'block';
  }
}

// ==================== 实验详情 ====================

var _expAnimFrame = null;

var _currentExpName = '';
var _currentExpDesc = '';

function openExperiment(catId, expId) {
  var cat = EXP_CATEGORIES.find(function(c) { return c.id === catId; });
  if (!cat) return;
  var exp = cat.experiments.find(function(e) { return e.id === expId; });
  if (!exp) return;

  _currentExpName = exp.name;
  _currentExpDesc = exp.desc;

  if (_expAnimFrame) { cancelAnimationFrame(_expAnimFrame); _expAnimFrame = null; }

  var area = document.getElementById('experiment-area');
  area.style.display = 'flex';
  document.getElementById('exp-title').textContent = cat.icon + ' ' + exp.name;

  // 构建控制按钮
  buildControls(exp.id);

  var descArea = document.getElementById('exp-description');
  descArea.innerHTML = '<div class="exp-objective" style="border-color:' + cat.color + '"><strong>🎯 实验：</strong>' + exp.name + '</div>' +
    '<p style="margin-top:6px;color:#666;">' + exp.desc + '</p>' +
    (exp.phetId ? '<p style="margin-top:4px;font-size:11px;color:#999;">来源: PhET Interactive Simulations (University of Colorado Boulder)</p>' : '');

  // 添加实验指导（PhET 模式）
  if (exp.phetId) {
    var guide = EXP_GUIDANCE[exp.id];
    if (guide) {
      var stepsHtml = '';
      for (var gi = 0; gi < guide.steps.length; gi++) {
        stepsHtml += '<div style="padding:4px 0;font-size:13px;line-height:1.5;color:#333;">' + guide.steps[gi] + '</div>';
      }
      descArea.innerHTML +=
        '<div id="exp-guide" style="margin-top:10px;background:' + cat.bgColor + ';border:1px solid ' + cat.color + '30;border-radius:8px;overflow:hidden;">' +
        '<div onclick="toggleGuide()" style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;cursor:pointer;user-select:none;">' +
        '<span style="font-size:13px;font-weight:600;color:' + cat.color + ';">📖 实验指导与预期结果</span>' +
        '<span id="guide-arrow" style="font-size:12px;color:' + cat.color + ';transition:transform 0.2s;">▼</span>' +
        '</div>' +
        '<div id="guide-body" style="max-height:0;overflow:hidden;transition:max-height 0.3s ease;padding:0 12px;">' +
        '<div style="padding:6px 0 10px 0;">' +
        '<div style="font-size:13px;font-weight:600;color:' + cat.color + ';margin-bottom:4px;">🔬 实验步骤：</div>' +
        stepsHtml +
        '<div style="margin-top:8px;padding:8px 10px;background:#fff;border-radius:6px;border-left:3px solid ' + cat.color + ';">' +
        '<div style="font-size:13px;font-weight:600;color:' + cat.color + ';margin-bottom:2px;">✅ 预期结果：</div>' +
        '<div style="font-size:13px;color:#333;line-height:1.5;">' + guide.result + '</div>' +
        '</div></div></div></div>';
    }
  }

  // 判断是否为 PhET 仿真实验
  var canvas = document.getElementById('exp-canvas');
  var iframe = document.getElementById('exp-iframe');

  if (exp.phetId) {
    // PhET 模式：隐藏 canvas，显示 iframe
    canvas.style.display = 'none';
    iframe.style.display = 'block';

    // 计算 iframe 高度（自适应）
    var updateIframeSize = function() {
      var areaRect = area.getBoundingClientRect();
      var headerH = area.querySelector('.exp-header').offsetHeight || 40;
      var descH = descArea.offsetHeight || 40;
      var controlsH = document.getElementById('exp-controls').offsetHeight || 0;
      var availH = areaRect.height - headerH - descH - controlsH - 20;
      iframe.style.height = Math.max(300, Math.min(availH, 500)) + 'px';
    };

    // PhET 链接配置（多镜像源）
    var phetBaseUrls = [
      'https://phet.colorado.edu/sims/html/' + exp.phetId + '/latest/' + exp.phetId + '_zh_CN.html',
      'https://phet.colorado.edu/sims/html/' + exp.phetId + '/latest/' + exp.phetId + '_en.html',
      'https://phet.colorado.edu/sims/html/' + exp.phetId + '/latest/' + exp.phetId + '.html'
    ];
    var currentUrlIndex = 0;
    var loadTimeout = null;

    // 加载 PhET 页面，带错误重试
    function loadPhetUrl(index) {
      if (index >= phetBaseUrls.length) {
        // 所有链接都失败，显示错误提示和外部链接按钮
        iframe.style.display = 'none';
        var errorDiv = document.createElement('div');
        errorDiv.id = 'phet-error-msg';
        errorDiv.style.cssText = 'padding:30px 20px;text-align:center;color:#666;';
        errorDiv.innerHTML = 
          '<div style="font-size:48px;margin-bottom:16px;">🔬</div>' +
          '<p style="font-size:16px;font-weight:600;margin-bottom:8px;color:#333;">PhET 仿真加载失败</p>' +
          '<p style="font-size:13px;color:#999;margin-bottom:20px;line-height:1.6;">' +
          '由于网络限制，无法直接加载 PhET 仿真实验。<br>您可以尝试以下方式：</p>' +
          '<button onclick="window.open(\'https://phet.colorado.edu/sims/html/' + exp.phetId + '/latest/' + exp.phetId + '_zh_CN.html\', \'_system\')" ' +
          'style="padding:12px 24px;background:#4A90E2;color:#fff;border:none;border-radius:8px;font-size:14px;cursor:pointer;margin-right:10px;">' +
          '在浏览器中打开</button>' +
          '<button onclick="retryLoadPhet()" ' +
          'style="padding:12px 24px;background:#f5f5f5;color:#666;border:1px solid #ddd;border-radius:8px;font-size:14px;cursor:pointer;">' +
          '重新加载</button>';
        var canvasParent = canvas.parentNode;
        if (canvasParent) canvasParent.insertBefore(errorDiv, canvas);
        return;
      }
      iframe.src = phetBaseUrls[index];
    }

    // 全局重试函数
    window.retryLoadPhet = function() {
      var errorMsg = document.getElementById('phet-error-msg');
      if (errorMsg) errorMsg.remove();
      iframe.style.display = 'block';
      currentUrlIndex = 0;
      loadPhetUrl(0);
    };

    // 监听 iframe 加载错误
    iframe.onerror = function() {
      clearTimeout(loadTimeout);
      currentUrlIndex++;
      loadPhetUrl(currentUrlIndex);
    };

    // 监听加载完成，检查是否真正加载成功
    iframe.onload = function() {
      clearTimeout(loadTimeout);
      try {
        // 尝试访问 contentWindow，如果跨域会抛出异常
        var iframeDoc = iframe.contentWindow.document;
        // 检查是否加载了错误页面或空白页
        if (iframeDoc.body && iframeDoc.body.innerHTML.length < 100) {
          // 可能是空白页，尝试下一个链接
          currentUrlIndex++;
          loadPhetUrl(currentUrlIndex);
        }
      } catch (e) {
        // 跨域访问被阻止，说明页面已加载（CSP限制下无法访问）
        // 这种情况下页面可能已经正常显示
        console.log('PhET iframe loaded (cross-origin)');
      }
    };

    // 监听加载超时
    loadTimeout = setTimeout(function() {
      currentUrlIndex++;
      loadPhetUrl(currentUrlIndex);
    }, 15000);

    // 开始加载
    loadPhetUrl(0);

    // 隐藏控制按钮（PhET 自带控制）
    var controls = document.getElementById('exp-controls');
    if (controls) controls.style.display = 'none';

    setTimeout(updateIframeSize, 100);
    // 窗口 resize 时重新计算
    window._phetResizeHandler = updateIframeSize;
    window.addEventListener('resize', window._phetResizeHandler);
  } else {
    // Canvas 动画模式：显示 canvas，隐藏 iframe
    canvas.style.display = 'block';
    iframe.style.display = 'none';
    iframe.src = '';

    // 恢复控制按钮显示
    var controls = document.getElementById('exp-controls');
    if (controls) controls.style.display = '';

    // 延迟获取canvas尺寸（确保display:flex已生效）
    setTimeout(function() {
      // 监听resize
      canvas._resizeHandler = function() {
        if (_animState.running && !_animState.paused) {
          // resize会在runExpAnimation中处理
        }
      };

      setupCanvasInteraction(canvas);
      runExpAnimation(exp, canvas);
    }, 50);
  }
}

function restartAnim() {
  resetExperiment();
}

function closeExperiment() {
  _animState.running = false;
  document.getElementById('experiment-area').style.display = 'none';
  if (_expAnimFrame) { cancelAnimationFrame(_expAnimFrame); _expAnimFrame = null; }

  // 清理 PhET iframe
  var iframe = document.getElementById('exp-iframe');
  if (iframe) {
    iframe.src = '';
    iframe.style.display = 'none';
    iframe.onerror = null;
    iframe.onload = null;
  }
  // 清理错误提示
  var errorMsg = document.getElementById('phet-error-msg');
  if (errorMsg) errorMsg.remove();
  // 清理重试函数
  if (window.retryLoadPhet) window.retryLoadPhet = null;
  // 清理 resize 监听
  if (window._phetResizeHandler) {
    window.removeEventListener('resize', window._phetResizeHandler);
    window._phetResizeHandler = null;
  }
}

function toggleGuide() {
  var body = document.getElementById('guide-body');
  var arrow = document.getElementById('guide-arrow');
  if (!body || !arrow) return;
  var isOpen = body.style.maxHeight !== '0px' && body.style.maxHeight !== '';
  if (isOpen) {
    body.style.maxHeight = '0px';
    arrow.style.transform = 'rotate(0deg)';
  } else {
    body.style.maxHeight = body.scrollHeight + 200 + 'px';
    arrow.style.transform = 'rotate(180deg)';
    // 重新计算 iframe 尺寸
    setTimeout(function() {
      var evt = window._phetResizeHandler;
      if (evt) evt();
    }, 350);
  }
}

// ==================== 动画系统 ====================

/* 全局动画状态 */
var _animState = {
  running: false,
  paused: false,
  time: 0,
  params: {},
  data: {},
  canvasW: 0,
  canvasH: 0
};

function runExpAnimation(exp, canvas) {
  if (_expAnimFrame) { cancelAnimationFrame(_expAnimFrame); _expAnimFrame = null; }
  
  // 初始化状态
  _animState.running = true;
  _animState.paused = false;
  _animState.time = 0;
  _animState.params = {};
  _animState.data = {};

  var ctx = canvas.getContext('2d');
  var w, h;
  
  function resize() {
    w = canvas.width = canvas.offsetWidth || window.innerWidth - 32;
    h = canvas.height = Math.min(canvas.offsetHeight || 350, window.innerHeight * 0.5);
  }
  resize();

  // 选择实验动画
  var animFunc = getExpAnimator(exp.id);
  
  function draw() {
    if (!_animState.running) return;
    
    _animState.canvasW = w;
    _animState.canvasH = h;

    if (!_animState.paused) {
      _animState.time += 0.016; // ~60fps
      animFunc(ctx, w, h, _animState.time, _animState.params, _animState.data);
      updateDataPanel(_animState.data);
    } else {
      animFunc(ctx, w, h, _animState.time, _animState.params, _animState.data); // 暂停时仍渲染当前帧
    }
    
    _expAnimFrame = requestAnimationFrame(draw);
  }
  draw();

  // 窗口resize处理
  canvas._resizeHandler = resize;
}

// ==================== 力学实验动画 ====================

function getExpAnimator(id) {
  var animators = {
    speed: animSpeed,
    density: animDensity,
    gravity: animGravity,
    inertia: animInertia,
    balance: animBalance,
    friction: animFriction,
    pressure: animPressure,
    liquid_p: animLiquidPressure,
    flow_p: animFluidPressure,
    buoyancy: animBuoyancy,
    archimedes: animArchimedes,
    lever: animLever,
    pulley: animPulley,
    energy: animEnergy
  };
  return animators[id] || animPlaceholder;
}

// ---- 工具函数 ----

function clearCanvas(ctx, w, h, color) {
  color = color || '#f5f7fa';
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, w, h);
  // 渐变背景（明亮清新风格）
  var grad = ctx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, '#f0f4f8');
  grad.addColorStop(1, '#e8eef3');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);
}

function drawParticles(ctx, w, h, t, count, color, alpha) {
  count = count || 20;
  alpha = alpha || 0.06;
  for (var i = 0; i < count; i++) {
    var px = ((i * 43 + t * 30) % (w + 40)) - 20;
    var py = (i * 59 + Math.sin(t * 1.5 + i) * 15) % (h + 40) - 20;
    ctx.fillStyle = color.replace('ALPHA', alpha.toString());
    ctx.globalAlpha = alpha;
    ctx.beginPath(); ctx.arc(px, py, 1.5 + Math.sin(t + i) * 0.5, 0, Math.PI * 2); ctx.fill();
  }
  ctx.globalAlpha = 1;
}

function drawRoundedRect(ctx, x, y, rw, rh, r, fill, stroke) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + rw - r, y);
  ctx.quadraticCurveTo(x + rw, y, x + rw, y + r);
  ctx.lineTo(x + rw, y + rh - r);
  ctx.quadraticCurveTo(x + rw, y + rh, x + rw - r, y + rh);
  ctx.lineTo(x + r, y + rh);
  ctx.quadraticCurveTo(x, y + rh, x, y + rh - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
  if (fill) { ctx.fillStyle = fill; ctx.fill(); }
  if (stroke) { ctx.strokeStyle = stroke; ctx.stroke(); }
}

function drawText(ctx, text, x, y, opts) {
  opts = opts || {};
  ctx.font = (opts.bold ? 'bold ' : '') + (opts.size || '13') + 'px ' + (opts.font || 'sans-serif');
  ctx.fillStyle = opts.color || '#333';
  if (opts.align) ctx.textAlign = opts.align;
  if (opts.baseline) ctx.textBaseline = opts.baseline;
  ctx.fillText(text, x, y);
  ctx.textAlign = 'left';
  ctx.textBaseline = 'alphabetic';
}

function drawButton(ctx, x, y, bw, bh, text, active, themeColor) {
  var grad = ctx.createLinearGradient(x, y, x, y + bh);
  if (active) {
    grad.addColorStop(0, themeColor || '#4A90E2');
    grad.addColorStop(1, themeColor ? shadeColor(themeColor, -20) : '#3A7BC8');
  } else {
    grad.addColorStop(0, '#fff');
    grad.addColorStop(1, '#f0f0f0');
  }
  drawRoundedRect(ctx, x, y, bw, bh, 8, grad, active ? (themeColor || '#4A90E2') : '#ccc');
  ctx.font = 'bold 11px sans-serif';
  ctx.fillStyle = active ? '#fff' : '#555';
  ctx.textAlign = 'center';
  ctx.fillText(text, x + bw/2, y + bh/2 + 4);
  ctx.textAlign = 'left';
}

function shadeColor(color, percent) {
  var num = parseInt(color.replace('#',''),16), amt = Math.round(2.55*percent),
    R = (num >> 16) + amt, G = (num >> 8 & 0x00FF) + amt, B = (num & 0x0000FF) + amt;
  return '#' + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
}

// 颜色变亮（percent: 0~100）
function lightenColor(color, percent) { return shadeColor(color, Math.abs(percent)); }

// 颜色变暗（percent: 0~100）
function darkenColor(color, percent) { return shadeColor(color, -Math.abs(percent)); }

// hex颜色转rgba字符串，如 hexToRgba('#ff0000', 0.5) => 'rgba(255,0,0,0.5)'
function hexToRgba(hex, alpha) {
  var h = hex.replace('#', '');
  if (h.length === 3) h = h[0]+h[0]+h[1]+h[1]+h[2]+h[2];
  var num = parseInt(h, 16);
  var r = (num >> 16) & 255, g = (num >> 8) & 255, b = num & 255;
  if (alpha === undefined) alpha = 1;
  return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
}

// roundRect 包装函数（兼容 ctx.roundRect 和 drawRoundedRect 调用方式）
function roundRect(ctx, x, y, rw, rh, r, fill, stroke) {
  drawRoundedRect(ctx, x, y, rw, rh, r, fill, stroke);
}

function lerp(a, b, t) { return a + (b - a) * t; }
function clamp(v, min, max) { return v < min ? min : (v > max ? max : v); }

// 按钮区域记录（用于交互）
var _buttonAreas = [];
function registerButtonArea(x, y, w, h, id) {
  _buttonAreas.push({x:x, y:y, w:w, h:h, id:id});
}
function getButtonAt(mx, my) {
  for (var i = _buttonAreas.length-1; i >= 0; i--) {
    var b = _buttonAreas[i];
    if (mx >= b.x && mx <= b.x+b.w && my >= b.y && my <= b.y+b.h) return b.id;
  }
  return null;
}
function clearButtonAreas() { _buttonAreas = []; }

// ==================== 统一底部面板（数据 + 按钮）====================

/*
 * drawExpPanel - 统一实验底部面板
 * @param ctx      - Canvas 2D context
 * @param w, h     - Canvas 宽高
 * @param lines    - 内容行数组: [{text, xOff, yOff, color, size, bold}, ...]
 *                  xOff/yOff 相对于面板左上角的偏移
 * @param opts     - 可选: {panelY(起始Y比例如0.68), title(面板标题), hideButtons(隐藏暂停/重置按钮)}
 * 返回面板信息 {x, y, w, h} 供外部参考
 */
function drawExpPanel(ctx, w, h, lines, opts) {
  opts = opts || {};
  var panelStartY = opts.panelY || 0.68; // 面板占canvas高度的起始比例
  var hideBtns = !!opts.hideButtons;     // 是否隐藏暂停/重置按钮
  var py = Math.floor(h * panelStartY);
  var ph = h - py; // 面板高度延伸到canvas底部
  var px = Math.floor(w * 0.03);
  var pw = Math.floor(w * 0.94);

  // 面板背景
  drawRoundedRect(ctx, px, py, pw, ph, 10, 'rgba(255,255,255,0.96)', '#ddd');

  // 分隔线（仅在有按钮区时绘制）
  if (!hideBtns) {
    var splitY = py + ph - 46;
    if (splitY > py + 10) {
      ctx.strokeStyle = '#e8e8e8'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(px + 12, splitY); ctx.lineTo(px + pw - 12, splitY); ctx.stroke();
    }
  }

  // 绘制内容行（无按钮时内容可使用全部面板高度）
  if (lines) {
    for (var i = 0; i < lines.length; i++) {
      var ln = lines[i];
      if (!ln) continue;
      if (!hideBtns && ln.yOff >= (py + ph - 46) - py - 6) continue; // 不画到按钮区
      drawText(ctx, ln.text, px + (ln.xOff || 14), py + (ln.yOff || 18) + (i * 0), {
        color: ln.color || '#333', size: (ln.size || '12'), bold: !!ln.bold
      });
    }
  }

  // 按钮行（面板底部居中）—— 仅在未隐藏时绘制
  if (!hideBtns) {
    clearButtonAreas();
    var btnW = 66, btnH = 28;
    var btnY = py + ph - 40;
    var pauseText = _animState.paused ? '▶ 播放' : '⏸ 暂停';
    var centerX = px + pw / 2;

    drawButton(ctx, centerX - btnW - 6, btnY, btnW, btnH, pauseText, false, '#4A90E2');
    registerButtonArea(centerX - btnW - 6, btnY, btnW, btnH, 'play_pause');
    drawButton(ctx, centerX + 6, btnY, btnW, btnH, '↻ 重置', false, '#f0883e');
    registerButtonArea(centerX + 6, btnY, btnW, btnH, 'reset');
  }

  return { x: px, y: py, w: pw, h: ph };
}

// Canvas点击事件（增强版：处理 CSS 缩放）
var _lastClickPos = null; // 存储最近点击坐标，供滑块等控件使用
function setupCanvasInteraction(canvas) {
  function handleClick(clientX, clientY) {
    var rect = canvas.getBoundingClientRect();
    // 处理 canvas CSS 缩放（canvas.width vs offsetWidth）
    var scaleX = canvas.width / rect.width;
    var scaleY = canvas.height / rect.height;
    var mx = (clientX - rect.left) * scaleX;
    var my = (clientY - rect.top) * scaleY;
    _lastClickPos = { x: mx, y: my }; // 存储供滑块使用
    var btnId = getButtonAt(mx, my);
    if (btnId) handleButtonClick(btnId);
  }

  canvas.onclick = function(e) {
    handleClick(e.clientX, e.clientY);
  };

  // 触摸支持（同时支持 touchend 和 mousedown 以提高移动端兼容性）
  canvas.addEventListener('touchend', function(e) {
    e.preventDefault();
    if (e.changedTouches && e.changedTouches.length > 0) {
      var t = e.changedTouches[0];
      handleClick(t.clientX, t.clientY);
    }
  }, { passive: false });

  // 仅移动端使用 pointerdown（避免与 desktop click 重复触发）
  canvas.addEventListener('pointerdown', function(e) {
    if (e.pointerType !== 'mouse') handleClick(e.clientX, e.clientY);
  });
}

function handleButtonClick(btnId) {
  switch(btnId) {
    case 'play_pause': togglePlayPause(); break;
    case 'reset': resetExperiment(); break;
    case 'lever_slider':
      // 杠杆F1位置滑块：根据点击X坐标计算新位置
      if (_lastClickPos && _animState.params._sliderBounds) {
        var sb = _animState.params._sliderBounds;
        var ratio = (_lastClickPos.x - sb.x - 2) / (sb.w - 4);
        var newPos = Math.round(10 + ratio * 40);
        _animState.params.f1Pos = Math.max(10, Math.min(50, newPos));
      }
      break;
    default:
      if (_animState.params[btnId] !== undefined) {
        _animState.params[btnId] = !_animState.params[btnId];
      }
  }
}

function togglePlayPause() {
  _animState.paused = !_animState.paused;
  updateControlsUI();
}

function resetExperiment() {
  _animState.time = 0;
  _animState.data = {};
  // 重置参数到默认值（清除所有自定义状态）
  Object.keys(_animState.params).forEach(function(k) {
    delete _animState.params[k];
  });
  _animState.paused = false;
  updateControlsUI();
}

function updateControlsUI() {
  var controls = document.getElementById('exp-controls');
  if (!controls) return;
  var playBtn = controls.querySelector('[data-action="play"]');
  if (playBtn) {
    playBtn.textContent = _animState.paused ? '▶ 播放' : '⏸ 暂停';
  }
}

function updateDataPanel(data) {
  var descEl = document.getElementById('exp-description');
  if (!descEl || !data || Object.keys(data).length === 0) return;
  // 更新数据面板（可选实现）
}

function buildControls(experimentType) {
  var controls = document.getElementById('exp-controls');
  if (!controls) return;
  
  var html = '';
  
  // 根据实验类型只添加特定参数控制（不含播放/重置按钮，已在Canvas内绘制）
  if (experimentType === 'inertia') {
    html += '<div style="display:flex;align-items:center;"><span style="font-size:12px;color:#666;margin-right:6px;">阻力:</span>';
    html += '<select id="resist-select" onchange="_animState.params.resistance=Number(this.value)" style="padding:4px 8px;border-radius:6px;border:1px solid #ddd;background:#fff;color:#333;font-size:12px;">';
    html += '<option value="0">光滑(无摩擦)</option><option value="0.3" selected>木板(小)</option><option value="0.7" selected>毛巾(大)</option>';
    html += '</select></div>';
  } else if (experimentType === 'gravity') {
    html += '<div style="display:flex;align-items:center;"><span style="font-size:12px;color:#666;margin-right:6px;">质量:</span>';
    html += '<input type="range" id="mass-slider" min="100" max="500" value="200" step="50" oninput="_animState.params.mass=Number(this.value);document.getElementById(\'mass-val\').textContent=this.value+\'g\'" style="width:80px;">';
    html += '<span id="mass-val" style="font-size:12px;color:#4A90E2;margin-left:4px;">200g</span></div>';
  } else if (experimentType === 'lever') {
    html += '<div style="display:flex;align-items:center;"><span style="font-size:12px;color:#666;margin-right:6px;">F₁位置:</span>';
    html += '<input type="range" id="f1pos-slider" min="10" max="45" value="25" oninput="_animState.params.f1Pos=Number(this.value)" style="width:60px;"></div>';
  } else if (experimentType === 'energy') {
    html += '<div style="display:flex;align-items:center;"><span style="font-size:12px;color:#666;margin-right:6px;">高度:</span>';
    html += '<input type="range" id="height-slider" min="20" max="70" value="50" oninput="_animState.params.height=Number(this.value)" style="width:60px;"></div>';
  }
  
  controls.innerHTML = html;
}

// ---- 1. 测平均速度 (speed) ----
function animSpeed(ctx, w, h, t, params, data) {
  clearCanvas(ctx, w, h);
  drawParticles(ctx, w, h, t, 25, 'rgba(74,144,226,ALPHA)');
  
  // 初始化参数
  if (!params.started) { params.started = false; params.carX = w*0.15; params.dist = w*0.55; params.duration = 3.0; }
  if (!params.started && t > 0.5) params.started = true;
  
  var groundY = h * 0.58;
  var startX = w * 0.15;
  var endX = startX + params.dist;
  
  // 标题
  drawText(ctx, '测平均速度 v = s/t', w/2, 26, {size:'17', bold:true, align:'center'});
  
  // 斜面/轨道
  ctx.strokeStyle = '#c0c8d0'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(startX - 20, groundY); ctx.lineTo(endX + 60, groundY); ctx.stroke();
  ctx.fillStyle = '#e2e8f0'; ctx.fillRect(startX - 25, groundY, endX - startX + 85, Math.min(h - groundY, h * 0.1));
  
  // 起点终点标记
  ctx.setLineDash([6,4]); ctx.strokeStyle = '#4A90E2'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(startX, groundY - 35); ctx.lineTo(startX, groundY); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(endX, groundY - 35); ctx.lineTo(endX, groundY); ctx.stroke();
  ctx.setLineDash([]);
  drawText(ctx, '起点 A', startX, groundY - 42, {size:'11', align:'center', color:'#4A90E2'});
  drawText(ctx, '终点 B', endX, groundY - 42, {size:'11', align:'center', color:'#4A90E2'});
  
  // 距离标注
  ctx.strokeStyle = '#f0883e'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(startX, groundY + 16); ctx.lineTo(endX, groundY + 16); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(startX, groundY + 12); ctx.lineTo(startX, groundY + 20); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(endX, groundY + 12); ctx.lineTo(endX, groundY + 20); ctx.stroke();
  
  // 小车运动
  var carX = params.started ? lerp(startX, endX, clamp(t / params.duration - 0.5, 0, 1)) : startX;
  carX = clamp(carX, startX, endX);
  
  // 绘制小车
  var carW = 56, carH = 28;
  drawRoundedRect(ctx, carX - carW/2, groundY - carH, carW, carH, 6, '#4A90E2', '#6BA3FF');
  ctx.fillStyle = '#87ceeb'; ctx.fillRect(carX - 16, groundY - carH + 5, 28, 14);
  ctx.fillStyle = '#555';
  ctx.beginPath(); ctx.arc(carX - 16, groundY, 9, 0, Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.arc(carX + 16, groundY, 9, 0, Math.PI*2); ctx.fill();
  ctx.fillStyle = '#888';
  ctx.beginPath(); ctx.arc(carX - 16, groundY, 4, 0, Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.arc(carX + 16, groundY, 4, 0, Math.PI*2); ctx.fill();
  
  // 数据计算
  var elapsed = clamp((t - 0.5) / params.duration, 0, 1);
  var currentDist = elapsed * params.dist;
  var currentTime = elapsed * params.duration;
  var avgV = currentTime > 0 ? (currentDist / currentTime).toFixed(1) : '--';

  // 统一底栏面板
  drawExpPanel(ctx, w, h, [
    {text: 's = 路程(m)', xOff: 14, yOff: 18, color: '#888', size: '12'},
    {text: currentDist.toFixed(1) + ' m', xOff: 110, yOff: 18, color: '#4A90E2', size: '15', bold: true},
    {text: 't = 时间(s)', xOff: 14, yOff: 40, color: '#888', size: '12'},
    {text: currentTime.toFixed(2) + ' s', xOff: 110, yOff: 40, color: '#f0883e', size: '15', bold: true},
    {text: 'v = s/t = ', xOff: 210, yOff: 30, color: '#666', size: '13', bold: true},
    {text: avgV + ' m/s', xOff: 285, yOff: 28, color: '#3fb950', size: '18', bold: true}
  ], { panelY: 0.62 });
  
  data.v = avgV; data.s = currentDist.toFixed(1); data.t = currentTime.toFixed(2);
}

// ---- 2. 重力与质量关系 (gravity) ----
function animGravity(ctx, w, h, t, params, data) {
  clearCanvas(ctx, w, h);
  drawParticles(ctx, w, h, t, 20, 'rgba(240,136,62,ALPHA)', 0.04);
  
  if (!params.mass) params.mass = 200;
  
  var groundY = h * 0.55;
  drawText(ctx, '重力与质量的关系  G = mg', w/2, 22, {size:'16', bold:true, align:'center'});
  
  // 地面
  ctx.fillStyle = '#e8eef3'; ctx.fillRect(0, groundY, w, h - groundY);
  ctx.strokeStyle = '#c0c8d0'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(0, groundY); ctx.lineTo(w, groundY); ctx.stroke();
  
  // 两个物体对比
  var mass1 = 150, mass2 = params.mass;
  var cx1 = w * 0.28, cx2 = w * 0.72;
  var baseSize = 18;
  
  // 弹簧测力计（紧凑版）
  function drawSpringScale(x, y, massVal, label, col) {
    var g = 9.8, force = massVal / 1000 * g;
    var springLen = 14 + force * 5;
    // 顶梁
    ctx.strokeStyle = '#aaa'; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(x - 26, y - 38); ctx.lineTo(x + 26, y - 38); ctx.stroke();
    // 弹簧
    ctx.strokeStyle = col; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(x, y - 38);
    for (var i = 0; i < 8; i++) {
      var sy = y - 38 + (i + 1) * (springLen / 8);
      var sx = x + (i % 2 === 0 ? -4 : 4);
      ctx.lineTo(sx, sy);
    }
    ctx.lineTo(x, y - 38 + springLen); ctx.stroke();
    // 表壳
    ctx.fillStyle = '#fff';
    ctx.fillRect(x - 18, y - 38 + springLen, 36, 32);
    ctx.strokeStyle = '#ccc'; ctx.lineWidth = 1; ctx.strokeRect(x - 18, y - 38 + springLen, 36, 32);
    // 指针
    var needleY = y - 38 + springLen + 5 + force * 4;
    ctx.fillStyle = col;
    ctx.fillRect(x - 2, needleY, 4, 12);
    // 刻度
    ctx.strokeStyle = '#bbb';
    for (var k = 0; k <= 4; k++) {
      var ky = y - 38 + springLen + 5 + k * 5;
      ctx.beginPath(); ctx.moveTo(x - 14, ky); ctx.lineTo(x - 8, ky).stroke();
      ctx.beginPath(); ctx.moveTo(x + 8, ky); ctx.lineTo(x + 14, ky).stroke();
    }
    // 物体
    var objSize = baseSize * (massVal / 100);
    var objY = y - 38 + springLen + 34;
    drawRoundedRect(ctx, x - objSize/2, objY, objSize, objSize, 4, col, shadeColor(col, 20));
    // 标签紧贴物体下方
    drawText(ctx, label, x, objY + objSize + 12, {size:'11', align:'center', color:col});
    drawText(ctx, 'm=' + massVal + 'g  G=' + force.toFixed(1) + 'N', x, objY + objSize + 26,
      {size:'11', bold:true, align:'center', color:'#333'});
  }
  
  drawSpringScale(cx1, groundY - 95, mass1, 'A', '#4A90E2');
  drawSpringScale(cx2, groundY - 95, mass2, 'B', '#f0883e');

  // 统一底栏面板（隐藏无用的暂停/重置按钮）
  var ratio = (mass2 / mass1).toFixed(1);
  var g1 = (mass1 / 1000 * 9.8).toFixed(2), g2 = (mass2 / 1000 * 9.8).toFixed(2);
  drawExpPanel(ctx, w, h, [
    {text: '\u25b6 \u7ed3\u8bba\uff1a\u91cd\u529b\u4e0e\u8d28\u91cf\u6210\u6b63\u6bd4  G/m = g \u2248 9.8 N/kg',
      xOff: 12, yOff: 16, color: '#555', size: '13', bold: true},
    {text: 'GA = ' + g1 + ' N  |  GB = ' + g2 + ' N  |  mB/mA = GB/GA = ' + ratio,
      xOff: 12, yOff: 40, color: '#3fb950', size: '14', bold: true}
  ], { panelY: 0.58, hideButtons: true });
}

// ---- 3. 阻力对运动的影响 (inertia/牛顿第一定律) ----
function animInertia(ctx, w, h, t, params, data) {
  clearCanvas(ctx, w, h);
  drawParticles(ctx, w, h, t, 18, 'rgba(63,185,80,ALPHA)', 0.04);

  // 状态机：0=准备阶段 1=运动中
  if (params.phase === undefined) params.phase = 0;
  if (params.releaseT === undefined) params.releaseT = 0;

  // 1.5s后自动释放三车（模拟从斜面同一高度同时滑下）
  if (params.phase === 0 && t > 1.5) { params.phase = 1; params.releaseT = t; }

  drawText(ctx, '阻力对运动的影响 — 牛顿第一定律', w/2, 22, {size:'15', bold:true, align:'center'});

  var groundY = h * 0.55;
  ctx.fillStyle = '#e8eef3'; ctx.fillRect(0, groundY - 5, w, h - groundY + 5);
  ctx.strokeStyle = '#c0c8d0'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(0, groundY); ctx.lineTo(w, groundY); ctx.stroke();

  // 三条跑道——不同阻力面
  var lanes = [
    {name:'毛巾(大阻力)', res:0.80, color:'#f85149', yOff:-28},
    {name:'木板(小阻力)', res:0.35, color:'#f0883e', yOff:0},
    {name:'光滑(极小阻)', res:0.06, color:'#3fb950', yOff:28}
  ];

  var startX = w * 0.12;
  var v0 = 110; // 三车相同初速度（调低使停车距离在画布内）

  // 统一时间计算（三车同时出发）
  var dt = params.phase >= 1 ? (t - params.releaseT) : 0;

  // 起始线标记（强调同时同地出发）
  ctx.setLineDash([4,3]); ctx.strokeStyle = '#666'; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(startX, groundY + 38); ctx.lineTo(startX, groundY - 42); ctx.stroke();
  ctx.setLineDash([]);
  drawText(ctx, '起点', startX, groundY + 48, {size:'10', align:'center', color:'#888'});

  // 收集各车状态用于面板显示
  var carStates = [];

  lanes.forEach(function(lane, idx) {
    var ly = groundY + lane.yOff;
    // 跑道背景
    ctx.fillStyle = 'rgba(200,210,220,0.4)';
    ctx.fillRect(startX - 12, ly - 2, w - startX + 8, 4);

    // 跑道编号+标签
    ctx.fillStyle = lane.color;
    ctx.fillRect(startX - 40, ly - 9, 28, 18);
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 9px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText(idx+1, startX - 26, ly + 3);
    ctx.font = ''; ctx.textAlign = '';
    drawText(ctx, lane.name, startX - 44, ly + 14, {size:'8', color:lane.color, align:'right'});

    // 物理模型：匀减速 s = v0*t - ½*a*t²，停止时 s_max = v0²/(2a)
    var decel = lane.res * 45 + 3;   // 减速度 ∝ 阻力，最小3避免除零
    var stopTime = v0 / decel;
    var maxDist = (v0 * v0) / (2 * decel);

    var dist, stopped;
    if (params.phase === 0) {
      dist = 0; stopped = false;
    } else if (dt <= stopTime) {
      dist = v0 * dt - 0.5 * decel * dt * dt;
      stopped = false;
    } else {
      dist = maxDist; stopped = true;
    }

    var carX = startX + clamp(dist, 0, w - startX - 55);
    carStates.push({dist: dist, stopped: stopped, color: lane.color});

    // 小车
    var cw = 36, ch = 16;
    ctx.fillStyle = lane.color;
    drawRoundedRect(ctx, carX, ly - ch - 6, cw, ch, 4, lane.color, '');
    ctx.fillStyle = 'rgba(255,255,255,0.35)'; ctx.fillRect(carX + 4, ly - ch - 2, 18, 9);
    ctx.fillStyle = '#555';
    ctx.beginPath(); ctx.arc(carX + 9, ly - 6, 4, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(carX + 27, ly - 6, 4, 0, Math.PI*2); ctx.fill();

    // 运动中的速度箭头
    if (!stopped && dt > 0 && carX < w - 70) {
      var curV = Math.max(2, v0 - decel * dt);
      var arrLen = curV * 0.25;
      ctx.strokeStyle = lane.color; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(carX + cw + 3, ly - ch/2 - 6);
      ctx.lineTo(carX + cw + 3 + arrLen, ly - ch/2 - 6); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(carX + cw + 3 + arrLen, ly - ch/2 - 6);
      ctx.lineTo(carX + cw + 3 + arrLen - 5, ly - ch/2 - 10); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(carX + cw + 3 + arrLen, ly - ch/2 - 6);
      ctx.lineTo(carX + cw + 3 + arrLen - 5, ly - ch/2 - 2); ctx.stroke();
    }

    // 停车距离标记
    if (stopped) {
      ctx.setLineDash([3,3]); ctx.strokeStyle = lane.color; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(carX + cw/2, ly + 10); ctx.lineTo(carX + cw/2, ly + 24); ctx.stroke();
      ctx.setLineDash([]);
      drawText(ctx, 's='+(dist/3).toFixed(0)+'cm', carX + cw/2, ly + 30, {size:'9', align:'center', color:lane.color});
    }
  });

  // 顶部提示
  if (params.phase === 0) {
    var cd = Math.max(0, (1.5 - t)).toFixed(1);
    drawText(ctx, '▼ 三车即将从同一初速度同时滑下 ▼', w/2, groundY - 50, {size:'12', align:'center', color:'#e6a23c'});
    drawText(ctx, cd + 's', w/2, groundY - 68, {size:'20', bold:true, align:'center', color:'#f0883e'});
  } else {
    drawText(ctx, '初速度相同 → 阻力越大 → 停车越早 → 滑行距离越短', w/2, groundY - 48, {size:'11', align:'center', color:'#666'});
  }

  // 统一底栏面板
  var panelLines = [
    {text: '\u7ed3\u8bba\uff1a\u521d\u901f\u76f8\u540c \u2192 \u963b\u529b\u8d8a\u5927 \u2192 \u505c\u8f66\u8d8a\u65e9 \u2192 \u6ed1\u884c\u8d8a\u77ed', xOff: 12, yOff: 16, color: '#333', size: '11'}
  ];
  if (dt > 0) {
    for (var si = 0; si < 3; si++) {
      var st = carStates[si];
      var dCm = (st.dist / 3).toFixed(0);
      var suffix = st.stopped ? ' \u2705\u505c' : ' ...';
      // 停车后固定显示最终距离，运动中实时更新
      if (st.stopped && !params['final_s'+si]) params['final_s'+si] = dCm;
      var showD = (st.stopped && params['final_s'+si]) ? params['final_s'+si] : dCm;
      panelLines.push({text: (si+1)+': s='+showD+'cm'+suffix, xOff: 14 + si * 100, yOff: 34, color: st.color, size: '10', bold: !!st.stopped});
    }
  } else {
    panelLines.push({text: '\u963b\u529b\u8d8a\u5c0f\u2192\u6ed1\u884c\u8d8e\u8fdc \u2192 \u7406\u60f3\u65e0\u963b\u5219\u574f\u901f\u76f4\u7ebf\uff08\u725b\u987b\u7b2c\u4e00\u5b9a\u5f8b\uff09', xOff: 14, yOff: 34, color: '#3fb950', size: '11'});
  }
  drawExpPanel(ctx, w, h, panelLines, { panelY: 0.62 });
}

// ---- 4. 二力平衡条件 (balance) ----
function animBalance(ctx, w, h, t, params, data) {
  clearCanvas(ctx, w, h);
  drawText(ctx, '二力平衡条件', w/2, 22, {size:'17', bold:true, align:'center'});

  var cx = w/2, cy = h * 0.38;   // 上移中心位置避免被面板遮挡
  var boxW = 70, boxH = 50;

  // 木块——完全静止（平衡状态）
  var bobY = cy;
  ctx.fillStyle = '#daa520';
  drawRoundedRect(ctx, cx-boxW/2, bobY-boxH/2, boxW, boxH, 6, '#daa520', '#ffd700');
  drawText(ctx, '木块', cx, bobY+4, {size:'14', bold:true, align:'center', color:'#fff'});

  // F1 左侧力
  var f1Mag = 50;
  ctx.strokeStyle = '#4A90E2'; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.moveTo(cx-boxW/2, bobY); ctx.lineTo(cx-boxW/2-f1Mag, bobY); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(cx-boxW/2, bobY); ctx.lineTo(cx-boxW/2-f1Mag+10, bobY-8); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(cx-boxW/2, bobY); ctx.lineTo(cx-boxW/2-f1Mag+10, bobY+8); ctx.stroke();
  drawText(ctx, 'F₁=' + f1Mag + 'N', cx-boxW/2-f1Mag/2, bobY-16, {size:'13', bold:true, align:'center', color:'#4A90E2'});

  // F2 右侧力
  ctx.strokeStyle = '#f85149'; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.moveTo(cx+boxW/2, bobY); ctx.lineTo(cx+boxW/2+f1Mag, bobY); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(cx+boxW/2, bobY); ctx.lineTo(cx+boxW/2+f1Mag-10, bobY-8); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(cx+boxW/2, bobY); ctx.lineTo(cx+boxW/2+f1Mag-10, bobY+8); ctx.stroke();
  drawText(ctx, 'F₂=' + f1Mag + 'N', cx+boxW/2+f1Mag/2, bobY-16, {size:'13', bold:true, align:'center', color:'#f85149'});

  // G 向下力（重力）
  var gMag = 30;
  ctx.strokeStyle = '#a371f7'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(cx, bobY+boxH/2); ctx.lineTo(cx, bobY+boxH/2+gMag); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(cx, bobY+boxH/2+gMag); ctx.lineTo(cx-6, bobY+boxH/2+gMag-8); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(cx, bobY+boxH/2+gMag); ctx.lineTo(cx+6, bobY+boxH/2+gMag-8); ctx.stroke();
  drawText(ctx, 'G=' + gMag + 'N', cx + 28, bobY + boxH/2 + gMag/2, {size:'12', color:'#a371f7'});

  // N 向上力（支持力）
  ctx.strokeStyle = '#3fb950'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(cx, bobY-boxH/2); ctx.lineTo(cx, bobY-boxH/2-gMag); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(cx, bobY-boxH/2-gMag); ctx.lineTo(cx-6, bobY-boxH/2-gMag+8); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(cx, bobY-boxH/2-gMag); ctx.lineTo(cx+6, bobY-boxH/2-gMag+8); ctx.stroke();
  drawText(ctx, 'N=' + gMag + 'N', cx + 28, bobY - boxH/2 - gMag/2, {size:'12', color:'#3fb950'});

  // 统一底栏面板
  drawExpPanel(ctx, w, h, [
    {text: '\u2713 \u2460 \u5927\u5c0f\u76f8\u7b49', xOff: 16, yOff: 14, color: '#3fb950', size: '12', bold: true},
    {text: '\u2461 \u65b9\u5411\u76f8\u53cd', xOff: w * 0.26, yOff: 14, color: '#3fb950', size: '12', bold: true},
    {text: '\u2462 \u4f5c\u7528\u5728\u540c\u4e00\u76f4\u7ebf\u4e0a', xOff: 16, yOff: 32, color: '#3fb950', size: '12', bold: true},
    {text: '\u2463 \u4f5c\u7528\u5728\u540c\u4e00\u7269\u4f53\u4e0a', xOff: w * 0.26, yOff: 32, color: '#3fb950', size: '12', bold: true},
    {text: '\u6728\u5757\u9759\u6b62\u4e0d\u52a8 \u2192 \u5e73\u8861\u72b6\u6001', xOff: 0, yOff: 50, color: '#f0883e', size: '12', bold: true}
  ], { panelY: 0.56, hideButtons: true });
}

// ---- 5. 摩擦力 (friction) ----
function animFriction(ctx, w, h, t, params, data) {
  clearCanvas(ctx, w, h);
  drawParticles(ctx, w, h, t, 16, 'rgba(240,136,62,ALPHA)', 0.04);

  // 状态机：0=准备倒计时 1=拉动中 2=已停止
  if (params.phase === undefined) { params.phase = 0; params.releaseT = 0; }
  if (params.phase === 0 && t > 1.5) { params.phase = 1; params.releaseT = t; }

  drawText(ctx, '影响滑动摩擦力的因素', w/2, 20, {size:'16', bold:true, align:'center'});

  var groundY = h * 0.52;
  ctx.fillStyle = '#e8eef3'; ctx.fillRect(0, groundY, w, h - groundY);
  ctx.strokeStyle='#c0c8d0'; ctx.lineWidth=2;
  ctx.beginPath(); ctx.moveTo(0, groundY); ctx.lineTo(w, groundY); ctx.stroke();

  // 粗糙面纹理
  ctx.strokeStyle = '#ccc'; ctx.lineWidth = 1;
  for (var ti = 10; ti < w; ti += 18) {
    ctx.beginPath(); ctx.moveTo(ti, groundY+1); ctx.lineTo(ti+6, groundY+6); ctx.stroke();
  }

  var startX1 = w * 0.12, startX2 = w * 0.54;
  var travelDist = w * 0.32;

  // 统一时间
  var dt = params.phase >= 1 ? (t - params.releaseT) : 0;

  // 两木块参数：轻物 vs 重物(加砝码)
  var cars = [
    { bw: 50, bh: 32, label: '轻物', color: '#daa520', darkColor: '#8B6914',
      pressure: 15, fricForce: 15 * 0.35, yOff: -18 },
    { bw: 55, bh: 44, label: '重物', color: '#a0522d', darkColor: '#6B4423',
      pressure: 30, fricForce: 30 * 0.35, yOff: 0, hasWeight: true }
  ];

  var carStates = [];

  cars.forEach(function(car, ci) {
    var ly = groundY + car.yOff;
    var sx = ci === 0 ? startX1 : startX2;
    var moveDuration = 4.0;

    var progress = 0, moving = false, stopped = false;
    if (params.phase >= 1 && dt <= moveDuration) {
      var rawP = dt / moveDuration;
      progress = rawP < 0.15 ? Math.pow(rawP / 0.15, 2) * 0.15 :
                (rawP - 0.15) / 0.85 * 0.85 + 0.15;
      moving = true;
    } else if (dt > moveDuration) {
      progress = 1; stopped = true;
    }
    progress = clamp(progress, 0, 1);

    var curX = sx + progress * travelDist;
    carStates.push({x: curX, moving: moving, stopped: stopped,
      fricF: car.fricForce, pressure: car.pressure});

    // 跑道背景
    ctx.fillStyle = 'rgba(200,210,220,0.25)';
    ctx.fillRect(sx - 8, ly - 2, travelDist + 16, 4);
    // 起点标记线
    if (progress > 0 || dt < 0.05) {
      ctx.setLineDash([3,3]); ctx.strokeStyle='#aaa'; ctx.lineWidth=1;
      ctx.beginPath(); ctx.moveTo(sx, ly-car.bh-12); ctx.lineTo(sx, ly + 14); ctx.stroke();
      ctx.setLineDash([]);
    }

    // 木块
    drawRoundedRect(ctx, curX - car.bw/2, ly - car.bh, car.bw, car.bh, 4, car.darkColor, car.color);
    drawText(ctx, car.label, curX, ly - car.bh + (car.hasWeight?14:22),
      {size:'11', align:'center', color:'#fff', bold:true});
    // 砝码
    if (car.hasWeight) {
      ctx.fillStyle='#999';
      drawRoundedRect(ctx, curX-14, ly-car.bh-13, 28, 11, 3, '#888', '#bbb');
      drawText(ctx, '砝码', curX, ly-car.bh-7, {size:'9', align:'center', color:'#fff'});
    }

    // 弹簧测力计
    var springTop = ly - car.bh/2;
    var springLen = 20 + (moving ? car.fricForce * 2.5 : 14);
    var ssX = curX - car.bw/2 - 6;
    var seX = ssX - springLen;

    ctx.strokeStyle = car.color; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(ssX, springTop);
    for (var si = 0; si < 7; si++) {
      var ssy = springTop + (si % 2 === 0 ? -4 : 4);
      var ssx = ssX - (si + 1) * (springLen / 7);
      ctx.lineTo(ssx, ssy);
    }
    ctx.lineTo(seX, springTop); ctx.stroke();

    // 表壳
    ctx.fillStyle = '#fff';
    ctx.fillRect(seX - 16, springTop - 12, 32, 24);
    ctx.strokeStyle = '#ddd'; ctx.lineWidth=1; ctx.strokeRect(seX - 16, springTop - 12, 32, 24);
    // 指针
    var nOff = moving ? car.fricForce * 0.45 : 2;
    ctx.fillStyle = car.color;
    ctx.fillRect(seX - 2, springTop - 10 + nOff, 4, 10);
    // 刻度
    ctx.strokeStyle='#bbb'; ctx.lineWidth=0.5;
    for(var ki=0; ki<=4; ki++){
      var ky = springTop - 10 + ki*5;
      ctx.beginPath(); ctx.moveTo(seX-12,ky); ctx.lineTo(seX-8,ky); ctx.stroke();
    }

    // 手柄拉力动画
    if (moving) {
      ctx.strokeStyle = car.color; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(seX, springTop); ctx.lineTo(seX - 18, springTop); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(seX-18,springTop); ctx.lineTo(seX-12,springTop-5); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(seX-18,springTop); ctx.lineTo(seX-12,springTop+5); ctx.stroke();
      ctx.font = '11px sans-serif'; ctx.textAlign='center';
      ctx.fillText('\u270b', seX - 26, springTop + 4); ctx.textAlign='';
    } else if (stopped) {
      drawText(ctx, '\u2705\u505c', seX - 8, springTop + 18, {size:'9', align:'center', color:'#3fb950'});
    }

    // 力标注
    drawText(ctx, 'f=' + car.fricForce.toFixed(1) + 'N', curX, ly + 16,
      {size:'10', align:'center', color:'#f0883e', bold:true});
    drawText(ctx, 'N=' + car.pressure + 'N', curX, ly + 28,
      {size:'9', align:'center', color:'#a371f7'});
  });

  // 顶部提示
  if (params.phase === 0) {
    drawText(ctx, '\u25bc \u62c9\u52a8\u4e24\u4e2a\u6728\u5757\u5728\u7c97\u7cd9\u9762\u6ed1\u884c \u25bc',
      w/2, groundY - 38, {size:'11', align:'center', color:'#e6a23c'});
    drawText(ctx, Math.max(0, 1.5-t).toFixed(1) + 's',
      w/2, groundY - 54, {size:'18', bold:true, align:'center', color:'#f0883e'});
  } else if (carStates.length > 0 && carStates[0].moving) {
    drawText(ctx, '\u574d\u901f\u6ed1\u884c \u2192 \u62c9\u529bF = \u6469\u64e6\u529bf',
      w/2, groundY - 38, {size:'11', align:'center', color:'#666'});
  } else if (carStates.length > 0) {
    drawText(ctx, '\u53cd\u5e94\uff1a\u538b\u529b\u5927 \u2192 \u6469\u64e6\u529b\u5927 \u2192 \u62c9\u52a8\u6240\u9700\u529b\u5927',
      w/2, groundY - 38, {size:'11', align:'center', color:'#3fb950'});
  }

  // 底栏面板
  var st0 = carStates[0] || {}, st1 = carStates[1] || {};
  var pLines = [
    {text: '\u516c\u5f0f\uff1af = \u03bc \u00d7 N  (\u03bc=\u6469\u64e6\u7cfb\u6570)',
      xOff: 12, yOff: 14, color: '#f0883e', size: '12', bold: true}
  ];
  if (dt > 0 && carStates.length > 0) {
    pLines.push(
      {text: '\u8f7b\u7269: N='+st0.pressure+'N f='+st0.fricF.toFixed(1)+'N',
        xOff: 12, yOff: 32, color: '#daa520', size: '11'},
      {text: '\u91cd\u7269: N='+st1.pressure+'N f='+st1.fricF.toFixed(1)+'N (\u786e\u65b9\u7801)',
        xOff: 12, yOff: 48, color: '#a0522d', size: '11'}
    );
  } else {
    pLines.push({
      text: '\u63a5\u89e6\u9762\u7c97\u7cd9\u76f8\u540c\u65f6\uff0c\u538b\u529b\u8d8a\u5927 \u2192 \u6ed1\u52a8\u6469\u64e6\u529b\u8d8a\u5927',
      xOff: 12, yOff: 34, color: '#333', size: '12'}
    );
  }
  drawExpPanel(ctx, w, h, pLines, { panelY: 0.56 });
}

function drawSpringForce(ctx, x, y, len, col, label) {
  ctx.strokeStyle = col; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(x, y);
  for(var i=0;i<6;i++){var sy=y-(i+1)*len/6;var sx=x+(i%2?-5:5);ctx.lineTo(sx,sy);}
  ctx.lineTo(x,y-len);ctx.stroke();
  // 拉环
  ctx.beginPath();ctx.arc(x,y-len,6,0,Math.PI*2);ctx.strokeStyle=col;ctx.lineWidth=2;ctx.stroke();
  // 手拉箭头
  ctx.strokeStyle=col;ctx.lineWidth=3;
  ctx.beginPath();ctx.moveTo(x,y-len-8);ctx.lineTo(x,y-len-28);ctx.stroke();
  ctx.beginPath();ctx.moveTo(x,y-len-28);ctx.lineTo(x-5,y-len-22);ctx.stroke();
  ctx.beginPath();ctx.moveTo(x,y-len-28);ctx.lineTo(x+5,y-len-22);ctx.stroke();
  // 标签
  var lines=label.split('\n');
  lines.forEach(function(l,i){drawText(ctx,l,x+len+12,y-len/2+i*14,{size:'11',color:col});});
}

// ---- 6. 压强 (pressure) ----
function animPressure(ctx, w, h, t, params, data) {
  clearCanvas(ctx, w, h);
  drawParticles(ctx, w, h, t, 14, 'rgba(163,113,247,ALPHA)', 0.04);

  // 状态机：0=准备 1=下落中 2=已着陆
  if (params.phase === undefined) { params.phase = 0; params.releaseT = 0; }
  if (params.phase === 0 && t > 1.2) { params.phase = 1; params.releaseT = t; }

  drawText(ctx, '探究压力的作用效果  p = F/S', w/2, 20, {size:'16', bold:true, align:'center'});

  var sandY = h * 0.50;
  // 海绵/沙面（渐变质感）
  var sandGrad = ctx.createLinearGradient(0, sandY, 0, h);
  sandGrad.addColorStop(0, '#d4b896');
  sandGrad.addColorStop(0.3, '#c4a574');
  sandGrad.addColorStop(1, '#a88c5e');
  ctx.fillStyle = sandGrad;
  ctx.fillRect(0, sandY, w, h - sandY);
  // 沙面顶部高光线
  ctx.strokeStyle = 'rgba(255,250,230,0.4)'; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(0, sandY); ctx.lineTo(w, sandY); ctx.stroke();

  // 两块砖的参数
  var bricks = [
    { x: w * 0.28, bw: 22, bh: 52, color: '#8B5CF6', dark: '#7C3AED',
      label: '竖放', subLabel: 'S小 → p大', targetSink: 16, yOff: -12 },
    { x: w * 0.72, bw: 54, bh: 22, color: '#3B82F6', dark: '#2563EB',
      label: '平放', subLabel: 'S大 → p小', targetSink: 5, yOff: 12 }
  ];

  var dt = params.phase >= 1 ? (t - params.releaseT) : 0;

  bricks.forEach(function(bk, bi) {
    var dropH = 90;       // 下落高度
    var landT = 0.65;      // 落地时间(s)
    var settleT = 1.8;      // 完全稳定时间(s)

    var startY = sandY - bk.bh - dropH;
    var curY, sinkAmt = 0, phaseText = '';

    if (params.phase === 0) {
      curY = startY;   // 准备阶段悬空
      phaseText = '\u25bc \u9488\u5bf9\u6027\u5b9e\u9a8c\uff1a\u7816\u5757\u81ea\u7531\u843d\u4f53 \u25bc';
    } else if (dt <= landT) {
      // 自由落体加速：s = ½gt²
      var fallP = Math.pow(dt / landT, 1.8); // 略非线性更有动感
      curY = startY + fallP * dropH;
      phaseText = '\ud83d\udca8 \u4e0b\u843d\u4e2d...';
    } else if (dt <= settleT) {
      // 缓慢下沉+弹跳阻尼
      var settleP = (dt - landT) / (settleT - landT);
      // 弹性压缩曲线：先快速下沉后缓慢到位
      var compressEase = 1 - Math.pow(1 - settleP, 3);
      curY = sandY - bk.bh;
      sinkAmt = bk.targetSink * compressEase;
      curY += sinkAmt;
      phaseText = settleP < 0.6 ? '\ud83e\udde0 \u538b\u7f29\u4e2d...' : '\u2705 \u7a33\u5b9a';
    } else {
      curY = sandY - bk.bh + bk.targetSink;
      sinkAmt = bk.targetSink;
      phaseText = '\u2705 \u7a33\u5b9a';
    }

    // 绘制陷坑（有下沉时才显示）
    if (sinkAmt > 0.5 || (dt > landT && dt <= settleT)) {
      var showSink = sinkAmt > 0 ? sinkAmt : bk.targetSink * ((dt - landT) / (settleT - landT));
      ctx.fillStyle = '#a08058';
      ctx.beginPath();
      var hw = bk.bw / 2 + 10;
      ctx.moveTo(bk.x - hw, sandY);
      ctx.quadraticCurveTo(bk.x, sandY + showSink + 4, bk.x + hw, sandY);
      ctx.lineTo(bk.x + hw, sandY + 2);
      ctx.quadraticCurveTo(bk.x, sandY + showSink + 1, bk.x - hw, sandY + 2);
      ctx.closePath();
      ctx.fill();
    }

    // 砖块（带渐变和阴影）
    var bx = bk.x - bk.bw / 2;
    // 阴影
    if (sinkAmt > 1 || dt > landT) {
      var shOff = Math.min(sinkAmt || 2, bk.targetSink);
      ctx.fillStyle = 'rgba(0,0,0,0.15)';
      ctx.fillRect(bx + 3, curY + 3, bk.bw, bk.bh);
    }
    // 砖体渐变
    var brickG = ctx.createLinearGradient(bx, curY, bx + bk.bw, curY + bk.bh);
    brickG.addColorStop(0, bk.color);
    brickG.addColorStop(0.5, bk.dark);
    brickG.addColorStop(1, shadeColor(bk.color, -15));
    ctx.fillStyle = brickG;
    drawRoundedRect(ctx, bx, curY, bk.bw, bk.bh, 3, bk.dark, bk.color);
    // 砖块顶边高光
    ctx.fillStyle = 'rgba(255,255,255,0.18)';
    ctx.fillRect(bx + 2, curY + 2, bk.bw - 4, 3);

    // 标签
    drawText(ctx, bk.label, bk.x, curY + bk.bh / 2,
      {size:'12', bold:true, align:'center', color:'#fff'});

    // 压强数值标注（着陆后显示）
    if (dt > landT + 0.2) {
      var pVal = bi === 0 ? '\u5927' : '\u5c0f';
      var pCol = bi === 0 ? '#f85149' : '#3fb950';
      var sVal = bi === 0 ? bk.bw : bk.bw;
      drawText(ctx, 'p=' + pVal, bk.x, curY + bk.bh + 12,
        {size:'11', bold:true, align:'center', color:pCol});
      drawText(ctx, 'S=' + bk.bw, bk.x, curY + bk.bh + 26,
        {size:'9', align:'center', color:'#888'});
    }

    // 下落速度箭头
    if (dt > 0 && dt <= landT) {
      var spd = dt / landT;
      ctx.strokeStyle = bk.color; ctx.lineWidth = 2;
      ctx.globalAlpha = 0.6 - spd * 0.3;
      ctx.beginPath(); ctx.moveTo(bk.x, curY + bk.bh + 4);
      ctx.lineTo(bk.x, curY + bk.bh + 18 + spd * 12); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(bk.x, curY + bk.bh + 18 + spd * 12);
      ctx.lineTo(bk.x - 5, curY + bk.bh + 13 + spd * 12); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(bk.x, curY + bk.bh + 18 + spd * 12);
      ctx.lineTo(bk.x + 5, curY + bk.bh + 13 + spd * 12); ctx.stroke();
      ctx.globalAlpha = 1;
    }
  });

  // 顶部提示（仅准备和运动阶段）
  if (params.phase === 0) {
    var cd = Math.max(0, 1.2 - t).toFixed(1);
    drawText(ctx, phaseText, w/2, sandY - 140, {size:'11', align:'center', color:'#e6a23c'});
    drawText(ctx, cd + 's', w/2, sandY - 156, {size:'18', bold:true, align:'center', color:'#f0883e'});
  } else if (dt > 0 && dt <= landT + 0.1) {
    drawText(ctx, phaseText, w/2, sandY - 130, {size:'12', align:'center', color:'#666'});
  } else if (dt > landT + 0.1 && dt <= settleT) {
    drawText(ctx, phaseText, w/2, sandY - 130, {size:'12', align:'center', color:'#3fb950'});
  } else {
    drawText(ctx, '\u53cd\u5e94\uff1aF\u76f8\u540c \u2192 S\u8d8a\u5c0f \u2192 p\u8d8a\u5927 \u21942 \u968b\u4e00\u5757\u7816',
      w/2, sandY - 130, {size:'11', align:'center', color:'#8B5CF6'});
  }

  // 底栏面板
  var showData = dt > landT + 0.3;
  var plines = [
    {text: '\u538b\u5f3a\u516c\u5f0f\uff1ap = F/S', xOff: 12, yOff: 14,
      color: '#8B5CF6', size: '13', bold: true}
  ];
  if (showData) {
    plines.push(
      {text: '\u7ad6\u653e: S=\u5c0f \u2192 \u968b\u6df1(16mm) \u2192 p\u5927',
        xOff: 12, yOff: 32, color: '#8B5CF6', size: '11'},
      {text: '\u5e73\u653e: S\u5927 \u2192 \u968b\u6d45(5mm)  \u2192 p\u5c0f',
        xOff: 12, yOff: 48, color: '#3B82F6', size: '11'}
    );
  } else {
    plines.push(
      {text: '\u538c\u529b\u4e00\u5b9a\u65f6\uff0c\u53d7\u529b\u9762\u79ef\u8d8a\u5c0f \u2192 \u538b\u5f3a\u8d8a\u5927',
        xOff: 12, yOff: 34, color: '#333', size: '12'},
      {text: '\u5e94\u7528\uff1a\u56fe\u9489/\u5200\u5203/\u5766\u514b\u5c45\u5e26/\u4e66\u5305\u5bbd\u5e26',
        xOff: 12, yOff: 52, color: '#888', size: '10'}
    );
  }
  drawExpPanel(ctx, w, h, plines, { panelY: 0.55, hideButtons: true });
}


// ---- 7. 液体内部压强特点 (liquid_p) ----

function animLiquidPressure(ctx, w, h, t, params, data) {
  clearCanvas(ctx, w, h);
  drawParticles(ctx, w, h, t, 12, 'rgba(56,139,253,ALPHA)', 0.03);

  // 状态机：0=准备/倒计时 1=小球下落 2=液面变化 3=稳定展示
  if (params.phase === undefined) { params.phase = 0; params.startT = t; }
  if (params.phase === 0 && t > params.startT + 1.2) { params.phase = 1; params.startT = t; }
  
  var dt = t - params.startT;
  
  drawText(ctx, '液体内部压强特点', w/2, 20, {size:'16', bold:true, align:'center'});

  // 容器参数
  var tankX = w * 0.18, tankW = w * 0.38, tankH = h * 0.50;
  var tankY = h * 0.18;
  var waterLevel = tankH * 0.88;
  var bottomY = tankY + tankH;

  // 绘制容器（带渐变和立体感）
  ctx.fillStyle = 'rgba(200,220,240,0.15)';
  ctx.fillRect(tankX-4, tankY-4, tankW+8, tankH+8);
  
  ctx.strokeStyle = '#7a9cc6'; ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(tankX-2, tankY+8); ctx.lineTo(tankX, tankY);
  ctx.lineTo(tankX+tankW, tankY);
  ctx.lineTo(tankX+tankW+2, tankY+8);
  ctx.stroke();
  
  ctx.strokeStyle = '#5a7a96'; ctx.lineWidth = 2.5;
  ctx.strokeRect(tankX, tankY, tankW, tankH);

  // 水（渐变）
  var waterGrad = ctx.createLinearGradient(tankX, bottomY-waterLevel, tankX, bottomY-2);
  waterGrad.addColorStop(0, 'rgba(100,180,255,0.45)');
  waterGrad.addColorStop(0.5, 'rgba(56,139,253,0.65)');
  waterGrad.addColorStop(1, 'rgba(30,100,200,0.80)');
  ctx.fillStyle = waterGrad;
  ctx.fillRect(tankX+2, bottomY-waterLevel, tankW-4, waterLevel-2);

  // 水面波纹
  ctx.strokeStyle = 'rgba(135,206,250,0.6)'; ctx.lineWidth = 1.2;
  for(var wi=0; wi<5; wi++){
    var wy = bottomY-waterLevel + wi*(waterLevel/5) + 3;
    ctx.beginPath(); 
    ctx.moveTo(tankX+6, wy+Math.sin(t*2.2+wi*0.8)*2);
    ctx.quadraticCurveTo(tankX+tankW/2, wy+Math.sin(t*2.2+wi*0.8+1)*3.5, tankX+tankW-6, wy+Math.sin(t*2.2+wi*0.8+2)*2);
    ctx.stroke();
  }

  // 三个深度配置
  var depths = [
    { ratio: 0.28, color: '#3fb950', name: '浅', label: 'h₁' },
    { ratio: 0.52, color: '#f0883e', name: '中', label: 'h₂' },
    { ratio: 0.78, color: '#f85149', name: '深', label: 'h₃' }
  ];

  depths.forEach(function(d, di) {
    var targetY = bottomY - d.ratio * waterLevel;
    var ballX = tankX + tankW * (0.25 + di * 0.26);
    
    // U形管压强计位置
    var tubeX = tankX + tankW + 30 + di * 62;
    var tubeW = 16;
    var tubeHBase = 70;
    var tubeH = tubeHBase + d.ratio * 35;
    var tubeTopY = targetY - 15;
    var tubeBotY = tubeTopY + tubeH;

    // 小球状态（下落动画）
    var startY = tankY - 20;
    var currentBallY = startY;
    var ballVisible = true;
    var splashAlpha = 0;
    
    if (params.phase >= 1) {
      var fallDelay = di * 0.7; // 错开下落时间
      var fallDt = dt - fallDelay;
      var fallDuration = 0.65;
      
      if (fallDt <= 0) {
        currentBallY = startY;
        ballVisible = di === 0 || (params.phase === 1 && dt > (di-1)*0.7);
        if (!ballVisible && di > 0) ballVisible = false;
      } else if (fallDt < fallDuration) {
        // 下落中 - 使用缓动
        var progress = fallDt / fallDuration;
        var easeP = 1 - Math.pow(1-progress, 2.5); // 缓出
        currentBallY = startY + (targetY - startY) * easeP;
        
        // 进入水中时产生水花
        if (currentBallY > bottomY - waterLevel) {
          splashAlpha = Math.min(1, (currentBallY - (bottomY-waterLevel)) / 15) * (1 - progress);
        }
      } else {
        // 已到达目标深度
        currentBallY = targetY;
        if (fallDt < fallDuration + 0.35) {
          splashAlpha = 1 - (fallDt - fallDuration) / 0.35;
        }
      }
      
      // 还没轮到的小球隐藏在顶部
      if (di > 0 && dt < (di)*0.7 - 0.05) {
        ballVisible = false;
      }
    }

    // 液面差动画
    var maxDeltaH = d.ratio * tubeH * 0.42; // 最大液面差
    var currentDeltaH = 0;
    if (params.phase === 0) {
      currentDeltaH = 0;
    } else if (params.phase === 1) {
      // 小球到达后开始变化
      var arrivalTime = 0.65 + di * 0.7;
      if (dt > arrivalTime) {
        var changeDt = dt - arrivalTime;
        var changeDur = 1.0;
        currentDeltaH = changeDt < changeDur ? 
          (1 - Math.pow(1 - Math.min(1, changeDt/changeDur), 3)) * maxDeltaH : 
          maxDeltaH;
      }
    } else {
      currentDeltaH = maxDeltaH;
    }

    // ---- 绘制U形管压强计 ----
    // 管壁
    ctx.strokeStyle = d.color; ctx.lineWidth = 2;
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.fillRect(tubeX-1, tubeTopY, tubeW+2, tubeH);
    ctx.strokeRect(tubeX, tubeTopY, tubeW, tubeH);

    // 液体
    var baseLiquidH = tubeH * 0.38;
    var leftLiquidH = baseLiquidH + currentDeltaH;
    var rightLiquidH = baseLiquidH - currentDeltaH;
    
    ctx.fillStyle = d.color+'bb';
    ctx.fillRect(tubeX+2, tubeBotY-leftLiquidH, 5, leftLiquidH);
    ctx.fillRect(tubeX+tubeW-7, tubeBotY-rightLiquidH, 5, rightLiquidH);

    // 液面高亮线
    if (currentDeltaH > 1) {
      ctx.setLineDash([2,2]); ctx.strokeStyle = d.color+'88'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(tubeX-4, tubeBotY-leftLiquidH); ctx.lineTo(tubeX+tubeW+4, tubeBotY-leftLiquidH); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(tubeX-4, tubeBotY-rightLiquidH); ctx.lineTo(tubeX+tubeW+4, tubeBotY-rightLiquidH); ctx.stroke();
      ctx.setLineDash([]);
    }

    // Δh 标注
    if (currentDeltaH > 3) {
      ctx.strokeStyle = d.color+'99'; ctx.lineWidth = 1;
      // 左侧标注线
      ctx.beginPath(); ctx.moveTo(tubeX+tubeW+5, tubeBotY-leftLiquidH); ctx.lineTo(tubeX+tubeW+14, tubeBotY-leftLiquidH); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(tubeX+tubeW+5, tubeBotY-rightLiquidH); ctx.lineTo(tubeX+tubeW+14, tubeBotY-rightLiquidH); ctx.stroke();
      // 竖线连接
      ctx.beginPath(); ctx.moveTo(tubeX+tubeW+10, tubeBotY-leftLiquidH); ctx.lineTo(tubeX+tubeW+10, tubeBotY-rightLiquidH); ctx.stroke();
      
      drawText(ctx, 'Δh', tubeX+tubeW+17, tubeBotY-(leftLiquidH+rightLiquidH)/2, {size:'9', align:'center', color:d.color});
    }

    // 连接软管（虚线）
    ctx.strokeStyle = '#8899aa'; ctx.lineWidth = 1.2; ctx.setLineDash([4,2]);
    ctx.beginPath();
    ctx.moveTo(ballX + 9, Math.min(currentBallY, targetY));
    ctx.quadraticCurveTo(tubeX - 8, (currentBallY + tubeTopY)/2, tubeX, tubeBotY - tubeH*0.55);
    ctx.stroke();
    ctx.setLineDash([]);

    // ---- 绘制小球 ----
    if (ballVisible && currentBallY >= tankY - 25) {
      // 小球阴影
      ctx.fillStyle = 'rgba(0,0,0,0.15)';
      ctx.beginPath(); ctx.ellipse(ballX+2, currentBallY+3, 7, 3, 0, 0, Math.PI*2); ctx.fill();

      // 小球本体
      var ballGrad = ctx.createRadialGradient(ballX-2, currentBallY-2, 1, ballX, currentBallY, 9);
      ballGrad.addColorStop(0, lightenColor(d.color, 40));
      ballGrad.addColorStop(0.7, d.color);
      ballGrad.addColorStop(1, darkenColor(d.color, 25));
      ctx.fillStyle = ballGrad;
      ctx.beginPath(); ctx.arc(ballX, currentBallY, 8, 0, Math.PI*2); ctx.fill();
      ctx.strokeStyle = darkenColor(d.color, 30); ctx.lineWidth = 0.8; ctx.stroke();

      // 水花效果
      if (splashAlpha > 0.05 && currentBallY > bottomY - waterLevel - 5) {
        ctx.fillStyle = 'rgba(150,200,255,' + (splashAlpha*0.7).toFixed(2) + ')';
        for(var si=0; si<5; si++) {
          var sa = si * Math.PI*2/5 + t*8;
          var sr = 4 + splashAlpha * 8;
          var sx = ballX + Math.cos(sa) * sr;
          var sy = currentBallY + Math.sin(sa) * sr * 0.5;
          ctx.beginPath(); ctx.arc(sx, sy, 2+splashAlpha*2, 0, Math.PI*2); ctx.fill();
        }
      }
    }

    // 深度标注线
    if (params.phase >= 2 || (params.phase === 1 && dt > 0.65 + di * 0.7 + 0.5)) {
      // 从水面到小球的深度虚线
      var surfaceY = bottomY - waterLevel;
      ctx.setLineDash([3,3]); ctx.strokeStyle = d.color+'77'; ctx.lineWidth = 0.8;
      ctx.beginPath(); ctx.moveTo(ballX + 14, surfaceY); ctx.lineTo(ballX + 14, currentBallY); ctx.stroke();
      ctx.setLineDash([]);
      
      // 深度文字
      drawText(ctx, d.label, ballX + 22, (surfaceY + currentBallY)/2, {size:'10', color:d.color, bold:true});
      
      // 压强值
      var pValue = (d.ratio * 1000).toFixed(0);
      drawText(ctx, 'p=' + pValue + 'Pa', tubeX + tubeW/2, tubeBotY + 14, {size:'9', align:'center', color:d.color});
    }
  });

  // 深度参考标尺
  var scaleLeft = tankX - 8;
  ctx.strokeStyle = '#99aabb'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(scaleLeft, bottomY-waterLevel); ctx.lineTo(scaleLeft, bottomY-5); ctx.stroke();
  // 刻度
  for(var ki=0; ki<5; ki++){
    var ky = bottomY - waterLevel + (waterLevel/5)*ki;
    ctx.beginPath(); ctx.moveTo(scaleLeft-4, ky); ctx.lineTo(scaleLeft, ky); ctx.stroke();
  }
  drawText(ctx, '深度↓', scaleLeft-4, bottomY-waterLevel-8, {size:'8', color:'#888', align:'center'});

  // 结论面板
  var showFullConclusion = params.phase >= 2 || (params.phase === 1 && dt > 4.5);
  var panelLines = [];
  
  if (!showFullConclusion) {
    panelLines.push({text: '正在演示液体内部压强...', xOff: 14, yOff: 16, color: '#888', size: '11'});
  } else {
    panelLines.push(
      {text: '液体内部压强特点:', xOff: 14, yOff: 13, color: '#444', size: '12', bold: true},
      {text: '\u2460 同一深度，液体向各个方向的压强相等', xOff: 14, yOff: 29, color: '#3fb950', size: '10'},
      {text: '\u2461 同种液体，深度越深，压强越大 (\u0394h\u2191 \u2192 P\u2191)', xOff: 14, yOff: 43, color: '#f0883e', size: '10'},
      {text: '\u2462 不同液体，密度越大，压强越大  \u2463 p = \u03c1gh', xOff: 14, yOff: 57, color: '#f85149', size: '10'}
    );
  }
  
  drawExpPanel(ctx, w, h, panelLines, { panelY: 0.74 });
}

// ---- 8. 流体压强与流速 (flow_p/伯努利原理) ----

function animFluidPressure(ctx, w, h, t, params, data) {
  clearCanvas(ctx, w, h);
  drawParticles(ctx, w, h, t, 14, 'rgba(74,144,226,ALPHA)', 0.03);

  drawText(ctx, '流体压强与流速的关系（伯努利原理）', w/2, 20, {size:'15', bold:true, align:'center'});

  var pipeY = h * 0.38;
  var pipeH = 56;

  // 管道背景填充
  ctx.fillStyle = 'rgba(240,245,250,0.5)';
  ctx.fillRect(w*0.07, pipeY-pipeH/2-4, w*0.86, pipeH+8);

  // 管道轮廓 - 中间窄两头宽（渐缩管）
  ctx.strokeStyle = '#6a8caa'; ctx.lineWidth = 2.5;
  // 上壁
  ctx.beginPath();
  ctx.moveTo(w*0.07, pipeY-pipeH/2);
  ctx.lineTo(w*0.35, pipeY-pipeH/2);
  ctx.lineTo(w*0.50, pipeY-pipeH/2-16); // 收窄段
  ctx.lineTo(w*0.65, pipeY-pipeH/2-16);
  ctx.lineTo(w*0.93, pipeY-pipeH/2);
  ctx.stroke();
  // 下壁
  ctx.beginPath();
  ctx.moveTo(w*0.07, pipeY+pipeH/2);
  ctx.lineTo(w*0.35, pipeY+pipeH/2);
  ctx.lineTo(w*0.50, pipeY+pipeH/2+16); // 收宽段
  ctx.lineTo(w*0.65, pipeY+pipeH/2+16);
  ctx.lineTo(w*0.93, pipeY+pipeH/2);
  ctx.stroke();

  // 入口/出口箭头指示
  ctx.fillStyle = '#8899aa';
  ctx.beginPath(); ctx.moveTo(w*0.03, pipeY); ctx.lineTo(w*0.08, pipeY-6); ctx.lineTo(w*0.08, pipeY+6); ctx.fill();
  ctx.beginPath(); ctx.moveTo(w*0.97, pipeY); ctx.lineTo(w*0.92, pipeY-6); ctx.lineTo(w*0.92, pipeY+6); ctx.fill();
  drawText(ctx, '入口', w*0.055, pipeY+18, {size:'9', color:'#888', align:'center'});
  drawText(ctx, '出口', w*0.945, pipeY+18, {size:'9', color:'#888', align:'center'});

  // 三段管道参数：宽→窄→宽，流速 快→慢→快？不对，是 慢→快→慢
  var sections = [
    { x: w*0.07, xEnd: w*0.35, cx: w*0.21, speed: 1.0, color: '#4A90E2', name: '宽段', pressure: '大' },
    { x: w*0.50, xEnd: w*0.65, cx: w*0.575, speed: 2.8, color: '#f0883e', name: '窄段', pressure: '小' },
    { x: w*0.65, xEnd: w*0.93, cx: w*0.79, speed: 1.0, color: '#4A90E2', name: '宽段', pressure: '大' }
  ];

  sections.forEach(function(sec, si) {
    var secW = sec.xEnd - sec.x;
    
    // 流体粒子（带尾迹效果）
    var particleCount = si === 1 ? 7 : 5;
    for (var pi = 0; pi < particleCount; pi++) {
      var baseX = sec.x + ((t * sec.speed * 70 + pi * secW / particleCount) % secW);
      var py = pipeY + (si === 1 ? 0 : 0) + Math.sin(t * 3.5 + pi * 1.2 + si) * 4;
      
      // 主粒子
      ctx.fillStyle = sec.color + 'dd';
      ctx.beginPath(); ctx.arc(baseX, py, si === 1 ? 3.5 : 3, 0, Math.PI * 2); ctx.fill();

      // 尾迹（速度越快尾迹越长）
      if (sec.speed > 1.5) {
        for (var ti = 1; ti <= 3; ti++) {
          var trailX = baseX - ti * sec.speed * 3;
          if (trailX > sec.x) {
            ctx.fillStyle = sec.color + (30 - ti * 8).toString(16).padStart(2,'0');
            ctx.beginPath(); ctx.arc(trailX, py, 3.5 - ti * 0.6, 0, Math.PI * 2); ctx.fill();
          }
        }
      }
    }

    // U形管压强计（在管道下方）
    var uy = pipeY + pipeH / 2 + 22;
    var uDiff = si === 1 ? 10 : 26; // 窄处流速大→压强小→液面差小
    var tubeCx = sec.cx;
    var tubeW = 13;

    // U形管外框
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.fillRect(tubeCx - tubeW/2 - 1, uy, tubeW + 2, uDiff * 2 + 4);
    ctx.strokeStyle = sec.color; ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(tubeCx - tubeW/2, uy);
    ctx.lineTo(tubeCx - tubeW/2, uy + uDiff * 2 + 4);
    ctx.lineTo(tubeCx + tubeW/2, uy + uDiff * 2 + 4);
    ctx.lineTo(tubeCx + tubeW/2, uy);
    ctx.stroke();

    // 液柱（左高右低表示左侧受压更大）
    ctx.fillStyle = sec.color + 'aa';
    ctx.fillRect(tubeCx - tubeW/2 + 1, uy + uDiff * 2 + 4 - uDiff - 3, 4, uDiff);
    ctx.fillRect(tubeCx + tubeW/2 - 5, uy + uDiff * 2 + 4 - uDiff/3 - 2, 4, uDiff/3);

    // 标注文字
    drawText(ctx, sec.name, tubeCx, uy + uDiff * 2 + 12, { size:'9', align:'center', color:sec.color, bold:true });
    drawText(ctx, 'v' + (si+1) + (si===1?'快':'慢'), tubeCx, uy + uDiff * 2 + 23, { size:'8', align:'center', color:sec.color });
    drawText(ctx, 'p=' + sec.pressure, tubeCx, uy - 6, { size:'8', align:'center', color:sec.color });

    // 流速箭头（在管道内）
    if (si === 1) {
      // 窄处长箭头
      ctx.fillStyle = sec.color+'cc';
      ctx.beginPath();
      ctx.moveTo(sec.cx + 18, pipeY - 2); ctx.lineTo(sec.cx + 28, pipeY); ctx.lineTo(sec.cx + 18, pipeY + 2); ctx.fill();
      ctx.fillRect(sec.cx - 12, pipeY-1.5, 31, 3);
    } else {
      // 宽处短箭头
      ctx.fillStyle = sec.color+'99';
      ctx.beginPath();
      ctx.moveTo(sec.cx + 10, pipeY - 1.5); ctx.lineTo(sec.cx + 17, pipeY); ctx.lineTo(sec.cx + 10, pipeY + 1.5); ctx.fill();
      ctx.fillRect(sec.cx - 8, pipeY-1, 19, 2);
    }
  });

  // 结论面板 - 美化版
  drawExpPanel(ctx, w, h, [
    { text: '\u4f2f\u52aa\u5229\u539f\u7406:', xOff: 14, yOff: 11, color: '#333', size: '12', bold: true },
    { text: '\u2460 \u6d41\u4f53\u6d41\u901f\u5927\u7684\u5730\u65b9\uff0c\u538b\u5f3a\u5c0f \u00a0|\u00a0 v\u2191 \u21d2 P\u2193', xOff: 14, yOff: 27, color: '#f0883e', size: '10' },
    { text: '\u2461 \u6d41\u4f53\u6d41\u901f\u5c0f\u7684\u5730\u65b9\uff0c\u538b\u5f3a\u5927 \u00a0|\u00a0 v\u2193 \u21d2 P\u2191', xOff: 14, yOff: 41, color: '#4A90E2', size: '10' },
    { text: '\u2462 \u5e94\u7528: \u98de\u673a\u673a\u7ff1\u3001\u55b7\u96fe\u5668\u3001\u7403\u68d2\u5f27\u7ebf\u3001\u5e3d\u5b50', xOff: 14, yOff: 55, color: '#888', size: '9' }
  ], { panelY: 0.73 });
}

// ---- 9. 浮力影响因素 (buoyancy) ----

function animBuoyancy(ctx, w, h, t, params, data) {
  clearCanvas(ctx, w, h);
  drawParticles(ctx, w, h, t, 12, 'rgba(56,139,253,ALPHA)', 0.03);

  // 状态机：0=准备 1=物体A下落入水 2=稳定展示 3=物体B下落/测力计展示 4=最终对比
  if (params.phase === undefined) { params.phase = 0; params.startT = t; }
  
  var dt = t - params.startT;

  // 阶段自动推进
  if (params.phase === 0 && dt > 1.0) { params.phase = 1; params.startT = t; }
  if (params.phase === 1 && dt > 2.5) { params.phase = 2; }
  if (params.phase === 2 && dt > 4.0) { params.phase = 3; params.startT = t; }
  if (params.phase === 3 && dt > 2.8) { params.phase = 4; }

  drawText(ctx, '浮力大小与哪些因素有关', w/2, 18, {size:'15', bold:true, align:'center'});

  // 布局参数（整体上移）
  var waterSurfaceY = h * 0.32;
  var waterBottomY = h * 0.68;
  var waterH = waterBottomY - waterSurfaceY;
  var tankLeft = w * 0.06;
  var tankRight = w * 0.94;
  var tankW = tankRight - tankLeft;

  // ===== 水槽绘制 =====
  ctx.fillStyle = 'rgba(230,240,250,0.25)';
  ctx.fillRect(tankLeft-3, waterSurfaceY-2, tankW+6, waterH+6);
  
  // 水体渐变
  var waterGrad = ctx.createLinearGradient(tankLeft, waterSurfaceY, tankLeft, waterBottomY);
  waterGrad.addColorStop(0, 'rgba(100,180,255,0.35)');
  waterGrad.addColorStop(0.5, 'rgba(56,139,253,0.55)');
  waterGrad.addColorStop(1, 'rgba(30,100,200,0.70)');
  ctx.fillStyle = waterGrad;
  ctx.fillRect(tankLeft, waterSurfaceY, tankW, waterH);

  // 水面波纹
  ctx.strokeStyle = 'rgba(135,206,250,0.55)'; ctx.lineWidth = 1.2;
  for(var wi=0; wi<6; wi++){
    var wy = waterSurfaceY + wi*(waterH/6) + 2;
    if (wy < waterBottomY - 3) {
      ctx.beginPath();
      ctx.moveTo(tankLeft+8, wy+Math.sin(t*2+wi*0.7)*1.5);
      ctx.quadraticCurveTo(tankLeft+tankW/2, wy+Math.sin(t*2+wi*0.7+1)*2.5, tankRight-8, wy+Math.sin(t*2+wi*0.7+2)*1.5);
      ctx.stroke();
    }
  }

  // 槽壁
  ctx.strokeStyle='#7a9cc6'; ctx.lineWidth=2.5;
  ctx.strokeRect(tankLeft, waterSurfaceY, tankW, waterH);

  // 底部刻度线
  ctx.strokeStyle = '#aabbcc'; ctx.lineWidth = 0.8;
  for(var ki=0; ki<5; ki++){
    var kx = tankLeft + (ki+1) * tankW / 6;
    ctx.beginPath(); ctx.moveTo(kx, waterBottomY-4); ctx.lineTo(kx, waterBottomY); ctx.stroke();
  }

  // ===== 两个实验对象 =====
  var objW = 38, objH = 38;
  var ironX = w * 0.26;   // 铁球（密度大）
  var woodX = w * 0.74;   // 木球（密度小）

  var ironStartY = waterSurfaceY - 55;
  var ironTargetY = waterBottomY - objH - 3; // 沉底
  var woodTargetY = waterSurfaceY + objH * 0.28; // 漂浮

  var ironCurY = ironStartY;
  var woodCurY = waterSurfaceY - 55;
  var woodVisible = false;

  if (params.phase >= 1) {
    var fallADt = (params.phase <= 2 ? dt : 999);
    
    if (fallADt < 0.85) {
      // 下落中
      var p = Math.min(1, fallADt/0.85);
      var ep = 1 - Math.pow(1-p, 2.2);
      ironCurY = ironStartY + (ironTargetY - ironStartY) * ep;
      
      if (ironCurY > waterSurfaceY - 10) {
        _drawSplash(ctx, ironX, waterSurfaceY, t, Math.min(1,(ironCurY-(waterSurfaceY-10))/18)*(1-p), '#4A90E2');
      }
    } else {
      ironCurY = ironTargetY;
      woodVisible = true;
      
      if (fallADt < 0.85 + 0.65) {
        var wp = (fallADt - 0.85) / 0.65;
        woodCurY = (waterSurfaceY-55) + (woodTargetY - (waterSurfaceY-55)) * (1-Math.pow(1-wp, 2));
        if (wp > 0.25) {
          _drawSplash(ctx, woodX, waterSurfaceY, t, ((wp-0.25)/0.75)*0.4, '#daa520');
        }
      } else {
        woodCurY = woodTargetY;
      }
    }
  }

  // 绘制铁球（沉底）
  if (ironCurY > waterSurfaceY - 60) {
    ctx.fillStyle='rgba(0,0,0,0.15)';
    ctx.beginPath();ctx.ellipse(ironX+2,ironCurY+objH+2,14,4,0,0,Math.PI*2);ctx.fill();

    var ig = ctx.createRadialGradient(ironX-4,ironCurY-4,1,ironX,ironCurY+objH/2,objW/2);
    ig.addColorStop(0,'#999'); ig.addColorStop(0.6,'#666'); ig.addColorStop(1,'#444');
    ctx.fillStyle=ig;
    ctx.beginPath();ctx.arc(ironX,ironCurY+objH/2,objW/2,0,Math.PI*2);ctx.fill();
    ctx.strokeStyle='#333';ctx.lineWidth=1;ctx.stroke();
    drawText(ctx,'铁',ironX,ironCurY+objH/2+1,{size:'11',align:'center',color:'#fff',bold:true});
  }

  // 绘制木球（漂浮）
  if (woodVisible) {
    ctx.fillStyle='rgba(0,0,0,0.10)';
    ctx.beginPath();ctx.ellipse(woodX+2,waterSurfaceY+2,14,3,0,0,Math.PI*2);ctx.fill();

    var wg = ctx.createRadialGradient(woodX-3,woodCurY-3,1,woodX,woodCurY+objH/2,objW/2);
    wg.addColorStop(0,'#ffe066');wg.addColorStop(0.6,'#daa520');wg.addColorStop(1,'#b8860b');
    ctx.fillStyle=wg;
    ctx.beginPath();ctx.arc(woodX,woodCurY+objH/2,objW/2,0,Math.PI*2);ctx.fill();
    ctx.strokeStyle='#8B6914';ctx.lineWidth=0.8;ctx.stroke();
    drawText(ctx,'木',woodX,woodCurY+objH/2+1,{size:'11',align:'center',color:'#fff',bold:true});

    // 力箭头（稳定后显示）
    if (params.phase >= 2) {
      _drawArrow(ctx, woodX, woodCurY, woodX, woodCurY-20, '#4A90E2', 2);
      drawText(ctx,'F浮',woodX+9,woodCurY-12,{size:'9',color:'#4A90E2'});
      _drawArrow(ctx, woodX, woodCurY+objH, woodX, woodCurY+objH+18, '#f85149', 2);
      drawText(ctx,'G',woodX+8,woodCurY+objH+12,{size:'9',color:'#f85149'});
      
      drawText(ctx,'G>F浮 沉底',ironX,ironCurY+objH+16,{size:'9',align:'center',color:'#888'});
      drawText(ctx,'G=F浮 漂浮',woodX,woodCurY+objH+24,{size:'9',align:'center',color:'#888'});
    }
  }

  // ===== 弹簧测力计对比（phase 3+） =====
  if (params.phase >= 3) {
    var sTopY = h * 0.09;
    var sLen = h * 0.34;
    
    // 左侧：铁球在空气中 → 浸入水中示数减小
    _drawSpringScale(ctx, w*0.07, sTopY, sLen,
      params.phase >= 4 ? 0.72 : 0.98,
      '空气中\nF=G', '#666');
    if (params.phase === 3 && dt < 1.0) {
      drawText(ctx,'↓ 浸入水中',w*0.07,sTopY+sLen+14,{size:'9',align:'center',color:'#4A90E2'});
    } else if (params.phase >= 4) {
      drawText(ctx,'水中\nF=G-F浮',w*0.07,sTopY+sLen+10,{size:'8',align:'center',color:'#4A90E2'});
    }

    // 右侧：木球漂浮时拉力为0
    _drawSpringScale(ctx, w*0.93, sTopY, sLen,
      params.phase >= 4 ? 0.05 : 0.42,
      '拉起\nF=G', '#daa520');
    if (params.phase >= 4) {
      drawText(ctx,'漂浮\nF=0',w*0.93,sTopY+sLen+10,{size:'8',align:'center',color:'#daa520'});
    }
  }

  // 结论面板
  var showFull = params.phase >= 4 || (params.phase >= 2 && dt > 1.2);
  var pLines = [];
  if (!showFull) {
    pLines.push({text: '\u6b63\u5728\u6f14\u793a\u6d6e\u529b\u5f71\u54cd\u56e0\u7d20...', xOff:14, yOff:16, color:'#888', size:'11'});
  } else {
    pLines.push(
      {text: '\u6d6e\u529b\u5927\u5c0f\u7684\u5f71\u54cd\u56e0\u7d20:', xOff:14, yOff:11, color:'#333', size:'12', bold:true},
      {text: '\u2460 \u540c\u79ef\u4f53\uff1a\u5bc6\u5ea6\u5c0f\u7684\u7269\u4f53\u6d6e\u529b\u76f8\u5bf9\u66f4\u5927 \u00a0(\u6728> 铁)', xOff:14, yOff:27, color:'#daa520', size:'10'},
      {text: '\u2461 \u540c\u5bc6\u5ea6\uff1a\u6d89\u5165\u4f53\u79ef\u8d8a\u5927\uff0c\u6d6e\u529b\u8d8a\u5927 \u00a0(V\u6392\u2191 \u21d2 F\u6d6e\u2191)', xOff:14, yOff:41, color:'#4A90E2', size:'10'},
      {text: '\u2462 F\u6d6e = G - F\u793a(\u6d6e)\uff0c\u6f02\u6d6e F\u793a=0 \u21d2 F\u6d6e=G', xOff:14, yOff:55, color:'#f85149', size:'9'}
    );
  }
  drawExpPanel(ctx, w, h, pLines, { panelY: 0.70 });
}

// 辅助：弹簧测力计
function _drawSpringScale(ctx, cx, topY, len, fillRatio, label, color) {
  var sw = 22;
  ctx.fillStyle='rgba(255,255,255,0.88)';
  ctx.fillRect(cx-sw/2,topY,sw,len);
  ctx.strokeStyle='#bbb';ctx.lineWidth=1.5;
  ctx.strokeRect(cx-sw/2,topY,sw,len);

  // 刻度
  ctx.strokeStyle='#ddd';ctx.lineWidth=0.5;
  for(var i=0;i<=10;i++){
    var ky=topY+len-6-(len-12)*i/10;
    ctx.beginPath();ctx.moveTo(cx-sw/2+2,ky);ctx.lineTo(cx-sw/2+(i%5?4:6),ky);ctx.stroke();
  }

  // 填充柱
  var fh=(len-12)*fillRatio;
  ctx.fillStyle=color+'aa';
  ctx.fillRect(cx-sw/2+3,topY+len-5-fh,sw-6,fh);

  // 指针
  var ptrY=topY+len-5-fh;
  ctx.strokeStyle=color;ctx.lineWidth=2;
  ctx.beginPath();ctx.moveTo(cx-sw/2-3,ptrY);ctx.lineTo(cx+sw/2+3,ptrY);ctx.stroke();

  // 挂钩
  ctx.strokeStyle='#777';ctx.lineWidth=1.5;
  ctx.beginPath();ctx.moveTo(cx,topY);ctx.lineTo(cx,topY-7);ctx.stroke();
  ctx.fillStyle='#888';ctx.beginPath();ctx.arc(cx,topY-9,2.5,0,Math.PI*2);ctx.fill();

  // 标签
  var lbls=label.split('\n');
  lbls.forEach(function(l,i){ drawText(ctx,l,cx,topY+len+10+i*11,{size:'8',align:'center',color:'#888'}); });
}

// 辅助：箭头
function _drawArrow(ctx,x1,y1,x2,y2,color,lw){
  ctx.strokeStyle=color;ctx.fillStyle=color;ctx.lineWidth=lw;
  var hl=6,a=Math.atan2(y2-y1,x2-x1);
  ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();
  ctx.beginPath();ctx.moveTo(x2,y2);
  ctx.lineTo(x2-hl*Math.cos(a-Math.PI/6),y2-hl*Math.sin(a-Math.PI/6));
  ctx.lineTo(x2-hl*Math.cos(a+Math.PI/6),y2-hl*Math.sin(a+Math.PI/6));
  ctx.closePath();ctx.fill();
}

// 辅助：水花
function _drawSplash(ctx,cx,surfaceY,t,alpha,color){
  if(alpha<=0)return;
  ctx.fillStyle=color+Math.floor(alpha*120).toString(16).padStart(2,'0');
  for(var si=0;si<6;si++){
    var sa=si*Math.PI*2/6+t*10,sr=3+alpha*10;
    ctx.beginPath();ctx.arc(cx+Math.cos(sa)*sr,surfaceY-Math.abs(Math.sin(sa))*sr*0.6,1.5+alpha*3,0,Math.PI*2);ctx.fill();
  }
}

// ---- 10. 阿基米德原理 (archimedes) ----

function animArchimedes(ctx, w, h, t, params, data) {
  clearCanvas(ctx, w, h);
  drawParticles(ctx, w, h, t, 10, 'rgba(56,139,253,ALPHA)', 0.03);

  drawText(ctx, '验证阿基米德原理  F浮 = ρgV排', w/2, 18, {size:'15', bold:true, align:'center'});

  // ===== 状态机 =====
  // 0: 准备(溢水杯+石块空中)  1: 测G  2: 石块入水  3: 溢水流向小桶  4: 称量小桶  5: 结论
  if (params.phase === undefined) { params.phase = 0; params.startT = t; }
  
  var dt = t - params.startT;

  if (params.phase === 0 && dt > 1.2) { params.phase = 1; params.startT = t; }
  if (params.phase === 1 && dt > 2.0) { params.phase = 2; params.startT = t; }
  if (params.phase === 2 && dt > 3.0) { params.phase = 3; params.startT = t; }
  if (params.phase === 3 && dt > 3.5) { params.phase = 4; params.startT = t; }
  if (params.phase === 4 && dt > 2.5) { params.phase = 5; }

  var curDt = t - params.startT;

  // ===== 布局参数 =====
  var cupX = w * 0.30;
  var cupW = 85;
  var cupH = 95;
  var cupTopY = h * 0.22;
  var waterLineY = cupTopY + 12; // 满水线（与溢水管齐平）
  var cupBotY = cupTopY + cupH;

  var bucketX = w * 0.68;
  var bucketW = 52;
  var bucketH = 55;
  var bucketY = h * 0.48;

  var springCx = cupX + cupW / 2;
  var springTop = h * 0.06;
  var springLen = cupTopY - springTop - 30;

  var stoneW = 32, stoneH = 24;
  var stoneStartY = springTop - 10;
  var stoneTargetY = waterLineY + stoneH * 0.6; // 浸没位置

  // ===== 1. 绘制溢水杯 =====
  // 杯身背景
  ctx.fillStyle='rgba(220,235,250,0.25)';
  ctx.fillRect(cupX-4,cupTopY-4,cupW+8,cupH+8);

  // 杯中的水
  var waterFillH = cupBotY - waterLineY;
  var waterGrad = ctx.createLinearGradient(cupX, waterLineY, cupX, cupBotY);
  waterGrad.addColorStop(0,'rgba(100,180,255,0.50)');
  waterGrad.addColorStop(1,'rgba(56,139,253,0.70)');
  ctx.fillStyle = waterGrad;
  ctx.fillRect(cupX+2, waterLineY, cupW-4, waterFillH-2);

  // 水面波纹
  ctx.strokeStyle='rgba(135,206,250,0.6)';ctx.lineWidth=1;
  for(var wi=0;wi<4;wi++){
    var wy=waterLineY+wi*(waterFillH/4)+3;
    ctx.beginPath();
    ctx.moveTo(cupX+6,wy+Math.sin(t*2+wi)*1.5);
    ctx.quadraticCurveTo(cupX+cupW/2,wy+Math.sin(t*2+wi+1)*2,cupX+cupW-6,wy+Math.sin(t*2+wi+2)*1.5);
    ctx.stroke();
  }

  // 溢水管（右侧出水口）
  var pipeY = waterLineY - 4;
  var pipeW = 35;
  ctx.fillStyle='#b8c8d8';
  ctx.fillRect(cupX+cupW-2, pipeY, pipeW, 9);
  ctx.strokeStyle='#8899aa';ctx.lineWidth=1;
  ctx.strokeRect(cupX+cupW-2, pipeY, pipeW, 9);

  // 杯壁
  ctx.strokeStyle='#7a9cc6';ctx.lineWidth=2.5;
  ctx.strokeRect(cupX, cupTopY, cupW, cupH);
  drawText(ctx,'溢水杯\n(满)',cupX+cupW/2,cupBotY+14,{size:'9',align:'center',color:'#888'});

  // ===== 2. 绘制小桶 =====
  // 桶身
  ctx.fillStyle='rgba(255,255,255,0.7)';
  _archDrawBucket(ctx, bucketX, bucketY, bucketW, bucketH);

  // 接水量（phase 3+ 开始接水）
  var bucketWaterH = 0;
  if (params.phase >= 3) {
    var waterDt = params.phase === 3 ? curDt : 999;
    if (waterDt < 2.8) {
      bucketWaterH = (1 - Math.pow(1 - (Math.min(1, waterDt / 2.8), 3))) * (bucketH - 10);
    } else {
      bucketWaterH = bucketH - 10;
      params.finalBucketWater = true;
    }
  }

  if (bucketWaterH > 0) {
    var bwg = ctx.createLinearGradient(bucketX, bucketY+bucketH-bucketWaterH, bucketX, bucketY+bucketH-4);
    bwg.addColorStop(0,'rgba(100,180,255,0.45)');
    bwg.addColorStop(1,'rgba(56,139,253,0.65)');
    ctx.fillStyle=bwg;
    // 桶内水面略呈梯形
    ctx.beginPath();
    ctx.moveTo(bucketX+5,bucketY+bucketH-4-bucketWaterH);
    ctx.lineTo(bucketX+bucketW-5,bucketY+bucketH-4-bucketWaterH);
    ctx.lineTo(bucketX+bucketW-3,bucketY+bucketH-4);
    ctx.lineTo(bucketX+3,bucketY+bucketH-4);
    ctx.closePath();ctx.fill();

    // 桶内波纹
    ctx.strokeStyle='rgba(135,206,250,0.5)';ctx.lineWidth=0.8;
    for(var bwi=0;bwi<3;bwi++){
      var bwy=bucketY+bucketH-4-bucketWaterH+bwi*(bucketWaterH/3)+2;
      if(bwy<bucketY+bucketH-5){
        ctx.beginPath();
        ctx.moveTo(bucketX+7,bwy+Math.sin(t*2.5+bwi)*1);
        ctx.quadraticCurveTo(bucketX+bucketW/2,bwy+Math.sin(t*2.5+bwi+1)*1.5,bucketX+bucketW-7,bwy+Math.sin(t*2.5+bwi+2)*1);
        ctx.stroke();
      }
    }
  }

  drawText(params.phase>=4&&bucketWaterH>bucketH-15?'小桶+水': '空桶', bucketX+bucketW/2, bucketY+bucketH+13,
    {size:'9',align:'center',color:params.phase>=4?'#4A90E2':'#888',bold:params.phase>=4});

  // ===== 3. 流水动画（phase 3） =====
  if (params.phase === 3) {
    var pipeEndX = cupX + cupW + pipeW - 2;
    var dropTargetY = bucketY + bucketH - 4 - Math.max(0, bucketWaterH);
    
    // 从管口流出的水柱
    ctx.strokeStyle='#4A90E2';ctx.lineWidth=3;ctx.globalAlpha=0.6;
    ctx.beginPath();ctx.moveTo(pipeEndX,pipeY+5);
    // 曲线落到桶上方
    ctx.quadraticCurveTo(pipeEndX+20,(pipeY+dropTargetY)/2,pipeEndX+15,dropTargetY);
    ctx.stroke();ctx.globalAlpha=1;

    // 水滴粒子
    for(var di=0;di<5;di++){
      var dp=(curDt*4+di*0.2)%1;
      var dx=pipeEndX+dp*18+Math.sin(t*6+di)*2;
      var dy=pipeY+5+(dropTargetY-pipeY-5)*dp;
      ctx.fillStyle='rgba(56,139,253,'+(0.7-dp*0.4).toFixed(2)+')';
      ctx.beginPath();ctx.arc(dx,dy,2+dp*1.5,0,Math.PI*2);ctx.fill();
    }

    // 落入桶的水花
    if (bucketWaterH > 2) {
      _drawSplash(ctx, bucketX+bucketW/2, bucketY+bucketH-4-bucketWaterH, t, 0.35, '#4A90E2');
    }
  } else if (params.phase >= 4 && !params.bucketMoved) {
    // phase 4开始后显示静态连接
    ctx.setLineDash([4,3]);ctx.strokeStyle='#4A90E266';ctx.lineWidth=1.5;
    ctx.beginPath();
    ctx.moveTo(cupX+cupW+pipeW,pipeY+5);
    ctx.lineTo(bucketX+bucketW/2,bucketY+bucketH/2);
    ctx.stroke();ctx.setLineDash([]);
  }

  // ===== 4. 石块动画 =====
  var stoneCurY = stoneStartY;
  var stoneVisible = true;
  var splashAlpha = 0;
  var stoneInWater = false;

  if (params.phase >= 2) {
    var fallDt = params.phase <= 2 ? curDt : 999;
    var fallDur = 1.2;
    if (fallDt < fallDur) {
      var fp = Math.min(1,fallDt/fallDur);
      var fep = 1-Math.pow(1-fp,2.5); // 缓出
      stoneCurY = stoneStartY + (stoneTargetY-stoneStartY)*fep;
      
      // 入水时水花
      if(stoneCurY>waterLineY-10){
        splashAlpha=Math.min(1,(stoneCurY-(waterLineY-10))/16)*(1-fp);
      }
    } else {
      stoneCurY = stoneTargetY;
      stoneInWater = true;
      if(fallDt<fallDur+0.4)splashAlpha=1-(fallDt-fallDur)/0.4;
    }
  }

  // 绘制石块
  if(stoneVisible){
    // 阴影（不在水中时）
    if(!stoneInWater){
      ctx.fillStyle='rgba(0,0,0,0.12)';
      ctx.beginPath();ctx.ellipse(springCx+2,stoneCurY+stoneH+2,16,4,0,0,Math.PI*2);ctx.fill();
    }
    
    // 石块本体
    var sg=ctx.createRadialGradient(springCx-4,stoneCurY-3,1,springCx,stoneCurY+stoneH/2,stoneW/1.5);
    sg.addColorStop(0,'#aaa');sg.addColorStop(0.5,'#777');sg.addColorStop(1,'#555');
    ctx.fillStyle=sg;
    _archDrawStone(ctx,springCx-stoneW/2,stoneCurY,stoneW,stoneH);
    ctx.fillStyle='#444';
    ctx.font='bold 10px sans-serif';ctx.textAlign='center';
    ctx.fillText('石',springCx,stoneCurY+stoneH/2+3);
    ctx.textAlign='left';

    // 入水水花
    if(splashAlpha>0.05){
      _drawSplash(ctx,springCx,waterLineY,t,splashAlpha,'#56a0d6');
    }

    // 浸没时的气泡（phase 2稳定后）
    if(stoneInWater && params.phase>=3){
      for(var bi=0;bi<4;bi++){
        var bt=(t*1.5+bi*0.8)%1;
        var bax=springCx+(bi%2?-1:1)*(8+bi*3)+Math.sin(t*3+bi)*3;
        var bay=stoneCurY+stoneH-bt*25;
        ctx.fillStyle='rgba(150,200,255,'+((1-bt)*0.5).toFixed(2)+')';
        ctx.beginPath();ctx.arc(bax,bay,1.5+bt,0,Math.PI*2);ctx.fill();
      }
    }
  }

  // ===== 5. 弹簧测力计 =====
  // 读数随阶段变化：空气中2.0N → 水中1.2N → 称小桶 0.8N
  var reading = 2.0;
  var springStretch = 1.0; // 1.0=满拉伸
  
  if (params.phase === 0 || params.phase === 1) {
    reading = 2.0;
    springStretch = 1.0;
  } else if (params.phase === 2) {
    // 示数从2.0渐变到1.2
    var transP = curDt < 1.2 ? (1 - Math.pow(1 - (curDt/1.2), 3)) : 1;
    reading = 2.0 - transP * 0.8;
    springStretch = 1.0 - transP * 0.38;
  } else if (params.phase === 3) {
    reading = 1.2;
    springStretch = 0.62;
  } else if (params.phase >= 4) {
    // 称量小桶中的水：从1.2→0.8
    if (params.phase === 4) {
      var wp = curDt < 1.2 ? (1 - Math.pow(1 - (curDt/1.2), 3)) : 1;
      reading = 1.2 - wp * 0.4;
      springStretch = 0.62 - wp * 0.19;
    } else {
      reading = 0.8;
      springStretch = 0.43;
    }
  }

  // 绘制弹簧测力计
  _archDrawSpringScale(ctx, springCx, springTop, springLen, springStretch, reading, '#f0883e');

  // 挂钩连线到石块/小桶
  ctx.strokeStyle='#777';ctx.lineWidth=1.5;
  var hookY = springTop + springLen + 28;
  if (params.phase < 4) {
    // 连到石块
    ctx.beginPath();ctx.moveTo(springCx,hookY);
    ctx.lineTo(springCx,stoneCurY);
    ctx.stroke();
  } else {
    // 连接到小桶
    ctx.beginPath();ctx.moveTo(springCx,hookY);
    ctx.lineTo(springCx,hookY+15);
    ctx.lineTo(bucketX+bucketW/2,bucketY-5);
    ctx.stroke();
  }

  // ===== 6. 标注和箭头 =====
  if (params.phase >= 1) {
    // G箭头（红色向下）- 始终显示
    _drawArrow(ctx, springCx+22, stoneInWater?stoneTargetY:stoneCurY, 
               springCx+22, (stoneInWater?stoneTargetY:stoneCurY)+35, '#f85149', 2.5);
    drawText(ctx,'G='+reading.toFixed(1)+'N',springCx+28,(stoneInWater?stoneTargetY:stoneCurY)+20,{size:'9',color:'#f85149',bold:true});
  }

  if (params.phase >= 3) {
    // F浮箭头（蓝色向上）- 石块浸入后
    _drawArrow(ctx, springCx-18, stoneTargetY, springCx-18, stoneTargetY-28, '#4A90E2', 2.5);
    drawText(ctx,'F浮=0.8N',springCx-34,stoneTargetY-16,{size:'9',color:'#4A90E2',bold:true});
  }

  if (params.phase >= 5) {
    // 最终公式展示
    _drawArrow(ctx, springCx-18, stoneTargetY+stoneH+5, springCx-18, stoneTargetY+stoneH+33, '#3fb950', 2);
    drawText(ctx,'F浮=G-F拉',springCx-36,stoneTargetY+stoneH+22,{size:'8',color:'#3fb950'});
  }

  // ===== 7. 结论面板 =====
  var pLines = [];
  if (params.phase < 5) {
    var stageTexts = [
      '\u51c6\u5907\u5b9e\u9a8c\u8bbe\u5907...',
      '\u2460 \u6d4b\u77f3\u5757\u91cd\u529b\uff1a G = 2.0 N',
      '\u2461 \u77f3\u5757\u6d78\u5165\u6c34\u4e2d\uff1a \u793a\u6570\u51cf\u5c0f\u81f3 1.2 N',
      '\u2462 \u6ea2\u51fa\u7684\u6c34\u6d41\u5165\u5c0f\u6860...',
      '\u2463 \u79f0\u5c0f\u6860+\u6c34\uff1a G\u6392 = 0.8 N'
    ];
    pLines.push({text:stageTexts[params.phase],xOff:14,yOff:16,color:'#f0883e',size:'11',bold:true});
    pLines.push({text:params.phase===0?'':'\u6b63\u5728\u6f14\u793a...',xOff:14,yOff:34,color:'#888',size:'10'});
  } else {
    pLines.push(
      {text: '\u963f\u57fa\u7c73\u5fb7\u539f\u7406:', xOff:14, yOff:11, color:'#333', size:'12', bold:true},
      {text: '\u2460 G = 2.0 N  |  F\u62c9 = 1.2 N  |  F\u6d6e = G - F\u62c9 = 0.8 N', xOff:14, yOff:27, color:'#f0883e', size:'9'},
      {text: '\u2461 G\u6392(\u5c0f\u6860\u6c34) = 0.8 N  \u2713  F\u6d6e = G\u6392 = 0.8 N', xOff:14, yOff:41, color:'#4A90E2', size:'9', bold:true},
      {text: '\u2462 \u7ed3\u8bba\uff1a\u6d6e\u529b\u5927\u5c0f\u7b49\u4e8e\u88ab\u6d6e\u4f53\u6392\u5f00\u7684\u6db2\u4f53\u6240\u53d7\u7684\u91cd\u529b', xOff:14, yOff:55, color:'#3fb950', size:'9'}
    );
  }
  drawExpPanel(ctx, w, h, pLines, { panelY: 0.72 });
}

// 辅助：绘制小桶
function _archDrawBucket(ctx,x,y,w,h){
  // 桶身（梯形）
  ctx.strokeStyle='#998866';ctx.lineWidth=2;
  ctx.beginPath();
  ctx.moveTo(x+3,y);ctx.lineTo(x+w-3,y);
  ctx.lineTo(x+w-1,y+h);ctx.lineTo(x+1,y+h);
  ctx.closePath();
  ctx.fillStyle='rgba(240,230,210,0.6)';ctx.fill();ctx.stroke();

  // 提手
  ctx.strokeStyle='#998866';ctx.lineWidth=1.5;
  ctx.beginPath();
  ctx.moveTo(x+w*0.2,y-2);ctx.quadraticCurveTo(x+w/2,y-12,x+w*0.8,y-2);
  ctx.stroke();
}

// 辅助：绘制石块（不规则多边形）
function _archDrawStone(ctx,x,y,w,h){
  ctx.beginPath();
  ctx.moveTo(x+2,y+h*0.8);ctx.lineTo(x,y+h);ctx.lineTo(x+w*0.3,y+h);
  ctx.lineTo(x+w,y+h*0.7);ctx.lineTo(x+w*0.85,y*0.2);
  ctx.lineTo(x+w*0.4,y);ctx.lineTo(x+w*0.1,y*0.4);
  ctx.closePath();ctx.fill();
  ctx.strokeStyle='#444';ctx.lineWidth=1;ctx.stroke();
}

// 辅助：弹簧测力计
function _archDrawSpringScale(ctx,cx,topY,len,stretchRatio,reading,color){
  var sw=26;
  var actualLen=len*stretchRatio;
  
  // 外壳
  ctx.fillStyle='rgba(255,255,255,0.92)';
  ctx.fillRect(cx-sw/2,topY,sw,len+32);
  ctx.strokeStyle='#ccc';ctx.lineWidth=1.5;
  ctx.strokeRect(cx-sw/2,topY,sw,len+32);

  // 刻度区
  var scaleTop=topY+6;
  var scaleH=len-6;
  ctx.strokeStyle='#ddd';ctx.lineWidth=0.5;
  for(var i=0;i<=20;i++){
    var ky=scaleTop+scaleH-i*scaleH/20;
    ctx.beginPath();
    ctx.moveTo(cx-sw/2+2,ky);
    ctx.lineTo(cx-sw/2+(i%5==0?6:4),ky);
    ctx.stroke();
  }

  // 弹簧（锯齿形）
  ctx.strokeStyle=color;ctx.lineWidth=2;
  ctx.beginPath();
  ctx.moveTo(cx,topY+4);
  var coils=8;
  var coilLen=actualLen*0.75;
  for(var ci=0;ci<=coils;ci++){
    var cy=topY+4+ci*coilLen/coils;
    var cxo=cx+(ci%2?-5:5);
    ctx.lineTo(cxo,cy);
  }
  ctx.lineTo(cx,topY+4+actualLen);
  ctx.stroke();

  // 示数窗口
  var winY=topY+4+actualLen;
  var winH=26;
  ctx.fillStyle='#fffef5';
  ctx.fillRect(cx-sw/2+2,winY,sw-4,winH);
  ctx.strokeStyle=color;ctx.lineWidth=1;
  ctx.strokeRect(cx-sw/2+2,winY,sw-4,winH);

  // 读数
  ctx.fillStyle=color;
  ctx.font='bold 13px monospace';ctx.textAlign='center';
  ctx.fillText(reading.toFixed(1)+' N',cx,winY+17);
  ctx.textAlign='left';

  // 单位标签
  drawText(ctx,'弹簧测力计',cx,topY+len+37,{size:'8',align:'center',color:'#999'});
}

// ---- 11. 杠杆平衡 (lever) ----

function animLever(ctx, w, h, t, params, data) {
  clearCanvas(ctx, w, h);
  drawParticles(ctx, w, h, t, 10, 'rgba(218,165,32,ALPHA)', 0.03);

  drawText(ctx, '杠杆平衡条件  F₁L₁ = F₂L₂', w/2, 18, {size:'15', bold:true, align:'center'});

  // F1位置参数（距支点百分比，15~45）
  if (params.f1Pos === undefined) params.f1Pos = 25;

  var fulcrumX = w / 2;
  var fulcrumY = h * 0.48; // 上移，给面板留空间
  var leverLen = w * 0.78;
  var leverH = 9;

  // ===== 支点（三角形底座） =====
  ctx.fillStyle='#f0883e';
  ctx.beginPath();
  ctx.moveTo(fulcrumX, fulcrumY - leverH);
  ctx.lineTo(fulcrumX - 20, fulcrumY + 28);
  ctx.lineTo(fulcrumX + 20, fulcrumY + 28);
  ctx.closePath();ctx.fill();

  // 支点高光
  ctx.fillStyle='rgba(255,255,255,0.25)';
  ctx.beginPath();ctx.moveTo(fulcrumX,fulcrumY-leverH);ctx.lineTo(fulcrumX-12,fulcrumY+14);ctx.lineTo(fulcrumX+4,fulcrumY+14);ctx.closePath();ctx.fill();

  drawText(ctx,'O',fulcrumX,fulcrumY+42,{size:'13',bold:true,align:'center',color:'#f0883e'});

  // ===== 杠杆杆（水平） =====
  ctx.save();ctx.translate(fulcrumX, fulcrumY);

  // 杠杆阴影
  ctx.fillStyle='rgba(0,0,0,0.12)';
  ctx.fillRect(-leverLen/2+3, -leverH+4, leverLen, leverH);

  // 杠杆本体
  var lg = ctx.createLinearGradient(-leverLen/2,-leverH,leverLen/2,0);
  lg.addColorStop(0,'#c49a30');lg.addColorStop(0.5,'#ffd700');lg.addColorStop(1,'#c49a30');
  ctx.fillStyle=lg;
  _levDrawRoundedRect(ctx,-leverLen/2,-leverH,leverLen,leverH,4);
  ctx.strokeStyle='#8B6914';ctx.lineWidth=1;ctx.stroke();

  // 刻度线（每格代表一个单位）
  ctx.fillStyle='#555';
  for(var mi=-6;mi<=6;mi++){
    if(mi!==0){
      var mx=mi*leverLen/13;
      ctx.fillRect(mx-1,-leverH-5,(mi%2==0?2:1),(mi%2==0?5:3));
      if(mi%2===0){
        ctx.font='8px sans-serif';ctx.textAlign='center';
        ctx.fillText(Math.abs(mi),mx,-leverH-8);
        ctx.textAlign='left';
      }
    }
  }
  ctx.restore();

  // ===== F1 和 F2 位置计算 =====
  var f1Dist = leverLen * (params.f1Pos / 100);
  var f2Dist = leverLen * 0.35; // L2 固定
  var f1X = fulcrumX - f1Dist;
  var f2X = fulcrumX + f2Dist;

  // F1 力大小（固定30N）
  var f1Mag = 30;
  var f1Len = f1Mag * 1.1 + 10;
  // F2 由平衡条件计算：F1*L1 = F2*L2 → F2 = F1*L1/L2
  var f2Mag = f1Mag * (f1Dist / f2Dist);
  var f2Len = f2Mag * 1.1 + 10;

  // ===== 挂载物（砝码） =====
  // 左侧砝码
  ctx.fillStyle='#4A90E2';
  _levDrawWeight(ctx,f1X,fulcrumY-leverH-3,22,16,'#3A7BC8');
  drawText(ctx,'F₁',f1X,fulcrumY-leverH-11,{size:'9',align:'center',color:'#fff',bold:true});

  // 右侧砝码
  ctx.fillStyle='#f85149';
  _levDrawWeight(ctx,f2X,fulcrumY-leverH-3,22,16,'#d63331');
  drawText(ctx,'F₂',f2X,fulcrumY-leverH-11,{size:'9',align:'center',color:'#fff',bold:true});

  // ===== 力箭头 =====
  // F1 向上箭头（蓝色）
  _drawArrow(ctx, f1X, fulcrumY - leverH - 20, f1X, fulcrumY - leverH - 20 - f1Len, '#4A90E2', 2.5);
  drawText(ctx, f1Mag.toFixed(0)+'N', f1X+10, fulcrumY - leverH - 20 - f1Len/2,
    {size:'9', color:'#4A90E2', bold:true});

  // F2 向上箭头（红色）
  _drawArrow(ctx, f2X, fulcrumY - leverH - 20, f2X, fulcrumY - leverH - 20 - f2Len, '#f85149', 2.5);
  drawText(ctx, f2Mag.toFixed(1)+'N', f2X+10, fulcrumY - leverH - 20 - f2Len/2,
    {size:'9', color:'#f85149', bold:true});

  // ===== 力臂标注 =====
  // L1 虚线（左侧）
  ctx.setLineDash([4,3]);ctx.strokeStyle='#4A90E277';ctx.lineWidth=1;
  ctx.beginPath();ctx.moveTo(f1X, fulcrumY+4);ctx.lineTo(fulcrumX, fulcrumY+4);ctx.stroke();ctx.setLineDash([]);
  drawText(ctx,'L₁',(f1X+fulcrumX)/2,fulcrumY+17,{size:'10',color:'#4A90E2',align:'center',bold:true});
  drawText(ctx,f1Dist.toFixed(0),(f1X+fulcrumX)/2,fulcrumY+28,{size:'9',color:'#4A90E266',align:'center'});

  // L2 虚线（右侧）
  ctx.setLineDash([4,3]);ctx.strokeStyle='#f8514977';ctx.lineWidth=1;
  ctx.beginPath();ctx.moveTo(fulcrumX, fulcrumY+4);ctx.lineTo(f2X, fulcrumY+4);ctx.stroke();ctx.setLineDash([]);
  drawText(ctx,'L₂',(fulcrumX+f2X)/2,fulcrumY+17,{size:'10',color:'#f85149',align:'center',bold:true});
  drawText(ctx,f2Dist.toFixed(0),(fulcrumX+f2X)/2,fulcrumY+28,{size:'9',color:'#f8514966',align:'center'});

  // ===== 面板内容（含滑块控制） =====
  var torque1 = (f1Mag * f1Dist).toFixed(0);
  var torque2 = (f2Mag * f2Dist).toFixed(0);
  var balanced = Math.abs(f1Mag*f1Dist - f2Mag*f2Dist) < 1;

  var panelLines = [
    {text: '\u6760\u6746\u5e73\u8861\u6761\u4ef6:', xOff:14, yOff:10, color:'#333', size:'12', bold:true},
    {text: 'F\u00d7L:  '+f1Mag+'\u00d7'+f1Dist.toFixed(0)+'='+torque1+'   vs   '+f2Mag.toFixed(1)+'\u00d7'+f2Dist.toFixed(0)+'='+torque2,
      xOff:14, yOff:26, color: balanced ? '#3fb950' : '#f0883e', size:'10'},
    {text: balanced ? '\u2713 \u5e73\u8861! F\u2081L\u2081 = F\u2082L\u2082' : '\u25b6 F\u2081L\u2081 '+(f1Mag*f1Dist>f2Mag*f2Dist?'>':'<')+' F\u2082L\u2082',
      xOff:14, yOff:40, color: balanced ? '#3fb950' : '#888', size:'10'},
    {text: '\u2190 \u62d6\u52a8\u6ed1\u5757\u6539\u53d8 F\u2081\u4f4d\u7f6e (L\u2081): ' + params.f1Pos.toFixed(0),
      xOff:14, yOff:54, color:'#666', size:'9'}
  ];

  var panelInfo = drawExpPanel(ctx, w, h, panelLines, { panelY: 0.70 });

  // ===== 在面板中绘制滑块控件 =====
  var sliderX = panelInfo.x + 18;
  var sliderY = panelInfo.y + panelInfo.h - 34;
  var sliderW = panelInfo.w - 36;
  var sliderH = 16;

  // 滑轨背景
  ctx.fillStyle='#eef2f6';
  _levDrawRoundedRect(ctx,sliderX,sliderY,sliderW,sliderH,8);
  ctx.strokeStyle='#ccd4db';ctx.lineWidth=1;ctx.stroke();

  // 已填充部分
  var fillW = ((params.f1Pos - 10) / 40) * sliderW;
  if(fillW > 0){
    var sg=ctx.createLinearGradient(sliderX,0,sliderX+fillW,0);
    sg.addColorStop(0,'#4A90E2');sg.addColorStop(1,'#6aabeb');
    ctx.fillStyle=sg;
    _levDrawRoundedRectPartial(ctx,sliderX+2,sliderY+2,fillW-4,sliderH-4,6);
  }

  // 滑块把手
  var handleX = sliderX + fillW;
  ctx.fillStyle='#fff';
  ctx.beginPath();ctx.arc(handleX,sliderY+sliderH/2,9,0,Math.PI*2);ctx.fill();
  ctx.strokeStyle='#4A90E2';ctx.lineWidth=2;ctx.stroke();
  ctx.fillStyle='#4A90E2';
  ctx.beginPath();ctx.arc(handleX,sliderY+sliderH/2,4,0,Math.PI*2);ctx.fill();

  // 刻度标签
  drawText(ctx,'近',sliderX+4,sliderY+sliderH+11,{size:'8',color:'#999'});
  drawText(ctx,'远',sliderX+sliderW-8,sliderY+sliderH+11,{size:'8',color:'#999'});
  drawText(params.f1Pos.toFixed(0),handleX,sliderY-4,{size:'9',color:'#4A90E2',bold:true,align:'center'});

  // 注册滑块为可点击区域（用于触摸/鼠标点击）
  registerButtonArea(sliderX, sliderY-4, sliderW, sliderH+8, 'lever_slider');
  // 存储滑块边界供点击处理器计算位置
  params._sliderBounds = { x: sliderX, w: sliderW };

  // 平衡指示灯
  var lightCx = panelInfo.x + panelInfo.w - 24;
  var lightCy = sliderY + sliderH / 2;
  ctx.beginPath();ctx.arc(lightCx,lightCy,5,0,Math.PI*2);
  ctx.fillStyle=balanced?'#3fb950':'#e0e0e0';ctx.fill();
  ctx.strokeStyle=balanced?'#2ea043':'#ccc';ctx.lineWidth=1;ctx.stroke();
}

// 辅助：圆角矩形（不依赖外部函数）
function _levDrawRoundedRect(ctx,x,y,w,h,r){
  ctx.beginPath();
  ctx.moveTo(x+r,y);ctx.lineTo(x+w-r,y);ctx.quadraticCurveTo(x+w,y,x+w,y+r);
  ctx.lineTo(x+w,y+h-r);ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
  ctx.lineTo(x+r,y+h);ctx.quadraticCurveTo(x,y+h,x,y+h-r);
  ctx.lineTo(x,y+r);ctx.quadraticCurveTo(x,y,x+r,y);ctx.closePath();ctx.fill();
}
function _levDrawRoundedRectPartial(ctx,x,y,w,h,r){
  if(w<2*r)r=w/2;
  ctx.beginPath();
  ctx.moveTo(x+r,y);ctx.lineTo(x+w-r,y);ctx.quadraticCurveTo(x+w,y,x+w,y+r);
  ctx.lineTo(x+w,y+h-r);ctx.quadraticCurveTo(x+w,y+h,x+r,y+h);
  ctx.lineTo(x,y+h-r);ctx.quadraticCurveTo(x,y+h,x,y+r);ctx.closePath();ctx.fill();
}

// 辅助：绘制砝码
function _levDrawWeight(ctx,cx,cy,bw,bh,darkColor){
  ctx.fillStyle=darkColor||'#333';
  // 砝码主体（带挂耳）
  ctx.beginPath();
  ctx.moveTo(cx-bw/2+2,cy+bh);ctx.lineTo(cx-bw/2,cy);
  ctx.lineTo(cx-bw/2+4,cy-4); // 左耳
  ctx.lineTo(cx-bw/2+6,cy);
  ctx.lineTo(cx+bw/2-6,cy);
  ctx.lineTo(cx+bw/2-4,cy-4); // 右耳
  ctx.lineTo(cx+bw/2,cy);
  ctx.lineTo(cx+bw/2-2,cy+bh);
  ctx.closePath();ctx.fill();
  // 高光
  ctx.fillStyle='rgba(255,255,255,0.2)';
  ctx.fillRect(cx-bw/2+3,cy+2,bw-6,3);
}

// ---- 12. 滑轮组 (pulley) ----

function animPulley(ctx, w, h, t, params, data) {
  clearCanvas(ctx, w, h);
  
  // ====== 状态机驱动 ======
  if (!data._phase) { data._phase = 0; data._phaseT = 0; }
  var dt = 1/60;
  if (!data._paused) data._phaseT += dt;
  
  // 阶段: 0准备 1拉动 2提升完成 3结论
  var PHASE_READY  = 1000,
      PHASE_PULL   = 2800,
      PHASE_HOLD   = 1200,
      PHASE_DONE   = 99999;
  
  function easeOut(t) { return 1 - Math.pow(1-t, 3); }
  function easeInOut(t) { return t < 0.5 ? 4*t*t*t : 1-Math.pow(-2*t+2,3)/2; }
  
  var phase = 0, localT = 0, progress = 0;
  var acc = data._phaseT;
  if (acc < PHASE_READY) { phase = 0; localT = acc; progress = 0; }
  else if (acc < PHASE_READY + PHASE_PULL) {
    phase = 1; localT = acc - PHASE_READY;
    progress = easeOut(Math.min(1, localT / PHASE_PULL));
  } else if (acc < PHASE_READY + PHASE_PULL + PHASE_HOLD) {
    phase = 2; localT = acc - PHASE_READY - PHASE_PULL; progress = 1;
  } else { phase = 3; localT = 0; progress = 1; }

  // 标题
  drawText(ctx, '测量滑轮组的机械效率', w/2, 20, {size:'18', bold:true, align:'center', color:'#2d3748'});
  drawText(ctx, '\u03b7 = W\u6709\u7528 / W\u603b = Gh / Fs', w/2, 40, {size:'13', align:'center', color:'#64748b'});

  // ====== 布局参数 ======
  var n = 3;                    // 承重绳子段数
  var topY       = h * 0.11;     // 天花板Y
  var ceilW      = w * 0.52;     // 天花板宽度
  var ceilX      = w * 0.24;     // 天花板起始X
  var pr         = Math.max(16, h * 0.055);  // 滑轮半径
  var fixedPx    = w * 0.36;     // 定滑轮X
  var fixedPy    = topY + pr + 20; // 定滑轮Y
  var movePx     = w * 0.54;     // 动滑轮X
  var baseMovePy = fixedPy + pr + 55; // 动滑轮初始Y
  var maxLift    = h * 0.18;     // 最大上升高度
  var loadH      = 36;           // 重物高度
  var ropeEndX   = w * 0.82;     // 绳子自由端X
  
  // 动态值
  var h_lift = maxLift * progress;        // 重物上升量
  var movePy = baseMovePy + h_lift;        // 动滑轮当前Y
  var s_pull = h_lift * n;                // 绳端拉动距离
  var handBaseY = fixedPy - pr + 10;       // 手初始Y
  var handY = handBaseY + s_pull;          // 手当前Y

  // ====== 天花板/支架 ======
  ctx.save();
  var ceilGrad = ctx.createLinearGradient(0, topY-8, 0, topY+3);
  ceilGrad.addColorStop(0, '#94a3b8'); ceilGrad.addColorStop(1, '#64748b');
  ctx.fillStyle = ceilGrad;
  roundRect(ctx, ceilX, topY-8, ceilW, 11, 3, ceilGrad, 0);
  // 支架竖线
  ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(ceilX+8, topY-8); ctx.lineTo(ceilX+8, topY-30); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(ceilX+ceilW-8, topY-8); ctx.lineTo(ceilX+ceilW-8, topY-30); ctx.stroke();
  ctx.restore();

  // ====== 定滑轮 ======
  _drawPulleyWheel(ctx, fixedPx, fixedPy, pr, '#e2e8f0', '#94a3b8', true);
  drawText(ctx, '定滑轮', fixedPx, fixedPy+pr+14,
    {size:'10', align:'center', color:'#64748b'});

  // ====== 动滑轮（随h_lift移动） ======
  _drawPulleyWheel(ctx, movePx, movePy, pr, '#fef3c7', '#d97706', false);
  drawText(ctx, '动滑轮', movePx, movePy+pr+14,
    {size:'10', align:'center', color:'#92400e'});
  // 动滑轮挂钩
  ctx.strokeStyle = '#b45309'; ctx.lineWidth=2.5;
  ctx.beginPath(); ctx.moveTo(movePx, movePy+pr); ctx.lineTo(movePx, movePy+pr+12); ctx.stroke();

  // ====== 重物 ======
  var loadTopY = movePy + pr + 12;
  // 阴影
  ctx.fillStyle = 'rgba(0,0,0,0.12)';
  roundRect(ctx, movePx-22, loadTopY+3, 44, loadH, 5, null, 0);
  // 重物本体
  var loadGrad = ctx.createLinearGradient(movePx-22, loadTopY, movePx+22, loadTopY+loadH);
  loadGrad.addColorStop(0, '#fb923c'); loadGrad.addColorStop(0.5, '#ea580c');
  loadGrad.addColorStop(1, '#c2410c');
  roundRect(ctx, movePx-22, loadTopY, 44, loadH, 5, loadGrad, 0);
  // G标签
  drawText(ctx, 'G=12N', movePx, loadTopY + loadH/2 + 4,
    {size:'12', bold:true, align:'center', color:'#fff'});
  // 高度标注
  if (progress > 0.05) {
    ctx.save();
    ctx.strokeStyle = 'rgba(234,88,12,0.4)'; ctx.lineWidth=1; ctx.setLineDash([3,3]);
    ctx.beginPath(); ctx.moveTo(movePx+28, baseMovePy+pr+12+loadH);
    ctx.lineTo(movePx+50, baseMovePy+pr+12+loadH);
    ctx.lineTo(movePx+50, loadTopY+loadH);
    ctx.lineTo(movePx+28, loadTopY+loadH);
    ctx.stroke(); ctx.setLineDash([]);
    // h箭头
    ctx.fillStyle='#ea580c'; ctx.font='bold 11px sans-serif';
    ctx.fillText('h='+(h_lift>0?h_lift.toFixed(0):0), movePx+53, (baseMovePy+pr+12+loadH+loadTopY+loadH)/2+4);
    ctx.restore();
  }

  // ====== 绳子系统 ======
  ctx.save();
  ctx.strokeStyle = '#ca8a04'; ctx.lineWidth = 2.8; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  ctx.beginPath();
  // 固定点在天花板上
  var anchorX = ceilX + 25;
  ctx.moveTo(anchorX, topY+3);
  // 第1段：↓ 到动滑轮左侧
  ctx.lineTo(anchorX, movePy-pr);
  ctx.arc(movePx-pr, movePy-pr, 0, 0, 0, false); // 转角圆弧简化为直角
  // 实际上绕过动滑轮左下侧
  ctx.lineTo(movePx, movePy-pr);
  // 第2段：↑ 到定滑轮右侧
  ctx.lineTo(fixedPx+pr, fixedPy);
  // 绕过定滑轮（半圆）
  ctx.arc(fixedPx, fixedPy, pr, -Math.PI/2, Math.PI/2, false);
  // 第3段：↓ 到动滑轮右侧
  ctx.lineTo(movePx+pr, movePy-pr);
  // 绕过动滑轮（半圆）
  ctx.arc(movePx, movePy, pr, -Math.PI/2, Math.PI/2, true);
  // 自由端：→ 向右延伸到拉力端
  ctx.lineTo(ropeEndX, movePy-pr-(movePy-fixedPy-pr));
  ctx.lineTo(ropeEndX, handY);
  ctx.stroke();

  // 绳端标记（手）
  ctx.fillStyle = '#fcd5b4';
  ctx.beginPath(); ctx.arc(ropeEndX, handY+10, 9, 0, Math.PI*2); ctx.fill();
  // 手指
  ctx.strokeStyle = '#e5b99a'; ctx.lineWidth=2;
  ctx.beginPath(); ctx.arc(ropeEndX-6, handY+4, 5, 0.5*Math.PI, 1.8*Math.PI); ctx.stroke();
  ctx.beginPath(); ctx.arc(ropeEndX+6, handY+4, 5, 0.2*Math.PI, 1.3*Math.PI); ctx.stroke();
  // F拉标签
  drawText(ctx, 'F\u62c9', ropeEndX+16, handY+8, {size:'11', bold:true, color:'#2563eb'});
  // s标注
  if (s_pull > 3) {
    ctx.save();
    ctx.strokeStyle = 'rgba(37,99,235,0.35)'; ctx.lineWidth=1; ctx.setLineDash([3,3]);
    ctx.beginPath(); ctx.moveTo(ropeEndX+22, handBaseY+10);
    ctx.lineTo(ropeEndX+38, handBaseY+10); ctx.lineTo(ropeEndX+38, handY+10);
    ctx.lineTo(ropeEndX+22, handY+10); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle='#2563eb'; ctx.font='bold 10px sans-serif';
    ctx.fillText('s='+s_pull.toFixed(0), ropeEndX+41, (handBaseY+handY)/2+14);
    ctx.restore();
  }

  // 绳子上的n标注
  drawText(ctx, 'n=' + n + '\u6bb5', (fixedPx+movePx)/2, fixedPy-pr-10,
    {size:'10', color:'#a16207', align:'center'});
  ctx.restore();

  // ====== 力的箭头 ======
  if (phase >= 1) {
    // G向下箭头（重物）
    _drawForceArrow(ctx, movePx, loadTopY+loadH+4, loadTopY+loadH+26, '#dc2626', 'G=12N', true);
    // F拉向上箭头
    _drawForceArrow(ctx, ropeEndX, handY+18, handY-15, '#2563eb', 'F=5N', false);
    // F动（动滑轮重力）向下
    _drawForceArrow(ctx, movePx, movePy+pr+4, movePy+pr+18, '#92400e', 'G\u52a8=2N', true);
  }

  // ====== 计算数据 ======
  var G = 12, gPulley = 2;  // 重物G=12N, 动滑轮G动=2N
  var F_ideal = G / n;       // 理想拉力
  var F_real = (G + gPulley) / n; // 实际拉力（考虑动滑轮重）
  var W_useful = G * h_lift; // 有用功 J
  var W_total = F_real * s_pull; // 总功 J
  var eta = (W_total > 0.01) ? (W_useful / W_total * 100) : 100;

  // ====== 数据面板 ======
  var panelItems = [];
  
  if (phase === 0) {
    panelItems.push({text: '\u2460 \u51c6\u5907\uff1a\u6ed1\u8f6e\u7ec4 n=' + n + '\u6bb5\uff0c\u91cd\u7269G=' + G + 'N', xOff:14, yOff:13, color:'#475569', size:'11'});
    panelItems.push({text: '\u89c2\u5bdf\u7ef3\u5b50\u62c9\u52a8\u548c\u91cd\u7269\u4e0a\u5347\u7684\u5173\u7cfb', xOff:14, yOff:29, color:'#64748b', size:'10'});
    panelItems.push({text: '', xOff:14, yOff:45, color:'#888', size:'10'});
  } else if (phase === 1 || phase === 2) {
    panelItems.push({
      text: '\u2461 \u62c9\u52a8\u4e2d...  h=' + (h_lift>0?h_lift.toFixed(0):0) +
            'cm  s=' + s_pull.toFixed(0) + 'cm  (s=n\u00b7h)',
      xOff:14, yOff:13, color:'#2563eb', size:'11', bold:true
    });
    panelItems.push({
      text: 'F\u62c9=' + F_real.toFixed(1) + 'N (' + n + '\u6bb5\u7ef3\u5206\u62c5) | \u03b7=' + Math.round(eta) + '%',
      xOff:14, yOff:29, color:'#059669', size:'11'
    });
    panelItems.push({
      text: 'W\u6709=' + W_useful.toFixed(1) + 'J  W\u989d=(G\u52a8)\u00b7h=' + (gPulley*h_lift).toFixed(1) + 'J  W\u603b=' + W_total.toFixed(1) + 'J',
      xOff:14, yOff:45, color:'#94a3b8', size:'10'
    });
  } else {
    panelItems.push({text: '\u2713 \u5b9e\u9a8c\u5b8c\u6210', xOff:14, yOff:13, color:'#2563eb', size:'12', bold:true});
    panelItems.push({text: '\u673a\u68b0\u6548\u7387 \u03b7 = W\u6709/W\u603b = Gh/Fs = ' + Math.round(eta) + '%', xOff:14, yOff:29, color:'#059669', size:'11', bold:true});
    panelItems.push({text: 'F < G (\u7701\u529b) \u4f46 s > h (\u8d39\u8ddd\u79bb) | \u63d0\u9ad8\u03b7: \u51cf\u8f7b\u52a8\u6ed1\u8f6e/\u589e\u52a0\u6da6\u6ed1', xOff:14, yOff:45, color:'#64748b', size:'10'});
  }
  
  drawExpPanel(ctx, w, h, panelItems, { panelY: 0.69 });

  // 存储数据
  data.h_lift = h_lift;
  data.s_pull = s_pull;
  data.eta = Math.round(eta);
}

// ---- 辅助函数 ----

function _drawPulleyWheel(ctx, cx, cy, r, fillColor, strokeColor, isFixed) {
  ctx.save();
  // 外圈阴影
  ctx.shadowColor = 'rgba(0,0,0,0.15)';
  ctx.shadowBlur = 6;
  ctx.shadowOffsetY = 2;
  // 轮缘
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = r * 0.28;
  ctx.beginPath(); ctx.arc(cx, cy, r*0.85, 0, Math.PI*2); ctx.stroke();
  ctx.shadowColor = 'transparent';
  // 轮面填充
  ctx.fillStyle = fillColor;
  ctx.beginPath(); ctx.arc(cx, cy, r*0.65, 0, Math.PI*2); ctx.fill();
  // 内圈
  ctx.strokeStyle = strokeColor; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.arc(cx, cy, r*0.45, 0, Math.PI*2); ctx.stroke();
  // 中心轴
  var axGrad = ctx.createRadialGradient(cx-2,cy-2,1, cx,cy,r*0.28);
  axGrad.addColorStop(0, '#f1f5f9'); axGrad.addColorStop(1, '#94a3b8');
  ctx.fillStyle = axGrad;
  ctx.beginPath(); ctx.arc(cx, cy, r*0.25, 0, Math.PI*2); ctx.fill();
  // 轮辐（十字）
  ctx.strokeStyle = hexToRgba(strokeColor, 0.3);
  ctx.lineWidth = 1.5;
  for (var a = 0; a < Math.PI; a += Math.PI/2) {
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(a)*r*0.28, cy + Math.sin(a)*r*0.28);
    ctx.lineTo(cx + Math.cos(a)*r*0.6, cy + Math.sin(a)*r*0.6);
    ctx.stroke();
  }
  // 固定支架标记（定滑轮）
  if (isFixed) {
    ctx.fillStyle = strokeColor;
    ctx.fillRect(cx-3, cy-r*0.95-r*0.14, 6, r*0.14+3);
  }
  ctx.restore();
}

function _drawForceArrow(ctx, x1, y1, y2, color, label, pointDown) {
  ctx.save();
  var ah = 8; // 箭头高
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x1, y2); ctx.stroke();
  // 箭头
  ctx.beginPath();
  if (pointDown) {
    ctx.moveTo(x1, y2); ctx.lineTo(x1-ah/2, y2-ah); ctx.lineTo(x1+ah/2, y2-ah);
  } else {
    ctx.moveTo(x1, y2); ctx.lineTo(x1-ah/2, y2+ah); ctx.lineTo(x1+ah/2, y2+ah);
  }
  ctx.closePath(); ctx.fill();
  // 标签
  var lx = x1 + 14;
  var ly = (y1+y2)/2;
  drawText(ctx, label, lx, ly, {size:'10', bold:true, color:color});
  ctx.restore();
}

// ---- 13. 动能与势能 (energy) ----

function animEnergy(ctx, w, h, t, params, data) {
  clearCanvas(ctx, w, h);
  
  // ====== 状态机驱动 ======
  if (!data._phase) { data._phase = 0; data._phaseT = 0; }
  var dt = 1/60;
  if (!data._paused) data._phaseT += dt;
  
  // 阶段: 0准备 1下坡 2平地 3结论
  var PHASE_PREP   = 800,  // 准备: 显示初始状态
      PHASE_DOWN   = 2200, // 下坡: 势能→动能转化
      PHASE_FLAT   = 1800, // 平地: 动能因摩擦减小
      PHASE_DONE   = 99999;
  
  function easeOut(t) { return 1 - Math.pow(1-t, 3); }
  function easeInOut(t) { return t < 0.5 ? 4*t*t*t : 1-Math.pow(-2*t+2,3)/2; }
  
  var phase = 0, localT = 0;
  var acc = data._phaseT;
  if (acc < PHASE_PREP) { phase = 0; localT = acc; }
  else if (acc < PHASE_PREP + PHASE_DOWN) { phase = 1; localT = acc - PHASE_PREP; }
  else if (acc < PHASE_PREP + PHASE_DOWN + PHASE_FLAT) { phase = 2; localT = acc - PHASE_PREP - PHASE_DOWN; }
  else { phase = 3; localT = acc - PHASE_PREP - PHASE_DOWN - PHASE_FLAT; }

  // 标题
  drawText(ctx, '动能与势能的相互转化', w/2, 22, {size:'18', bold:true, align:'center', color:'#2d3748'});

  // ====== 轨道布局 ======
  var trackStartX = w * 0.14;
  var peakX       = w * 0.22;
  var slopeEndX   = w * 0.46;
  var trackEndX   = w * 0.86;
  var peakY       = h * 0.20;
  var groundY     = h * 0.58;
  var ballR       = 13;

  // ---- 绘制轨道 ----
  ctx.save();
  // 轨道主体（立体效果）
  var trackGrad = ctx.createLinearGradient(0, peakY-6, 0, groundY+16);
  trackGrad.addColorStop(0, '#b8c4ce');
  trackGrad.addColorStop(0.5, '#9aabb8');
  trackGrad.addColorStop(1, '#7a8c9a');
  ctx.fillStyle = trackGrad;
  ctx.beginPath();
  ctx.moveTo(trackStartX, peakY + 4);
  ctx.lineTo(peakX, peakY + 4);
  ctx.lineTo(slopeEndX, groundY + 4);
  ctx.lineTo(trackEndX, groundY + 4);
  ctx.lineTo(trackEndX, groundY + 14);
  ctx.lineTo(slopeEndX, groundY + 14);
  ctx.lineTo(trackStartX, peakY + 12);
  ctx.closePath();
  ctx.fill();
  // 轨道顶线（亮边）
  ctx.strokeStyle = '#d0dae3';
  ctx.lineWidth = 3;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(trackStartX, peakY + 4);
  ctx.lineTo(peakX, peakY + 4);
  ctx.lineTo(slopeEndX, groundY + 4);
  ctx.lineTo(trackEndX, groundY + 4);
  ctx.stroke();
  // 支撑柱子
  ctx.fillStyle = '#8899aa';
  ctx.fillRect(peakX-3, peakY+10, 6, groundY-peakY);
  // 地面纹理
  ctx.fillStyle = '#e2e8f0';
  ctx.fillRect(0, groundY+14, w, h-groundY-14);
  ctx.strokeStyle = '#cbd5e0'; ctx.lineWidth=1;
  for (var gx = 0; gx < w; gx += 30) {
    ctx.beginPath(); ctx.moveTo(gx, groundY+14); ctx.lineTo(gx-15, h); ctx.stroke();
  }
  ctx.restore();

  // ====== 小球运动计算 ======
  var ballX, ballY, velocity;
  var totalH = groundY - peakY - ballR - 4; // 总高度差
  
  if (phase === 0) {
    // 准备：小球在最高点
    ballX = peakX;
    ballY = peakY;
    velocity = 0;
  } else if (phase === 1) {
    // 下坡：加速下滑
    var pp = Math.min(1, localT / PHASE_DOWN);
    var ep = easeOut(pp);
    // 位置沿斜面插值
    ballX = lerp(peakX, slopeEndX, pp);
    // Y方向用二次曲线模拟重力加速
    ballY = lerp(peakY, groundY, ep);
    // 速度随高度降低而增加（v² ∝ Δh）
    var currentH = totalH * (1 - pp);
    velocity = Math.sqrt(Math.max(0, 2 * 9.8 * currentH / totalH)) * ep; // 归一化速度 0~1
  } else if (phase === 2) {
    // 平地滚动（摩擦减速）
    ballX = slopeEndX;
    ballY = groundY;
    var fp = Math.min(1, localT / PHASE_FLAT);
    velocity = Math.max(0.05, 1 - easeInOut(fp) * 0.85); // 从1降到~0.15
    ballX = lerp(slopeEndX, trackEndX - 30, fp);
  } else {
    // 结论：停在终点
    ballX = trackEndX - 30;
    ballY = groundY;
    velocity = 0;
  }

  var drawBallY = ballY - ballR - 4; // 在轨道上方

  // ====== 绘制小球 ======
  ctx.save();
  // 运动模糊（高速时）
  if (velocity > 0.5 && phase === 1) {
    ctx.globalAlpha = 0.15;
    var blurGrad = ctx.createRadialGradient(ballX-velocity*15, drawBallY, 2, ballX-velocity*15, drawBallY, ballR);
    blurGrad.addColorStop(0, '#ff6b6b'); blurGrad.addColorStop(1, 'rgba(192,57,43,0)');
    ctx.fillStyle = blurGrad;
    ctx.beginPath(); ctx.arc(ballX-velocity*15, drawBallY, ballR, 0, Math.PI*2); ctx.fill();
    ctx.globalAlpha = 1;
  }
  // 阴影
  ctx.fillStyle = 'rgba(0,0,0,0.15)';
  ctx.beginPath();
  ctx.ellipse(ballX, ballY+4, ballR*0.9, ballR*0.35, 0, 0, Math.PI*2);
  ctx.fill();
  // 球体
  var ballGrad = ctx.createRadialGradient(ballX-4, drawBallY-4, 2, ballX, drawBallY, ballR);
  ballGrad.addColorStop(0, '#ff8a80');
  ballGrad.addColorStop(0.5, '#ff5252');
  ballGrad.addColorStop(1, '#c62828');
  ctx.fillStyle = ballGrad;
  ctx.beginPath(); ctx.arc(ballX, drawBallY, ballR, 0, Math.PI*2); ctx.fill();
  // 高光
  ctx.fillStyle = 'rgba(255,255,255,0.45)';
  ctx.beginPath(); ctx.arc(ballX-4, drawBallY-4, 4, 0, Math.PI*2); ctx.fill();
  ctx.restore();

  // ====== 速度箭头（动态） ======
  if (phase >= 1 && phase <= 2 && velocity > 0.08) {
    var arrowLen = 20 + velocity * 40;
    ctx.save();
    ctx.strokeStyle = '#e74c3c';
    ctx.fillStyle = '#e74c3c';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(ballX + ballR + 4, drawBallY);
    ctx.lineTo(ballX + ballR + 4 + arrowLen, drawBallY);
    ctx.stroke();
    // 箭头
    ctx.beginPath();
    ctx.moveTo(ballX + ballR + 4 + arrowLen, drawBallY);
    ctx.lineTo(ballX + ballR + arrowLen, drawBallY - 5);
    ctx.lineTo(ballX + ballR + arrowLen, drawBallY + 5);
    ctx.closePath(); ctx.fill();
    // v标签
    drawText(ctx, 'v=' + velocity.toFixed(2), ballX + ballR + 6 + arrowLen/2, drawBallY - 11,
      {size:'10', color:'#e74c3c', align:'center'});
    ctx.restore();
  }

  // ====== 能量柱状图（右侧） ======
  var barCX     = w * 0.82;        // 柱图中心X
  var barW      = w * 0.09;         // 单柱宽度
  var barGap    = 14;               // 柱间距
  var barMaxH   = h * 0.26;         // 最大高度
  var barBaseY  = h * 0.50;         // 柱底部Y

  // 计算能量比例
  var currentH_ball = groundY - ballY - ballR - 4;
  var epRatio = clamp(currentH_ball / totalH, 0, 1);
  var ekRatio;
  if (phase <= 1) {
    // 下坡：机械能守恒 Ek = Emax - Ep
    ekRatio = clamp(1 - epRatio, 0, 1);
  } else {
    // 平地及以后：摩擦损耗
    ekRatio = clamp(velocity * velocity, 0, 1); // Ek ∝ v²
  }
  var emRatio = epRatio + ekRatio;

  // --- Ep 势能柱 ---
  var epx = barCX - barW - barGap/2;
  // 背景
  roundRect(ctx, epx, barBaseY - barMaxH, barW, barMaxH, 4, '#f3e8ff', 1);
  // 填充
  if (epRatio > 0.02) {
    var epGrad = ctx.createLinearGradient(epx, barBaseY, epx, barBaseY - epRatio*barMaxH);
    epGrad.addColorStop(0, '#a78bfa'); epGrad.addColorStop(1, '#7c3aed');
    roundRect(ctx, epx, barBaseY - epRatio*barMaxH, barW, epRatio*barMaxH, 4, epGrad, 0);
  }
  // 标签
  drawText(ctx, '势能 Ep', epx + barW/2, barBaseY + 16, {size:'12', bold:true, align:'center', color:'#7c3aed'});
  if (epRatio > 0.05)
    drawText(ctx, (epRatio*100).toFixed(0)+'%', epx+barW/2, barBaseY-epRatio*barMaxH-8,
      {size:'11', bold:true, align:'center', color:'#7c3aed'});

  // --- Ek 动能柱 ---
  var ekx = barCX + barGap/2;
  roundRect(ctx, ekx, barBaseY - barMaxH, barW, barMaxH, 4, '#fff7ed', 1);
  if (ekRatio > 0.02) {
    var ekGrad = ctx.createLinearGradient(ekx, barBaseY, ekx, barBaseY - ekRatio*barMaxH);
    ekGrad.addColorStop(0, '#fb923c'); ekGrad.addColorStop(1, '#ea580c');
    roundRect(ctx, ekx, barBaseY - ekRatio*barMaxH, barW, ekRatio*barMaxH, 4, ekGrad, 0);
  }
  drawText(ctx, '动能 Ek', ekx + barW/2, barBaseY + 16, {size:'12', bold:true, align:'center', color:'#ea580c'});
  if (ekRatio > 0.05)
    drawText(ctx, (ekRatio*100).toFixed(0)+'%', ekx+barW/2, barBaseY-ekRatio*barMaxH-8,
      {size:'11', bold:true, align:'center', color:'#ea580c'});

  // --- 总机械能 Em 参考线 ---
  var emH = barMaxH; // 初始总能量为100%
  ctx.save();
  ctx.strokeStyle = '#10b981';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([5,3]);
  ctx.beginPath();
  ctx.moveTo(epx - 6, barBaseY - emH);
  ctx.lineTo(ekx + barW + 6, barBaseY - emH);
  ctx.stroke();
  ctx.setLineDash([]);
  // Em标签
  drawText(ctx, 'Em='+(emRatio*100).toFixed(0)+'%', barCX, barBaseY - emH - 10,
    {size:'10', bold:true, align:'center', color:'#10b981'});
  ctx.restore();

  // ====== 转化箭头（Ep → Ek 或Ek↓） ======
  var arrowCY = barBaseY - barMaxH/2;
  ctx.save();
  ctx.font = 'bold 18px sans-serif';
  if (phase === 1) {
    // 下坡：Ep ↓ → Ek ↑
    ctx.fillStyle = '#7c3aed';
    ctx.fillText('↓', epx+barW/2-5, arrowCY);
    ctx.fillStyle = '#ea580c';
    ctx.fillText('↑', ekx+barW/2-5, arrowCY);
    // 中间转化箭头
    ctx.fillStyle = '#059669';
    ctx.font = 'bold 13px sans-serif';
    ctx.fillText('→', barCX - 8, arrowCY + 5);
  } else if (phase === 2) {
    // 平地：Ek ↓ → 内能（摩擦）
    ctx.fillStyle = '#ea580c';
    ctx.font = 'bold 18px sans-serif';
    ctx.fillText('↓', ekx+barW/2-5, arrowCY);
    ctx.fillStyle = '#64748b';
    ctx.font = 'bold 11px sans-serif';
    ctx.fillText('摩擦', ekx+barW/2-12, arrowCY + 20);
  } else if (phase === 0) {
    ctx.fillStyle = '#7c3aed';
    ctx.fillText('●', epx+barW/2-6, arrowCY);
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('—', ekx+barW/2-5, arrowCY);
  } else {
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText('—', epx+barW/2-5, arrowCY);
    ctx.fillText('—', ekx+barW/2-5, arrowCY);
  }
  ctx.restore();

  // ====== 高度标注虚线 ======
  if (phase >= 0) {
    ctx.save();
    ctx.strokeStyle = 'rgba(124,58,237,0.25)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4,4]);
    // 最高点水平线
    ctx.beginPath();
    ctx.moveTo(trackStartX - 5, peakY);
    ctx.lineTo(peakX + 30, peakY);
    ctx.stroke();
    // 地面水平线
    ctx.strokeStyle = 'rgba(234,88,12,0.2)';
    ctx.beginPath();
    ctx.moveTo(slopeEndX - 10, groundY);
    ctx.lineTo(w * 0.72, groundY);
    ctx.stroke();
    ctx.setLineDash([]);
    // h标注
    ctx.fillStyle = '#64748b'; ctx.font = '11px sans-serif';
    ctx.fillText('h', peakX + 8, (peakY + groundY)/2);
    ctx.restore();
  }

  // ====== 阶段提示 ======
  var phaseText = '', phaseColor = '#64748b';
  switch(phase) {
    case 0: phaseText = '\u2460 \u51c6\u5907\uff1a\u5c0f\u7403\u5728\u9ad8\u5904\uff0c\u52bf\u80fd\u6700\u5927 \u2192 Ep=100%'; phaseColor='#7c3aed'; break;
    case 1: phaseText = '\u2461 \u4e0b\u843d\uff1a\u52bf\u80fd\u2193 \u2192 \u52a8\u80fd\u2191 \uff08\u5b88\u6055\uff09'; phaseColor='#059669'; break;
    case 2: phaseText = '\u2462 \u6eda\u52a8\uff1a\u52a8\u80fd\u2193 \u2192 \u5185\u80fd\u2191 \uff08\u6469\u64e6\uff09'; phaseColor='#ea580c'; break;
    case 3: phaseText = '\u2463 \u7ed3\u8bba\uff1a\u673a\u68b0\u80fd\u53ef\u4ee5\u76f8\u4e92\u8f6c\u5316'; phaseColor='#2563eb'; break;
  }
  // 提示框
  var tipX = w * 0.03, tipY = h * 0.04, tipW = w * 0.48;
  ctx.save();
  ctx.fillStyle = phaseColor.length > 0 ? hexToRgba(phaseColor, 0.08) : '#f1f5f9';
  roundRect(ctx, tipX, tipY, tipW, 26, 6, ctx.fillStyle, 0);
  ctx.strokeStyle = hexToRgba(phaseColor || '#94a3b8', 0.3);
  ctx.lineWidth = 1;
  roundRect(ctx, tipX, tipY, tipW, 26, 6, null, 1);
  ctx.restore();
  drawText(ctx, phaseText, tipX + tipW/2, tipY + 17,
    {size:'12', bold:true, align:'center', color: phaseColor || '#64748b'});

  // ====== 数据面板 ======
  var panelItems = [];
  
  // 公式行
  panelItems.push({
    text: 'Ek = \u00bdmv\u00b2  \u3001  Ep = mgh  \u3001  Em = Ek + Ep',
    xOff: 14, yOff: 14, color: '#475569', size: '11'
  });
  
  if (phase === 1) {
    panelItems.push({
      text: '\u2193 \u52bf\u80fd\u51cf\u5c11 (Ep\u2193) \u21d2 \u2191 \u52a8\u80fd\u589e\u5927 (Ek\u2191) \u2014\u2014 \u91cd\u529b\u505a\u6b63\u529f',
      xOff: 14, yOff: 31, color: '#059669', size: '11', bold: true
    });
    panelItems.push({
      text: '\u8f6c\u5316\u65b9\u5411\uff1amgh\u2193 \u21d2 \u00bdmv\u00b2\u2191  |  \u673a\u68b0\u80fd\u5b88\u6055 Em=\u5e38\u6570',
      xOff: 14, yOff: 47, color: '#7c3aed', size: '10'
    });
  } else if (phase === 2) {
    panelItems.push({
      text: '\u2193 \u52a8\u80fd\u51cf\u5c11 (Ek\u2193) \u21d2 \u5185\u80fd\u589e\u52a0 \u2014\u2014 \u6469\u64e6\u529b\u505a\u8d1f\u529f',
      xOff: 14, yOff: 31, color: '#ea580c', size: '11', bold: true
    });
    panelItems.push({
      text: '\u6469\u64e6\u751f\u70ed\uff1a\u52a8\u80fd \u2192 \u5185\u80fd  |  \u603b\u673a\u68b8\u80fd\u51cf\u5c0f (\u4e0d\u5b88\u6055)',
      xOff: 14, yOff: 47, color: '#64748b', size: '10'
    });
  } else if (phase >= 3) {
    panelItems.push({
      text: '\u2713 \u7ed3\u8bba\uff1a\u52bf\u80fd\u4e0e\u52a8\u80fd\u53ef\u4ee5\u76f8\u4e92\u8f6c\u5316',
      xOff: 14, yOff: 31, color: '#2563eb', size: '12', bold: true
    });
    panelItems.push({
      text: '\u4e0b\u843d:Ep\u2193\u2192Ek\u2191(\u5b88\u6055)  \u5e73\u5730:Ek\u2193\u2192\u5185\u80fd(\u6469\u64e6)  |  m\u8d8a\u5927/\u8d8a\u5feb\u2192Ek\u8d8e\u5927',
      xOff: 14, yOff: 48, color: '#475569', size: '10'
    });
  } else {
    panelItems.push({
      text: '\u89c2\u5bdf\u5de6\u4fa7\u80fd\u91cf\u67f1\u53d8\u5316\uff1a\u52bf\u80fdEp(\u7d2b) \u52a8\u80fdEk(\u6a59)',
      xOff: 14, yOff: 31, color: '#64748b', size: '11'
    });
    panelItems.push({
      text: '\u8d28\u91cfm\u6216\u901f\u5ea6v\u8d8a\u5927 \u2192 \u52a8\u80fd\u8d8a\u5927\uff1b \u9ad8\u5ea6h\u8d8a\u9ad8 \u2192 \u52bf\u80fd\u8d8a\u5927',
      xOff: 14, yOff: 47, color: '#94a3b8', size: '10'
    });
  }

  drawExpPanel(ctx, w, h, panelItems, { panelY: 0.69 });

  // 存储数据供外部使用
  data.epPercent = (epRatio * 100).toFixed(0);
  data.ekPercent = (ekRatio * 100).toFixed(0);
}

// ---- 14. 密度测量 (density) ----

function animDensity(ctx, w, h, t, params, data) {
  clearCanvas(ctx, w, h);
  
  // ====== 状态机驱动 ======
  if (!data._phase) { data._phase = 0; data._phaseT = 0; }
  var dt = 1/60;
  if (!data._paused) data._phaseT += dt;
  
  var PHASE_SHOW_OBJ   = 1200,  // 显示物体
      PHASE_WEIGH       = 2200,  // 天平称质量
      PHASE_TO_CYLINDER = 1000,  // 物体移向量筒
      PHASE_IMMERSE     = 1500,  // 物体浸入量筒
      PHASE_RESULT      = 2000;  // 计算结果
  
  function easeOut(t) { return 1 - Math.pow(1-t, 3); }
  function easeInOut(t) { return t < 0.5 ? 4*t*t*t : 1-Math.pow(-2*t+2,3)/2; }
  
  var phase = 0, localT = 0, progress = 0;
  var acc = data._phaseT;
  if (acc < PHASE_SHOW_OBJ) { phase=0; localT=acc; progress=0; }
  else if (acc < PHASE_SHOW_OBJ+PHASE_WEIGH) { phase=1; localT=acc-PHASE_SHOW_OBJ; progress=Math.min(1,localT/PHASE_WEIGH); }
  else if (acc < PHASE_SHOW_OBJ+PHASE_WEIGH+PHASE_TO_CYLINDER) { phase=2; localT=acc-PHASE_SHOW_OBJ-PHASE_WEIGH; progress=easeInOut(Math.min(1,localT/PHASE_TO_CYLINDER)); }
  else if (acc < PHASE_SHOW_OBJ+PHASE_WEIGH+PHASE_TO_CYLINDER+PHASE_IMMERSE) { phase=3; localT=acc-PHASE_SHOW_OBJ-PHASE_WEIGH-PHASE_TO_CYLINDER; progress=easeOut(Math.min(1,localT/PHASE_IMMERSE)); }
  else { phase=4; localT=acc-PHASE_SHOW_OBJ-PHASE_WEIGH-PHASE_TO_CYLINDER-PHASE_IMMERSE; progress=1; if(localT>PHASE_RESULT) localT=PHASE_RESULT; }

  // 标题
  drawText(ctx, '测量物质的密度', w/2, 18, {size:'18', bold:true, align:'center', color:'#2d3748'});
  drawText(ctx, '\u03c1 = m / V', w/2, 38, {size:'14', align:'center', color:'#64748b'});

  // ====== 布局 ======
  var scaleCX    = w * 0.30;     // 天平中心X
  var scaleCY    = h * 0.40;     // 天平中心Y
  var cylX       = w * 0.68;     // 量筒左X
  var cylW       = w * 0.12;     // 量筒宽度
  var cylBaseY   = h * 0.62;     // 量筒底部Y
  var cylH       = h * 0.28;     // 量筒高度
  var objSize    = 26;           // 物体尺寸
  var waterBaseLevel = cylH * 0.45; // 初始水位高度比例
  var waterRiseLevel = cylH * 0.70; // 浸入后水位高度比例

  // ====== 绘制天平 ======
  ctx.save();
  // 底座
  var baseGrad = ctx.createLinearGradient(scaleCX-55, scaleCY+45, scaleCX+55, scaleCY+58);
  baseGrad.addColorStop(0, '#94a3b8'); baseGrad.addColorStop(0.5, '#64748b'); baseGrad.addColorStop(1, '#475569');
  roundRect(ctx, scaleCX-55, scaleCY+42, 110, 16, 4, baseGrad, 0);
  // 底座装饰线
  ctx.strokeStyle = '#cbd5e0'; ctx.lineWidth=1;
  ctx.beginPath(); ctx.moveTo(scaleCX-50, scaleCY+46); ctx.lineTo(scaleCX+50, scaleCY+46); ctx.stroke();
  // 立柱
  var colGrad = ctx.createLinearGradient(scaleCX-5, scaleCY-35, scaleCX+5, scaleCY-35);
  colGrad.addColorStop(0, '#e2e8f0'); colGrad.addColorStop(0.5, '#94a3b8'); colGrad.addColorStop(1, '#64748b');
  ctx.fillStyle = colGrad;
  roundRect(ctx, scaleCX-5, scaleCY-32, 10, 74, 2, colGrad, 0);
  // 立柱顶部圆盘
  ctx.beginPath(); ctx.arc(scaleCX, scaleCY-34, 12, 0, Math.PI*2);
  var topDisk = ctx.createRadialGradient(scaleCX-3,scaleCY-36,1, scaleCX,scaleCY-34,12);
  topDisk.addColorStop(0, '#f1f5f9'); topDisk.addColorStop(1, '#94a3b8');
  ctx.fillStyle = topDisk; ctx.fill();
  ctx.strokeStyle='#64748b'; ctx.lineWidth=1.5; ctx.stroke();

  // 横梁（随阶段倾斜）
  var beamAngle = 0;
  if (phase === 0) beamAngle = Math.sin(t * 2) * 0.04; // 轻微晃动
  else if (phase === 1 && localT < PHASE_WEIGH * 0.7)
    beamAngle = 0.08 * (1 - easeOut(localT/(PHASE_WEIGH*0.7))); // 放物体后逐渐平衡
  else beamAngle = 0;

  ctx.save();
  ctx.translate(scaleCX, scaleCY-25);
  ctx.rotate(beamAngle);
  // 横梁主体
  var beamGrad = ctx.createLinearGradient(-68,-3, 68,3);
  beamGrad.addColorStop(0, '#d4a520'); beamGrad.addColorStop(0.5, '#f5c842'); beamGrad.addColorStop(1, '#d4a520');
  ctx.fillStyle = beamGrad;
  roundRect(ctx, -68, -4, 136, 8, 3, beamGrad, 0);
  // 刻度
  ctx.fillStyle='#8b6914';
  for(var ki=-5;ki<=5;ki++) ctx.fillRect(ki*13-0.5, -6, 1, 3);
  // 托盘支架
  ctx.fillStyle='#78716c';
  ctx.fillRect(-66, 0, 4, 14);
  ctx.fillRect(62, 0, 4, 14);
  // 左托盘
  _drawScalePan(ctx, -64, 14, '#e2e8f0', '#94a3b8');
  // 右托盘
  _drawScalePan(ctx, 64, 14, '#e2e8f0', '#94a3b8');

  // ---- 左盘：被测物体（铝块） ------
  var objAlpha = (phase >= 0) ? 1 : 0;
  if (phase >= 2) objAlpha = Math.max(0, 1 - (phase===2?progress:1)); // 移动时淡出
  ctx.globalAlpha = objAlpha;
  // 铝块
  var alGrad = ctx.createLinearGradient(-12, -objSize, 12, 0);
  alGrad.addColorStop(0, '#93c5fd'); alGrad.addColorStop(0.3, '#3b82f6');
  alGrad.addColorStop(0.7, '#1d4ed8'); alGrad.addColorStop(1, '#1e40af');
  roundRect(ctx, -12, -objSize, objSize, objSize, 3, alGrad, 0);
  // 高光
  ctx.fillStyle='rgba(255,255,255,0.3)';
  roundRect(ctx, -10, -objSize+3, 8, 6, 1, null, 0);
  ctx.globalAlpha = 1;

  // ---- 右盘：砝码 ----
  if (phase >= 1) {
    var weightProg = (phase === 1) ? easeOut(Math.min(1, localT/(PHASE_WEIGH*0.5))) : 1;
    ctx.globalAlpha = weightProg;
    // 50g砝码
    _drawWeight(ctx, 52, -18, 20, '#dc2626', '50g');
    // 4g砝码
    _drawWeight(ctx, 62, -10, 12, '#ea580c', '4g');
    ctx.globalAlpha = 1;
  }
  ctx.restore(); // 恢复横梁坐标系

  // 指针
  ctx.fillStyle = '#dc2626';
  ctx.beginPath();
  ctx.moveTo(scaleCX-1.5, scaleCY-27);
  ctx.lineTo(scaleCX+1.5, scaleCY-27);
  ctx.lineTo(scaleCX, scaleCY+3 + beamAngle * 80);
  ctx.closePath(); ctx.fill();
  // 指针尖端三角
  ctx.beginPath();
  ctx.moveTo(scaleCX-5, scaleCY+2 + beamAngle * 80);
  ctx.lineTo(scaleCX+5, scaleCY+2 + beamAngle * 80);
  ctx.lineTo(scaleCX, scaleCY+10 + beamAngle * 80);
  ctx.closePath(); ctx.fill();

  // 标尺刻度
  ctx.fillStyle='#94a3b8'; ctx.font='9px sans-serif'; ctx.textAlign='center';
  for(var si=-4;si<=4;si++) {
    ctx.fillRect(scaleCX+si*7-0.5, scaleCY+5, 1, si%2===0?6:4);
    if(si%2===0&&si!==0) ctx.fillText(si>0?'+'+si:si.toString(), scaleCX+si*7, scaleCY+15);
  }
  ctx.textAlign='left';

  // m读数标签
  if (phase >= 1) {
    var mDisplay = 54;
    if (phase === 1 && localT < PHASE_WEIGH * 0.5)
      mDisplay = Math.round(easeOut(localT/(PHASE_WEIGH*0.5)) * 54);
    ctx.save();
    ctx.fillStyle = 'rgba(220,38,38,0.08)';
    roundRect(ctx, scaleCX-45, scaleCY+22, 90, 24, 6, null, 0);
    ctx.fillStyle='#dc2626';
    ctx.font='bold 15px sans-serif'; ctx.textAlign='center';
    ctx.fillText('m = ' + mDisplay + ' g', scaleCX, scaleCY+39);
    ctx.textAlign='left';
    ctx.restore();
  } else {
    ctx.fillStyle='#94a3b8'; ctx.font='11px sans-serif';
    ctx.fillText('待测质量...', scaleCX-30, scaleCY+38);
  }
  ctx.restore(); // 恢复全局坐标系

  // ====== 绘制量筒 ======
  ctx.save();
  // 量筒外形（带厚度）
  var cylWallL = 3, cylWallR = 3;
  // 外壁阴影
  ctx.fillStyle='rgba(0,0,0,0.06)';
  ctx.beginPath();
  roundRect(ctx, cylX+3, cylBaseY-cylH+3, cylW, cylH, 6);
  ctx.fill();
  // 量筒玻璃
  var glassGrad = ctx.createLinearGradient(cylX, 0, cylX+cylW, 0);
  glassGrad.addColorStop(0, 'rgba(226,232,240,0.6)');
  glassGrad.addColorStop(0.15, 'rgba(255,255,255,0.25)');
  glassGrad.addColorStop(0.5, 'rgba(255,255,255,0.05)');
  glassGrad.addColorStop(0.85, 'rgba(226,232,240,0.3)');
  glassGrad.addColorStop(1, 'rgba(203,213,225,0.5)');
  ctx.fillStyle=glassGrad;
  roundRect(ctx, cylX, cylBaseY-cylH, cylW, cylH, 6, glassGrad, 0);
  ctx.strokeStyle='#94a3b8'; ctx.lineWidth=1.5;
  roundRect(ctx, cylX, cylBaseY-cylH, cylW, cylH, 6, null, 1);

  // 刻度线和数字
  var maxVol = 100; // mL
  ctx.font='bold 10px sans-serif'; ctx.textAlign='right';
  for(var ci=0; ci<=maxVol; ci+=10) {
    var cy = cylBaseY - (ci/maxVol)*cylH;
    var isMajor = ci % 20 === 0;
    ctx.fillStyle=isMajor ? '#475569' : '#94a3b8';
    ctx.fillRect(cylX - (isMajor?8:4), cy, isMajor?6:3, 1);
    if (isMajor) {
      ctx.fillText(ci.toString(), cylX-10, cy+4);
    }
  }
  // 单位标注
  ctx.fillStyle='#64748b'; ctx.font='10px sans-serif'; ctx.textAlign='left';
  ctx.fillText('mL', cylX+cylW+4, cylBaseY-cylH+16);

  // 水
  var waterLevelRatio = waterBaseLevel;
  if (phase >= 3) {
    var immerseProg = (phase === 3) ? progress : 1;
    waterLevelRatio = waterBaseLevel + (waterRiseLevel - waterBaseLevel) * immerseProg;
  }
  var waterH = cylH * waterLevelRatio;
  var waterTopY = cylBaseY - waterH;
  // 水体渐变
  var waterGrad = ctx.createLinearGradient(cylX+cylWallL, waterTopY, cylX+cylW-cylWallR, cylBaseY);
  waterGrad.addColorStop(0, 'rgba(96,165,250,0.45)');
  waterGrad.addColorStop(0.5, 'rgba(59,130,246,0.55)');
  waterGrad.addColorStop(1, 'rgba(37,99,235,0.65)');
  ctx.fillStyle=waterGrad;
  ctx.beginPath();
  roundRect(ctx, cylX+cylWallL, waterTopY, cylW-cylWallL-cylWallR, waterH-2, 2);
  ctx.fill();
  // 水面高光
  ctx.fillStyle='rgba(255,255,255,0.3)';
  ctx.fillRect(cylX+cylWallL+2, waterTopY, cylW-cylWallL-cylWallR-4, 3);
  // 水面波纹
  if (phase >= 3 && (phase === 3 ? progress < 1 : false)) {
    var waveAmp = (1-progress)*3;
    ctx.strokeStyle='rgba(255,255,255,0.4)'; ctx.lineWidth=1;
    ctx.beginPath();
    for(var wx=0;wx<cylW-8;wx+=2) {
      var wy = waterTopY + Math.sin(wx*0.5+t*8)*waveAmp;
      if(wx===0) ctx.moveTo(cylX+cylWallL+4+wx, wy);
      else ctx.lineTo(cylX+cylWallL+4+wx, wy);
    }
    ctx.stroke();
  }

  // V读数标签
  var currentV = 40; // 初始水体积
  var finalV = 60;  // 最终总体积
  if (phase >= 3) {
    var vProgress = (phase === 3) ? progress : 1;
    currentV = Math.round(40 + (finalV-40) * vProgress);
  }
  var objV = Math.max(0, currentV - 40);
  ctx.save();
  ctx.fillStyle = 'rgba(37,99,235,0.07)';
  roundRect(ctx, cylX-5, cylBaseY+8, cylW+10, 22, 5, null, 0);
  ctx.fillStyle='#2563eb'; ctx.font='bold 13px sans-serif'; ctx.textAlign='center';
  if (phase < 3) {
    ctx.fillText('V\u521d=' + currentV + 'mL', cylX+cylW/2, cylBaseY+24);
  } else {
    ctx.fillText('V\u603b=' + currentV + 'mL  V\u7269=' + objV + 'cm\xb3', cylX+cylW/2, cylBaseY+24);
  }
  ctx.textAlign='left';
  ctx.restore();

  // ====== 飞行的物体（阶段2→3） ======
  if (phase === 2 || (phase === 3 && progress < 1)) {
    var flyProgress = (phase === 2) ? progress : (phase===3 ? 1-easeOut(1-progress) : 0);
    // 从天平左侧飞到量筒上方再落入水中
    var startX = scaleCX - 12;
    var startY = scaleCY - 25 - objSize;
    var endX = cylX + cylW/2 - objSize/2;
    var endY = cylBaseY - waterH + objSize*0.3;
    var midX = (startX + endX) / 2;
    var midY = Math.min(startY, endY) - 30; // 抛物线顶点
    
    // 二次贝塞尔曲线插值
    var flyX = (1-flyProgress)*(1-flyProgress)*startX + 2*(1-flyProgress)*flyProgress*midX + flyProgress*flyProgress*endX;
    var flyY = (1-flyProgress)*(1-flyProgress)*startY + 2*(1-flyProgress)*flyProgress*midY + flyProgress*flyProgress*endY;
    
    ctx.save();
    ctx.globalAlpha = (phase===2?progress:(phase===3?(1-progress):1));
    // 铝块飞行中
    var flyAlGrad = ctx.createRadialGradient(flyX+objSize/3, flyY+objSize/3, 2, flyX+objSize/2, flyY+objSize/2, objSize/2);
    flyAlGrad.addColorStop(0, '#93c5fd'); flyAlGrad.addColorStop(0.5, '#3b82f6'); flyAlGrad.addColorStop(1, '#1e40af');
    roundRect(ctx, flyX, flyY, objSize, objSize, 3, flyAlGrad, 0);
    // 运动尾迹
    ctx.strokeStyle='rgba(59,130,246,0.2)'; ctx.lineWidth=3;
    ctx.setLineDash([4,4]);
    ctx.beginPath(); ctx.moveTo(startX, startY); ctx.quadraticCurveTo(midX, midY, flyX, flyY); ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();
    
    // 已浸入水中的部分（阶段3）
    if (phase === 3 && progress > 0.3) {
      var immerseP = (progress-0.3)/0.7;
      ctx.globalAlpha = immerseP;
      var imAlGrad = ctx.createLinearGradient(endX, endY, endX+objSize, endY+objSize);
      imAlGrad.addColorStop(0, '#60a5fa'); imAlGrad.addColorStop(0.5, '#2563eb'); imAlGrad.addColorStop(1, '#1d4ed8');
      roundRect(ctx, endX, waterTopY+(waterH-objSize*0.7)*(1-immerseP), objSize, objSize, 3, imAlGrad, 0);
      // 折射偏移效果
      ctx.globalAlpha = immerseP*0.3;
      ctx.fillStyle='rgba(255,255,255,0.15)';
      roundRect(ctx, endX+2, waterTopY+(waterH-objSize*0.7)*(1-immerseP)+3, objSize-6, objSize-6, 2, null, 0);
    }
  } else if (phase >= 4) {
    // 最终状态：在量筒底部
    ctx.save();
    var finalAlGrad = ctx.createLinearGradient(cylX+cylW/2-objSize/2, cylBaseY-waterH+5,
                                               cylX+cylW/2+objSize/2, cylBaseY-waterH+5+objSize);
    finalAlGrad.addColorStop(0, '#60a5fa'); finalAlGrad.addColorStop(0.5, '#2563eb'); finalAlGrad.addColorStop(1, '#1d4ed8');
    roundRect(ctx, cylX+cylW/2-objSize/2, cylBaseY-waterH+5, objSize, objSize, 3, finalAlGrad, 0);
    // 水下折射效果
    ctx.fillStyle='rgba(255,255,255,0.12)';
    roundRect(ctx, cylX+cylW/2-objSize/2+3, cylBaseY-waterH+8, objSize-6, objSize-6, 2, null, 0);
    ctx.restore();
  }
  
  ctx.restore(); // 恢复全局

  // ====== 阶段提示 ======
  var tipText='', tipColor='#64748b';
  switch(phase) {
    case 0:
      tipText='\u2460 \u51c6\u5907\uff1a\u88ab\u6d4b\u7269\u4f53 \u2014\u2014 \u94dd\u5757(Al)'; tipColor='#3b82f6'; break;
    case 1:
      tipText='\u2461 \u7528\u5929\u5e73\u6d4b\u91cf\u8d28\u91cf m'; tipColor='#dc2626'; break;
    case 2:
      tipText='\u2462 \u5c06\u7269\u4f79\u653e\u5165\u91cf\u7b52'; tipColor='#8b5cf6'; break;
    case 3:
      tipText='\u2463 \u8bb0\u5f55\u4f53\u79ef V = V\u603b - V\u5219'; tipColor='#2563eb'; break;
    case 4:
      tipText='\u2713 \u8ba1\u7b97\u5bc6\u5ea6 \u03c1 = m/V'; tipColor='#059669'; break;
  }
  ctx.save();
  var tipW = w*0.46, tipX=w*0.03, tipY=h*0.03;
  ctx.fillStyle=hexToRgba(tipColor, 0.07);
  roundRect(ctx, tipX, tipY, tipW, 24, 5, null, 0);
  ctx.strokeStyle=hexToRgba(tipColor, 0.25); ctx.lineWidth=1;
  roundRect(ctx, tipX, tipY, tipW, 24, 5, null, 1);
  ctx.restore();
  drawText(ctx, tipText, tipX+tipW/2, tipY+16, {size:'11', bold:true, align:'center', color:tipColor});

  // ====== 数据面板 ======
  var panelItems=[];
  var rhoVal = (54/20).toFixed(2); // ρ=m/V=54g/20cm³=2.70g/cm³

  if (phase <= 0) {
    panelItems.push({text: '\u6d4b\u91cf\u6b65\u9aa4\uff1am(\u5929\u5e73) \u2192 V(\u91cf\u7b52) \u2192 \u03c1=m/V', xOff:14,yOff:13,color:'#475569',size:'11'});
    panelItems.push({text: '\u88ab\u6d4b\u7269\u4f3a\uff1a\u94dd\u5757 (Al)', xOff:14,yOff:29,color:'#3b82f6',size:'10'});
  } else if (phase === 1) {
    panelItems.push({text: '\u2461 \u5929\u5e73\u793a\u6570\uff1am = 54 g', xOff:14,yOff:13,color:'#dc2626',size:'12',bold:true});
    panelItems.push({text: '\u786c\u7801\uff1a50g + 4g = 54g | \u6a2a\u6881\u5e73\u8861', xOff:14,yOff:29,color:'#94a3b8',size:'10'});
  } else if (phase === 2) {
    panelItems.push({text: '\u2462 \u79fb\u5165\u91cf\u7b52...', xOff:14,yOff:13,color:'#8b5cf6',size:'11',bold:true});
    panelItems.push({text: 'm = 54g (\u5df2\u77e5)', xOff:14,yOff:29,color:'#dc2626',size:'10'});
  } else if (phase === 3) {
    var cv = Math.round(40 + 20*((phase===3)?progress:1));
    panelItems.push({text: '\u2463 \u91cf\u7b52\u793a\u6570\uff1aV\u603b=' + cv + 'mL  V\u7269=' + Math.max(0,cv-40) + 'cm\xb3', xOff:14,yOff:13,color:'#2563eb',size:'11',bold:true});
    panelItems.push({text: 'm = 54g | V\u5219=40mL \u2192 \u03c1 = m/V', xOff:14,yOff:29,color:'#64748b',size:'10'});
  } else {
    panelItems.push({text: '\u2713 \u7ed3\u679c\uff1a\u03c1 = m/V = 54g / 20cm\xb3 = 2.70 g/cm\xb3', xOff:14,yOff:13,color:'#059669',size:'11',bold:true});
    panelItems.push({text: '\u8be5\u7269\u4f53\u4e3a \u94dd(Al)\uff0c\u5bc6\u5ea6 2.70 g/cm\xb3', xOff:14,yOff:29,color:'#2563eb',size:'11'});
    panelItems.push({text: '\u6ce8\u610f\uff1a1 g/cm\xb3 = 1\u00d710\xb3 kg/m\xb3', xOff:14,yOff:45,color:'#94a3b8',size:'9'});
  }

  drawExpPanel(ctx, w, h, panelItems, { panelY: 0.71 });

  data.mass = 54;
  data.volume = 20;
  data.density = parseFloat(rhoVal);
}

// ---- 辅助函数 ----

function _drawScalePan(ctx, x, y, fillC, strokeC) {
  // 托盘底
  ctx.fillStyle = fillC;
  ctx.beginPath();
  ctx.ellipse(x, y+8, 22, 7, 0, 0, Math.PI*2);
  ctx.fill();
  ctx.strokeStyle = strokeC; ctx.lineWidth=1; ctx.stroke();
  // 托盘边缘
  ctx.strokeStyle = strokeC; ctx.lineWidth=1.5;
  ctx.beginPath(); ctx.ellipse(x, y+8, 22, 7, 0, 0, Math.PI*2); ctx.stroke();
}

function _drawWeight(ctx, x, y, r, color, label) {
  // 砝码（圆柱形）
  var wg = ctx.createRadialGradient(x-r*0.3,y-r*0.3,1, x,y,r);
  wg.addColorStop(0, lightenColor(color,40));
  wg.addColorStop(0.6, color);
  wg.addColorStop(1, darkenColor(color,20));
  ctx.fillStyle = wg;
  ctx.beginPath();
  roundRect(ctx, x-r, y-r*0.8, r*2, r*1.6, 2);
  ctx.fill();
  ctx.strokeStyle = darkenColor(color,30); ctx.lineWidth=0.5; ctx.stroke();
  // 提手
  ctx.beginPath();
  ctx.arc(x, y-r*0.8, r*0.35, 0, Math.PI*2);
  ctx.fillStyle=color; ctx.fill();
  // 标签
  ctx.fillStyle='#fff'; ctx.font='bold '+Math.max(7,r*0.5)+'px sans-serif'; ctx.textAlign='center';
  ctx.fillText(label, x, y+r*0.4);
}

// ---- 占位动画 ----
function animPlaceholder(ctx, w, h, t, params, data) {
  clearCanvas(ctx, w, h);
  drawParticles(ctx, w, h, t, 25, 'rgba(74,144,226,ALPHA)');
  ctx.fillStyle='#333';ctx.font='bold 20px sans-serif';ctx.textAlign='center';
  ctx.fillText('🔬 '+(_currentExpName||''), w/2,h*0.32);
  ctx.fillStyle='#666';ctx.font='14px sans-serif';
  ctx.fillText(_currentExpDesc||'', w/2,h*0.48);
  ctx.fillStyle='#999';ctx.font='12px sans-serif';
  ctx.fillText('演示动画开发中...', w/2,h*0.64);
  ctx.textAlign='left';

  // 统一底栏面板（无数据，仅按钮）
  drawExpPanel(ctx, w, h, [
    {text: '\u6f14\u793a\u52a8\u753b\u5f00\u53d1\u4e2d...', xOff: 14, yOff: 18, color: '#999', size: '12'}
  ], { panelY: 0.70 });
}

// ==================== 初始化 ====================

document.addEventListener('DOMContentLoaded', function() {
  renderExperimentList();
});
