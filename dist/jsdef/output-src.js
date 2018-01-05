var outputSrc = {
   "/src/js/Animator/Animator.js": [
      {
         "lineStart": 1,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>@file 动画渲染流程\n @author 涂强（tuqiang01@baidu.com）</p>\n"
            }
         ],
         "index": 0
      },
      {
         "lineStart": 5,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>eslint-disable */ </p>\n"
            }
         ],
         "index": 1
      },
      {
         "type": "source",
         "html": "<pre><code>\n\n<span class=\"clean\"><span class=\"hljs-keyword\">import</span> Fir <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./fir-hi'</span>;\n<span class=\"hljs-keyword\">import</span> Sec <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./sec-ripper'</span>;\n<span class=\"hljs-keyword\">import</span> Thi <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./thi-phone'</span>;\n<span class=\"hljs-keyword\">import</span> Fou <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./fou-screen'</span>;\n<span class=\"hljs-keyword\">import</span> Fif <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./fif-app'</span>;\n\n</span></code></pre>",
         "index": 2
      },
      {
         "type": "comment",
         "lineStart": 13,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>状态机 </p>\n"
            }
         ],
         "index": 3
      },
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">Status</span> {\n    constructor(){\n        <span class=\"hljs-keyword\">this</span>.<span class=\"hljs-keyword\">value</span> = <span class=\"hljs-number\">7</span>;\n    }\n    <span class=\"hljs-keyword\">get</span>(){\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.<span class=\"hljs-keyword\">value</span>;\n    }\n    update(){\n        <span class=\"hljs-keyword\">this</span>.<span class=\"hljs-keyword\">value</span>++;\n    }\n}\n<span class=\"hljs-keyword\">const</span> status = <span class=\"hljs-keyword\">new</span> Status();\n\n</code></pre>",
         "index": 4
      },
      {
         "type": "comment",
         "lineStart": 27,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>timer </p>\n"
            }
         ],
         "index": 5
      },
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">Timer</span> </span>{\n    <span class=\"hljs-keyword\">constructor</span>(){\n</code></pre>",
         "index": 6
      },
      {
         "type": "comment",
         "lineStart": 30,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>变速率 </p>\n"
            }
         ],
         "index": 7
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-built_in\">this</span>.timescale = <span class=\"hljs-number\">1</span>;\n        <span class=\"hljs-built_in\">this</span>.clock = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-type\">THREE</span>.Clock();\n</code></pre>",
         "index": 8
      },
      {
         "type": "comment",
         "lineStart": 33,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>变动秒数 </p>\n"
            }
         ],
         "index": 9
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-keyword\">this</span>.deltaTimeSeconds = <span class=\"hljs-keyword\">this</span>.clock.getDelta() * <span class=\"hljs-keyword\">this</span>.timescale;\n</code></pre>",
         "index": 10
      },
      {
         "type": "comment",
         "lineStart": 35,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>变动毫秒数 </p>\n"
            }
         ],
         "index": 11
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-keyword\">this</span>.deltaTimeMilliseconds = <span class=\"hljs-keyword\">this</span>.deltaTimeSeconds * <span class=\"hljs-number\">1000</span>;\n</code></pre>",
         "index": 12
      },
      {
         "type": "comment",
         "lineStart": 37,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>经过的帧数 </p>\n"
            }
         ],
         "index": 13
      },
      {
         "type": "comment",
         "lineStart": 38,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>this.deltaTimeNormal = this.deltaTimeMilliseconds / (1000 / 60); </p>\n"
            }
         ],
         "index": 14
      },
      {
         "type": "comment",
         "lineStart": 39,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>经过的毫秒数 </p>\n"
            }
         ],
         "index": 15
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-keyword\">this</span>.elapsedMilliseconds = <span class=\"hljs-number\">0</span>;\n    }\n    updateTime(){\n        <span class=\"hljs-keyword\">this</span>.deltaTimeSeconds = <span class=\"hljs-keyword\">this</span>.clock.getDelta();\n        <span class=\"hljs-keyword\">this</span>.deltaTimeMilliseconds = <span class=\"hljs-keyword\">this</span>.deltaTimeSeconds * <span class=\"hljs-number\">1000</span>;\n</code></pre>",
         "index": 16
      },
      {
         "type": "comment",
         "lineStart": 45,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>this.deltaTimeNormal = this.deltaTimeMilliseconds / (1000 / 60); </p>\n"
            }
         ],
         "index": 17
      },
      {
         "type": "source",
         "html": "<pre><code>        this.elapsedMilliseconds += this.deltaTimeMilliseconds;\n    }\n}\nconst timer = new Timer();\n\n\n<span class=\"hljs-builtin-name\">export</span><span class=\"hljs-built_in\"> default </span>class Animator {\n    constructor(particles, module) {\n</code></pre>",
         "index": 18
      },
      {
         "type": "comment",
         "lineStart": 54,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>TODO 分离 模型制作与渲染</p>\n"
            }
         ],
         "index": 19
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-keyword\">this</span>.moduleGroup = {\n            randomFir: module[<span class=\"hljs-number\">0</span>],\n            randomSec: {},\n            moduleFir: module[<span class=\"hljs-number\">1</span>],\n            moduleSec: {},\n            moduleThi: module[<span class=\"hljs-number\">2</span>],\n            moduleFou: module[<span class=\"hljs-number\">3</span>],\n            moduleFif: module[<span class=\"hljs-number\">4</span>]\n        }\n        <span class=\"hljs-keyword\">this</span>.particles = particles;\n        <span class=\"hljs-keyword\">this</span>.twer = {};\n\n        <span class=\"hljs-keyword\">this</span>.createModule = () =&gt; {\n            <span class=\"hljs-keyword\">this</span>.getFir = new Fir(particles, <span class=\"hljs-keyword\">this</span>.moduleGroup, timer)\n            <span class=\"hljs-keyword\">this</span>.getSec = new Sec(particles, <span class=\"hljs-keyword\">this</span>.moduleGroup, timer)\n            <span class=\"hljs-keyword\">this</span>.getThi = new Thi(particles, <span class=\"hljs-keyword\">this</span>.moduleGroup, timer)\n            <span class=\"hljs-keyword\">this</span>.getFou = new Fou(particles, <span class=\"hljs-keyword\">this</span>.moduleGroup, timer)\n            <span class=\"hljs-keyword\">this</span>.getFif = new Fif(particles, <span class=\"hljs-keyword\">this</span>.moduleGroup, timer)\n        }\n\n        <span class=\"hljs-keyword\">this</span>.initTween = () =&gt;{\n            <span class=\"hljs-keyword\">this</span>.twer.createFirst = <span class=\"hljs-keyword\">this</span>.getFir.transin().onComplete(() =&gt; status.update())\n\n            <span class=\"hljs-keyword\">this</span>.twer.createSecond = {\n                start: () =&gt; {\n                    <span class=\"hljs-keyword\">this</span>.getSec.transout().chain(<span class=\"hljs-keyword\">this</span>.getSec.transin().position)\n                        .start();\n\n                    <span class=\"hljs-keyword\">this</span>.getSec.transin().size.delay(<span class=\"hljs-number\">2000</span>)\n                        .start()\n                }\n            };\n\n            <span class=\"hljs-keyword\">this</span>.twer.createThird = <span class=\"hljs-keyword\">this</span>.getThi.transout()\n                .chain(<span class=\"hljs-keyword\">this</span>.getThi.transin().onComplete(() =&gt; status.update()))\n\n            <span class=\"hljs-keyword\">this</span>.twer.createFourth = <span class=\"hljs-keyword\">this</span>.getFou.transout()\n                .chain(<span class=\"hljs-keyword\">this</span>.getFou.transin().onComplete(() =&gt; status.update()))\n\n            <span class=\"hljs-keyword\">this</span>.twer.createFifth = <span class=\"hljs-keyword\">this</span>.getFif.transout()\n                .chain(<span class=\"hljs-keyword\">this</span>.getFif.transin().onComplete(() =&gt; status.update()))\n\n\n        }\n        <span class=\"hljs-keyword\">this</span>.createModule();\n        <span class=\"hljs-keyword\">this</span>.initTween();\n    }\n\n    update() {\n</code></pre>",
         "index": 20
      },
      {
         "type": "comment",
         "lineStart": 104,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>console.log(status.get()) </p>\n"
            }
         ],
         "index": 21
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-built_in\">switch</span> (status.<span class=\"hljs-built_in\">get</span>()) {\n</code></pre>",
         "index": 22
      },
      {
         "type": "comment",
         "lineStart": 106,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>开始构建himodule </p>\n"
            }
         ],
         "index": 23
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-selector-tag\">case</span> 1:\n                <span class=\"hljs-selector-tag\">this</span><span class=\"hljs-selector-class\">.twer</span><span class=\"hljs-selector-class\">.createFirst</span><span class=\"hljs-selector-class\">.start</span>();\n                <span class=\"hljs-selector-tag\">status</span><span class=\"hljs-selector-class\">.update</span>();\n                <span class=\"hljs-selector-tag\">break</span>;\n</code></pre>",
         "index": 24
      },
      {
         "type": "comment",
         "lineStart": 111,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>case 2 构建进行中 </p>\n"
            }
         ],
         "index": 25
      },
      {
         "type": "comment",
         "lineStart": 112,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>himodule 构建完成，开始进行动画 </p>\n"
            }
         ],
         "index": 26
      },
      {
         "type": "source",
         "html": "<pre><code>            case <span class=\"hljs-number\">3</span>:\n                <span class=\"hljs-keyword\">this</span>.getFir.update();\n                <span class=\"hljs-keyword\">break</span>;\n</code></pre>",
         "index": 27
      },
      {
         "type": "comment",
         "lineStart": 116,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>himodule 淡出 开始构建语音输入module </p>\n"
            }
         ],
         "index": 28
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-selector-tag\">case</span> 4:\n                <span class=\"hljs-selector-tag\">this</span><span class=\"hljs-selector-class\">.twer</span><span class=\"hljs-selector-class\">.createSecond</span><span class=\"hljs-selector-class\">.start</span>();\n                <span class=\"hljs-selector-tag\">status</span><span class=\"hljs-selector-class\">.update</span>();\n                <span class=\"hljs-selector-tag\">break</span>;\n</code></pre>",
         "index": 29
      },
      {
         "type": "comment",
         "lineStart": 121,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>构建进行中 </p>\n"
            }
         ],
         "index": 30
      },
      {
         "type": "source",
         "html": "<pre><code>            case <span class=\"hljs-number\">5</span>:\n                <span class=\"hljs-keyword\">this</span>.getSec.isTraninComplete(timer,status);\n                <span class=\"hljs-keyword\">break</span>;\n</code></pre>",
         "index": 31
      },
      {
         "type": "comment",
         "lineStart": 125,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>构建完成，开始进行语音模块动画 </p>\n"
            }
         ],
         "index": 32
      },
      {
         "type": "source",
         "html": "<pre><code>            case <span class=\"hljs-number\">6</span>:\n                <span class=\"hljs-keyword\">this</span>.getSec.update();\n                <span class=\"hljs-keyword\">break</span>;\n</code></pre>",
         "index": 33
      },
      {
         "type": "comment",
         "lineStart": 129,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>语音模块淡出，构建beep模型 </p>\n"
            }
         ],
         "index": 34
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-selector-tag\">case</span> 7:\n                <span class=\"hljs-selector-tag\">this</span><span class=\"hljs-selector-class\">.twer</span><span class=\"hljs-selector-class\">.createThird</span><span class=\"hljs-selector-class\">.start</span>();\n                <span class=\"hljs-selector-tag\">status</span><span class=\"hljs-selector-class\">.update</span>();\n                <span class=\"hljs-selector-tag\">break</span>;\n</code></pre>",
         "index": 35
      },
      {
         "type": "comment",
         "lineStart": 134,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>case 8 构建进行中 </p>\n"
            }
         ],
         "index": 36
      },
      {
         "type": "comment",
         "lineStart": 135,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>beep构建完成，开始进行beep动画 </p>\n"
            }
         ],
         "index": 37
      },
      {
         "type": "source",
         "html": "<pre><code>            case <span class=\"hljs-number\">9</span>:\n                <span class=\"hljs-keyword\">this</span>.getThi.update();\n                <span class=\"hljs-keyword\">break</span>;\n</code></pre>",
         "index": 38
      },
      {
         "type": "comment",
         "lineStart": 139,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>beep模块淡出，构建第三幕动画 </p>\n"
            }
         ],
         "index": 39
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-selector-tag\">case</span> 10:\n                <span class=\"hljs-selector-tag\">this</span><span class=\"hljs-selector-class\">.twer</span><span class=\"hljs-selector-class\">.createFourth</span><span class=\"hljs-selector-class\">.start</span>();\n                <span class=\"hljs-selector-tag\">status</span><span class=\"hljs-selector-class\">.update</span>();\n                <span class=\"hljs-selector-tag\">break</span>;\n</code></pre>",
         "index": 40
      },
      {
         "type": "comment",
         "lineStart": 144,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>case11构建进行中 </p>\n"
            }
         ],
         "index": 41
      },
      {
         "type": "comment",
         "lineStart": 145,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>第三幕模型构建完成，开始动画 </p>\n"
            }
         ],
         "index": 42
      },
      {
         "type": "source",
         "html": "<pre><code>            case <span class=\"hljs-number\">12</span>:\n                <span class=\"hljs-keyword\">this</span>.getFou.update();\n                <span class=\"hljs-keyword\">break</span>;\n</code></pre>",
         "index": 43
      },
      {
         "type": "comment",
         "lineStart": 149,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>透屏模块淡出 加载应用模块 </p>\n"
            }
         ],
         "index": 44
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-selector-tag\">case</span> 13:\n                <span class=\"hljs-selector-tag\">this</span><span class=\"hljs-selector-class\">.twer</span><span class=\"hljs-selector-class\">.createFifth</span><span class=\"hljs-selector-class\">.start</span>();\n                <span class=\"hljs-selector-tag\">status</span><span class=\"hljs-selector-class\">.update</span>();\n                <span class=\"hljs-selector-tag\">break</span>;\n</code></pre>",
         "index": 45
      },
      {
         "type": "comment",
         "lineStart": 154,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>case 14 构建进行中 </p>\n"
            }
         ],
         "index": 46
      },
      {
         "type": "source",
         "html": "<pre><code>            case <span class=\"hljs-number\">15</span>:\n                <span class=\"hljs-keyword\">this</span>.getFif.update();\n                <span class=\"hljs-keyword\">break</span>;\n</code></pre>",
         "index": 47
      },
      {
         "type": "comment",
         "lineStart": 158,
         "api": [],
         "index": 48
      },
      {
         "type": "comment",
         "lineStart": 159,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>this.getFif.update();     </p>\n"
            }
         ],
         "index": 49
      },
      {
         "type": "comment",
         "lineStart": 160,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>break;     </p>\n"
            }
         ],
         "index": 50
      },
      {
         "type": "source",
         "html": "<pre><code>        }\n\n        timer.updateTime<span class=\"hljs-comment\">()</span>;\n    }\n\n    statusUpdate<span class=\"hljs-comment\">()</span>{\n        status.update<span class=\"hljs-comment\">()</span>;\n    }\n}\n</code></pre>",
         "index": 51
      }
   ],
   "/src/js/Animator/BasicAni.js": [
      {
         "lineStart": 1,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>@file 基础转场\n @author 涂强（tuqiang01@baidu.com）</p>\n"
            }
         ],
         "index": 0
      },
      {
         "lineStart": 5,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>eslint-disable */ </p>\n"
            }
         ],
         "index": 1
      },
      {
         "type": "source",
         "html": "<pre><code>\n\n<span class=\"livescript\"><span class=\"hljs-keyword\">import</span> RandomParticles <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'../particles/RandomParticles'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">BasicTrans</span> {</span>\n    constructor(particles, <span class=\"hljs-built_in\">module</span>) {\n        <span class=\"hljs-keyword\">this</span>.particles = particles;\n        <span class=\"hljs-keyword\">this</span>.<span class=\"hljs-built_in\">module</span> = <span class=\"hljs-built_in\">module</span>;\n        <span class=\"hljs-keyword\">this</span>.SCREEN_WIDTH = <span class=\"hljs-built_in\">window</span>.innerWidth;\n        <span class=\"hljs-keyword\">this</span>.SCREEN_HEIGHT = <span class=\"hljs-built_in\">window</span>.innerHeight;\n        <span class=\"hljs-keyword\">this</span>.SCREEN_HALFX = <span class=\"hljs-built_in\">window</span>.innerWidth / <span class=\"hljs-number\">2</span>;\n        <span class=\"hljs-keyword\">this</span>.SCREEN_HALFY = <span class=\"hljs-built_in\">window</span>.innerHeight / <span class=\"hljs-number\">2</span>;\n\n        <span class=\"hljs-keyword\">const</span> randomPoints = <span class=\"hljs-keyword\">new</span> RandomParticles({\n            randomNum: <span class=\"hljs-keyword\">this</span>.<span class=\"hljs-built_in\">module</span>.randomFir.sizes.length,\n            MINPOS: -<span class=\"hljs-keyword\">this</span>.SCREEN_WIDTH / <span class=\"hljs-number\">2</span>,\n            MAXPOS: <span class=\"hljs-keyword\">this</span>.SCREEN_WIDTH / <span class=\"hljs-number\">2</span>\n        })\n</span></code></pre>",
         "index": 2
      },
      {
         "type": "comment",
         "lineStart": 23,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>获取随机点的位置大小颜色信息 </p>\n"
            }
         ],
         "index": 3
      },
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-attribute\">        const randomPonitsInfo</span> = randomPoints.getVertexInfo(); </code></pre>",
         "index": 4
      },
      {
         "type": "source",
         "html": "<pre><code>\n        <span class=\"hljs-keyword\">this</span>.randomModule = randomPonitsInfo;\n    }\n    transout(origin, <span class=\"hljs-built_in\">min</span> = <span class=\"hljs-number\">-450</span>, <span class=\"hljs-built_in\">max</span> = <span class=\"hljs-number\">450</span>) {\n        <span class=\"hljs-built_in\">return</span> <span class=\"hljs-keyword\">new</span> TWEEN.Tween(origin.positions)\n            .to(<span class=\"hljs-keyword\">this</span>.randomModule.positions, <span class=\"hljs-number\">1500</span>)\n            .<span class=\"hljs-built_in\">delay</span>(Math.<span class=\"hljs-built_in\">random</span>() * <span class=\"hljs-number\">1000</span>)\n            .onUpdate(obj =&gt; {\n                <span class=\"hljs-keyword\">this</span>.particles.changePoints(<span class=\"hljs-string\">'position'</span>, obj)\n            });\n    }\n    transin(origin) {\n        <span class=\"hljs-built_in\">return</span> <span class=\"hljs-keyword\">new</span> TWEEN.Tween(<span class=\"hljs-keyword\">this</span>.randomModule.positions)\n            .to(origin.positions, <span class=\"hljs-number\">1500</span>)\n</code></pre>",
         "index": 5
      },
      {
         "type": "comment",
         "lineStart": 38,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>.delay(Math.random() * 1000) </p>\n"
            }
         ],
         "index": 6
      },
      {
         "type": "source",
         "html": "<pre><code>            .onUpdate(<span class=\"hljs-function\"><span class=\"hljs-params\">obj</span> =&gt;</span> {\n                <span class=\"hljs-keyword\">this</span>.particles.changePoints(<span class=\"hljs-string\">'position'</span>, obj)\n            });\n    }\n</code></pre>",
         "index": 7
      },
      {
         "type": "comment",
         "lineStart": 43,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>创建一组波纹，返回对应的Array，非Float32 </p>\n"
            }
         ],
         "index": 8
      },
      {
         "type": "source",
         "html": "<pre><code>    createRippers(opts){\n        <span class=\"hljs-built_in\">let</span> {\n</code></pre>",
         "index": 9
      },
      {
         "type": "comment",
         "lineStart": 46,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>多少圈 </p>\n"
            }
         ],
         "index": 10
      },
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-built_in\">            rings,</span>\n</code></pre>",
         "index": 11
      },
      {
         "type": "comment",
         "lineStart": 48,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>基础半径 </p>\n"
            }
         ],
         "index": 12
      },
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-built_in\">            radius,</span>\n</code></pre>",
         "index": 13
      },
      {
         "type": "comment",
         "lineStart": 50,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>递增半径 </p>\n"
            }
         ],
         "index": 14
      },
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-built_in\">            radiusStep,</span>\n</code></pre>",
         "index": 15
      },
      {
         "type": "comment",
         "lineStart": 52,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>固定每圈粒子数 </p>\n"
            }
         ],
         "index": 16
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-keyword\">itemCount,\n</span></code></pre>",
         "index": 17
      },
      {
         "type": "comment",
         "lineStart": 54,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>每圈递增数量 与上参数冲突 </p>\n"
            }
         ],
         "index": 18
      },
      {
         "type": "source",
         "html": "<pre><code>            itemCountStep }\n         = opts\n        const v = new THREE.Vector3();\n        const module = {\n            positions:[],\n            angle:[],\n            radius:[],\n        }\n        <span class=\"hljs-keyword\">for</span> (let i = 0; i &lt; rings;i++){\n            const count = itemCount || Math.ceil(i * itemCountStep);\n            <span class=\"hljs-keyword\">for</span> (let j = 0; j &lt; count ; j++){\n                const angle = ( j /count) * Math.PI * 2;\n                const currentIndex = i * count + j;\n                v.x = Math.cos(angle) *<span class=\"hljs-built_in\"> radius;\n</span>                v.y = Math.sin(angle) *<span class=\"hljs-built_in\"> radius;\n</span>                v.z = 0;\n                v.toArray(module.positions, currentIndex * 3);\n                module.angle[currentIndex] = angle;\n                module.radius[currentIndex] =<span class=\"hljs-built_in\"> radius;\n</span>            }\n           <span class=\"hljs-built_in\"> radius </span>+= radiusStep;\n        }\n        return module;\n    }\n</code></pre>",
         "index": 19
      },
      {
         "type": "comment",
         "lineStart": 79,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>让粒子飞到屏幕外，完成后销毁 </p>\n"
            }
         ],
         "index": 20
      },
      {
         "type": "source",
         "html": "<pre><code>    <span class=\"hljs-selector-tag\">toTheMoon</span>(){\n\n    }\n\n}\n</code></pre>",
         "index": 21
      }
   ],
   "/src/js/Animator/fif-app.js": [
      {
         "lineStart": 1,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>@file Describe the file\n @author 涂强（tuqiang01@baidu.com）</p>\n"
            }
         ],
         "index": 0
      },
      {
         "lineStart": 5,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>eslint-disable */ </p>\n"
            }
         ],
         "index": 1
      },
      {
         "type": "source",
         "html": "<pre><code>\n\n<span class=\"javascript\"><span class=\"hljs-keyword\">import</span> BasicTrans <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./BasicAni'</span>;\n<span class=\"hljs-keyword\">import</span> _ <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'../../lib/until'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">App</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">BasicTrans</span> </span>{\n    <span class=\"hljs-keyword\">constructor</span>(particles, module, timer){\n        <span class=\"hljs-keyword\">super</span>(particles, <span class=\"hljs-built_in\">module</span>)\n        <span class=\"hljs-keyword\">this</span>.timer = timer;\n        <span class=\"hljs-keyword\">this</span>.system = <span class=\"hljs-keyword\">this</span>.module.moduleFif;\n        <span class=\"hljs-keyword\">this</span>.config = {\n            <span class=\"hljs-attr\">scaleRat</span>:<span class=\"hljs-number\">10</span>,\n        }\n        <span class=\"hljs-keyword\">this</span>.createModule= <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n            <span class=\"hljs-keyword\">const</span> length = <span class=\"hljs-keyword\">this</span>.module.randomFir.sizes.length;\n            <span class=\"hljs-keyword\">const</span> pos = <span class=\"hljs-keyword\">this</span>.system.positions.map(<span class=\"hljs-function\"><span class=\"hljs-params\">i</span> =&gt;</span> i * <span class=\"hljs-keyword\">this</span>.config.scaleRat)\n            <span class=\"hljs-keyword\">const</span> <span class=\"hljs-built_in\">module</span> = {\n</span></code></pre>",
         "index": 2
      },
      {
         "type": "comment",
         "lineStart": 22,
         "api": [],
         "index": 3
      },
      {
         "type": "source",
         "html": "<pre><code>                sizes:<span class=\"hljs-keyword\">this</span>.<span class=\"hljs-keyword\">module</span>.randomFir.sizes,\n            }\n            <span class=\"hljs-keyword\">let</span> toFullList = <span class=\"hljs-number\">_</span>.arrayStacked(length * <span class=\"hljs-number\">3</span>,pos)\n            <span class=\"hljs-keyword\">module</span>.positions = <span class=\"hljs-keyword\">new</span> Float<span class=\"hljs-number\">32</span>Array(toFullList)\n\n            <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">module</span>;\n        }\n        <span class=\"hljs-keyword\">this</span>.system =<span class=\"hljs-keyword\">this</span>.<span class=\"hljs-keyword\">module</span>.moduleFif = <span class=\"hljs-keyword\">this</span>.createModule();\n</code></pre>",
         "index": 4
      },
      {
         "type": "comment",
         "lineStart": 31,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>this.particles.changeParticles(&#39;scale&#39;, [20,20,20])</p>\n"
            }
         ],
         "index": 5
      },
      {
         "type": "source",
         "html": "<pre><code>\n    }\n    update(){\n\n    }\n    transin(){\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">super</span>.transin(<span class=\"hljs-keyword\">this</span>.system);\n    }\n    transout(){\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">super</span>.transout(<span class=\"hljs-keyword\">this</span>.module.moduleFou)\n    }\n}\n</code></pre>",
         "index": 6
      }
   ],
   "/src/js/Animator/fir-hi.js": [
      {
         "lineStart": 1,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>@file Describe the file\n @author 涂强（tuqiang01@baidu.com）</p>\n"
            }
         ],
         "index": 0
      },
      {
         "lineStart": 5,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>eslint-disable */ </p>\n"
            }
         ],
         "index": 1
      },
      {
         "type": "source",
         "html": "<pre><code>\n\n<span class=\"scala\"><span class=\"hljs-keyword\">import</span> <span class=\"hljs-type\">BasicTrans</span> from './<span class=\"hljs-type\">BasicAni</span>';\n\nexport <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">Hi</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">BasicTrans</span> </span>{\n    constructor(particles, module, timer) {\n        <span class=\"hljs-keyword\">super</span>(particles, module);\n        \n        <span class=\"hljs-keyword\">this</span>.system = module.moduleFir;\n        <span class=\"hljs-keyword\">this</span>.timer = timer;\n        <span class=\"hljs-keyword\">this</span>.config = {\n</span></code></pre>",
         "index": 2
      },
      {
         "type": "comment",
         "lineStart": 16,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>粒子闪烁概率 </p>\n"
            }
         ],
         "index": 3
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-selector-tag\">blinkPro</span><span class=\"hljs-selector-pseudo\">:.005</span>,\n</code></pre>",
         "index": 4
      },
      {
         "type": "comment",
         "lineStart": 18,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>闪烁半径 </p>\n"
            }
         ],
         "index": 5
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-selector-tag\">blinkRad</span><span class=\"hljs-selector-pseudo\">:3</span>,\n</code></pre>",
         "index": 6
      },
      {
         "type": "comment",
         "lineStart": 20,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>闪烁速度 </p>\n"
            }
         ],
         "index": 7
      },
      {
         "type": "source",
         "html": "<pre><code>            blinkSpd:<span class=\"hljs-number\">.001</span>\n        }\n        <span class=\"hljs-keyword\">this</span>.randomModule = <span class=\"hljs-keyword\">this</span>.module.randomFir;\n    }\n    update(){\n        <span class=\"hljs-keyword\">const</span> length = <span class=\"hljs-keyword\">this</span>.system.sizes.length;\n        <span class=\"hljs-keyword\">const</span> <span class=\"hljs-keyword\">module</span> = {\n            position:<span class=\"hljs-keyword\">this</span>.system.positions,\n            sizes:<span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Float32Array</span>(length),\n        };\n        <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">let</span> i = <span class=\"hljs-number\">0</span>;i &lt; length;i++){\n</code></pre>",
         "index": 8
      },
      {
         "type": "comment",
         "lineStart": 32,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>随机闪烁 </p>\n"
            }
         ],
         "index": 9
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-keyword\">const</span> <span class=\"hljs-built_in\">size</span> = <span class=\"hljs-keyword\">this</span>.system.sizes[i] || <span class=\"hljs-number\">0</span>;\n            <span class=\"hljs-keyword\">module</span>.sizes[i] = <span class=\"hljs-built_in\">size</span>;\n            <span class=\"hljs-built_in\">if</span>(Math.<span class=\"hljs-built_in\">random</span>() &lt; <span class=\"hljs-keyword\">this</span>.<span class=\"hljs-built_in\">config</span>.blinkPro){\n                <span class=\"hljs-keyword\">module</span>.sizes[i] = <span class=\"hljs-built_in\">size</span> + Math.<span class=\"hljs-built_in\">abs</span>(Math.<span class=\"hljs-built_in\">cos</span>(<span class=\"hljs-keyword\">this</span>.timer.elapsedMilliseconds * <span class=\"hljs-keyword\">this</span>.<span class=\"hljs-built_in\">config</span>.blinkSpd)) * <span class=\"hljs-keyword\">this</span>.<span class=\"hljs-built_in\">config</span>.blinkRad;\n            }\n        }\n        <span class=\"hljs-keyword\">this</span>.particles.changePoints(<span class=\"hljs-string\">'size'</span>, <span class=\"hljs-keyword\">module</span>.sizes)\n    }\n    transin() {\n        <span class=\"hljs-built_in\">return</span> super.transin(<span class=\"hljs-keyword\">this</span>.system);\n    }\n}\n</code></pre>",
         "index": 10
      }
   ],
   "/src/js/Animator/fou-screen.js": [
      {
         "lineStart": 1,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>@file Describe the file\n @author 涂强（tuqiang01@baidu.com）</p>\n"
            }
         ],
         "index": 0
      },
      {
         "lineStart": 5,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>eslint-disable */ </p>\n"
            }
         ],
         "index": 1
      },
      {
         "type": "source",
         "html": "<pre><code>\n\n<span class=\"coffeescript\"><span class=\"hljs-keyword\">import</span> BasicTrans <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./BasicAni'</span>;\n<span class=\"hljs-keyword\">import</span> Particles <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'../particles/Particles'</span>;\n<span class=\"hljs-keyword\">import</span> _ <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'../../lib/until'</span>;\n\n\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">App</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">BasicTrans</span> {</span>\n    constructor(particles, <span class=\"hljs-built_in\">module</span>, timer){\n        <span class=\"hljs-keyword\">super</span>(particles, <span class=\"hljs-built_in\">module</span>)\n        <span class=\"hljs-keyword\">this</span>.timer = timer;\n        <span class=\"hljs-keyword\">this</span>.system = <span class=\"hljs-keyword\">this</span>.<span class=\"hljs-built_in\">module</span>.moduleFou;\n        <span class=\"hljs-keyword\">this</span>.config = {\n</span></code></pre>",
         "index": 2
      },
      {
         "type": "comment",
         "lineStart": 19,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>中心圆缩放比例 </p>\n"
            }
         ],
         "index": 3
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-selector-tag\">scaleRat</span><span class=\"hljs-selector-pseudo\">:1</span>,\n</code></pre>",
         "index": 4
      },
      {
         "type": "comment",
         "lineStart": 21,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>矩形层级 </p>\n"
            }
         ],
         "index": 5
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-selector-tag\">rectCount</span><span class=\"hljs-selector-pseudo\">:14</span>,\n</code></pre>",
         "index": 6
      },
      {
         "type": "comment",
         "lineStart": 23,
         "api": [],
         "index": 7
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-selector-tag\">rectMarginTop</span><span class=\"hljs-selector-pseudo\">:.1</span>,\n            <span class=\"hljs-selector-tag\">rectMarginLeft</span><span class=\"hljs-selector-pseudo\">:.1</span>,\n</code></pre>",
         "index": 8
      },
      {
         "type": "comment",
         "lineStart": 26,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>控制长宽比，控制开口大小 </p>\n"
            }
         ],
         "index": 9
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-selector-tag\">rectMarginTopRat</span><span class=\"hljs-selector-pseudo\">:0.35</span>,\n            <span class=\"hljs-selector-tag\">rectMarginLeftRat</span><span class=\"hljs-selector-pseudo\">:1.66</span>,\n</code></pre>",
         "index": 10
      },
      {
         "type": "comment",
         "lineStart": 29,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>粒子间隔 控制长宽长度 粒子密度 </p>\n"
            }
         ],
         "index": 11
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-selector-tag\">rectMarginTopStep</span><span class=\"hljs-selector-pseudo\">:.32</span>,\n            <span class=\"hljs-selector-tag\">rectMarginLeftStep</span><span class=\"hljs-selector-pseudo\">:.2</span>,\n\n</code></pre>",
         "index": 12
      },
      {
         "type": "comment",
         "lineStart": 33,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>x轴偏移量 </p>\n"
            }
         ],
         "index": 13
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-selector-tag\">rectTopOffset</span><span class=\"hljs-selector-pseudo\">:-1</span>,\n</code></pre>",
         "index": 14
      },
      {
         "type": "comment",
         "lineStart": 35,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>长 粒子数 </p>\n"
            }
         ],
         "index": 15
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-selector-tag\">rectXCount</span><span class=\"hljs-selector-pseudo\">:30</span>,\n</code></pre>",
         "index": 16
      },
      {
         "type": "comment",
         "lineStart": 37,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>宽 粒子数 </p>\n"
            }
         ],
         "index": 17
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-selector-tag\">rectZCount</span><span class=\"hljs-selector-pseudo\">:15</span>,\n</code></pre>",
         "index": 18
      },
      {
         "type": "comment",
         "lineStart": 39,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>高度步长 </p>\n"
            }
         ],
         "index": 19
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-selector-tag\">rectYStep</span><span class=\"hljs-selector-pseudo\">:7</span>,\n\n\n</code></pre>",
         "index": 20
      },
      {
         "type": "comment",
         "lineStart": 43,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>粒子闪烁概率 </p>\n"
            }
         ],
         "index": 21
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-selector-tag\">blinkPro</span><span class=\"hljs-selector-pseudo\">:.0005</span>,\n</code></pre>",
         "index": 22
      },
      {
         "type": "comment",
         "lineStart": 45,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>闪烁半径 </p>\n"
            }
         ],
         "index": 23
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-selector-tag\">blinkRad</span><span class=\"hljs-selector-pseudo\">:3</span>,\n</code></pre>",
         "index": 24
      },
      {
         "type": "comment",
         "lineStart": 47,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>闪烁速度 </p>\n"
            }
         ],
         "index": 25
      },
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-symbol\">            blinkSpd:</span><span class=\"hljs-number\">.001</span>,\n<span class=\"hljs-symbol\">\n            rings:</span><span class=\"hljs-number\">4</span>,\n<span class=\"hljs-symbol\">            radius:</span><span class=\"hljs-number\">5</span>,\n<span class=\"hljs-symbol\">            radiusStep:</span> <span class=\"hljs-number\">5</span>,\n<span class=\"hljs-symbol\">            itemCount:</span><span class=\"hljs-number\">30</span>,\n        }\n</code></pre>",
         "index": 26
      },
      {
         "type": "comment",
         "lineStart": 55,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>生成长方形的 长 yz值固定 </p>\n"
            }
         ],
         "index": 27
      },
      {
         "type": "comment",
         "lineStart": 56,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>TODO 放在一个循坏解决</p>\n"
            }
         ],
         "index": 28
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-keyword\">this</span>.getX = <span class=\"hljs-function\">(<span class=\"hljs-params\">y,z</span>) =&gt;</span> {\n            <span class=\"hljs-keyword\">const</span> v = <span class=\"hljs-keyword\">new</span> THREE.Vector3();\n            <span class=\"hljs-keyword\">const</span> length = <span class=\"hljs-keyword\">this</span>.config.rectXCount;\n            <span class=\"hljs-keyword\">let</span> rs = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Array</span>(length);\n            <span class=\"hljs-keyword\">for</span>(<span class=\"hljs-keyword\">let</span> i = <span class=\"hljs-number\">0</span>; i &lt; length; i++){\n                v.x = (i - length /<span class=\"hljs-number\">2</span>) * <span class=\"hljs-keyword\">this</span>.config.rectMarginTop;\n                v.y = y;\n                v.z = z;\n                v.toArray(rs,i * <span class=\"hljs-number\">3</span>)\n            }\n            <span class=\"hljs-keyword\">return</span> rs;\n        }\n</code></pre>",
         "index": 29
      },
      {
         "type": "comment",
         "lineStart": 69,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>生成长方形的 宽  yx固定 </p>\n"
            }
         ],
         "index": 30
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-keyword\">this</span>.getY = <span class=\"hljs-function\">(<span class=\"hljs-params\">y,x</span>) =&gt;</span> {\n            <span class=\"hljs-keyword\">const</span> v = <span class=\"hljs-keyword\">new</span> THREE.Vector3();\n            <span class=\"hljs-keyword\">const</span> length = <span class=\"hljs-keyword\">this</span>.config.rectZCount;\n            <span class=\"hljs-keyword\">let</span> rs = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Array</span>(length);\n            <span class=\"hljs-keyword\">for</span>(<span class=\"hljs-keyword\">let</span> i = <span class=\"hljs-number\">0</span>; i &lt; length; i++){\n                v.z = (i - length /<span class=\"hljs-number\">2</span>) * <span class=\"hljs-keyword\">this</span>.config.rectMarginLeft;\n                v.y = y;\n                v.x = x;\n                v.toArray(rs,i * <span class=\"hljs-number\">3</span>)\n            }\n            <span class=\"hljs-keyword\">return</span> rs;\n        }\n</code></pre>",
         "index": 31
      },
      {
         "type": "comment",
         "lineStart": 82,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>生成长方形的 宽 x轴固定 </p>\n"
            }
         ],
         "index": 32
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-keyword\">this</span>.createRect = () =&gt; {\n\n            let rs = [];\n\n            <span class=\"hljs-keyword\">for</span> (let i = <span class=\"hljs-number\">0</span>;i &lt; <span class=\"hljs-keyword\">this</span>.config.rectCount;i++){\n                const basicY = i * <span class=\"hljs-keyword\">this</span>.config.rectYStep;\n                let top = <span class=\"hljs-keyword\">this</span>.getX(basicY,<span class=\"hljs-keyword\">this</span>.config.rectMarginTop * <span class=\"hljs-keyword\">this</span>.config.rectCount * <span class=\"hljs-keyword\">this</span>.config.rectMarginTopRat  + <span class=\"hljs-keyword\">this</span>.config.rectTopOffset);\n                let bottom = <span class=\"hljs-keyword\">this</span>.getX(basicY,-<span class=\"hljs-keyword\">this</span>.config.rectMarginTop * <span class=\"hljs-keyword\">this</span>.config.rectCount * <span class=\"hljs-keyword\">this</span>.config.rectMarginTopRat  + <span class=\"hljs-keyword\">this</span>.config.rectTopOffset);\n                let left = <span class=\"hljs-keyword\">this</span>.getY(basicY,<span class=\"hljs-keyword\">this</span>.config.rectMarginLeft * <span class=\"hljs-keyword\">this</span>.config.rectCount * <span class=\"hljs-keyword\">this</span>.config.rectMarginLeftRat);\n                let right = <span class=\"hljs-keyword\">this</span>.getY(basicY,-<span class=\"hljs-keyword\">this</span>.config.rectMarginLeft * <span class=\"hljs-keyword\">this</span>.config.rectCount* <span class=\"hljs-keyword\">this</span>.config.rectMarginLeftRat);\n                rs = rs.concat(top,bottom,left,right);\n                <span class=\"hljs-keyword\">this</span>.config.rectMarginTop += <span class=\"hljs-keyword\">this</span>.config.rectMarginTopStep;\n                <span class=\"hljs-keyword\">this</span>.config.rectMarginLeft += <span class=\"hljs-keyword\">this</span>.config.rectMarginLeftStep;\n            }\n            <span class=\"hljs-keyword\">return</span> rs;\n        }\n        <span class=\"hljs-keyword\">this</span>.createBall = () =&gt; {\n\n            let ballModule = <span class=\"hljs-keyword\">this</span>.module.moduleFou\n            <span class=\"hljs-keyword\">this</span>.ballModule = ballModule.getParticles()\n            <span class=\"hljs-keyword\">this</span>.ballModule.name = <span class=\"hljs-string\">'fouBall'</span>;\n            <span class=\"hljs-keyword\">this</span>.ballModule.position.y = <span class=\"hljs-number\">65</span>;\n            window.pointScene.addParticles(<span class=\"hljs-keyword\">this</span>.ballModule)\n        }\n\n</code></pre>",
         "index": 33
      },
      {
         "type": "comment",
         "lineStart": 108,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>如果ripper没有动画则应该位于主模型，否则应该新建 </p>\n"
            }
         ],
         "index": 34
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-keyword\">this</span>.createRipper = <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n            let ripper = <span class=\"hljs-keyword\">new</span> Particles();\n            let info = <span class=\"hljs-keyword\">super</span>.createRippers({\n                rings:<span class=\"hljs-keyword\">this</span>.config.rings,\n                radius:<span class=\"hljs-keyword\">this</span>.config.radius,\n                radiusStep: <span class=\"hljs-keyword\">this</span>.config.radiusStep,\n                itemCount:<span class=\"hljs-keyword\">this</span>.config.itemCount,\n            })\n        }\n\n        <span class=\"hljs-keyword\">this</span>.createModule= <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n            const length = <span class=\"hljs-keyword\">this</span>.<span class=\"hljs-built_in\">module</span>.randomFir.sizes.length;\n</code></pre>",
         "index": 35
      },
      {
         "type": "comment",
         "lineStart": 121,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>主模块 </p>\n"
            }
         ],
         "index": 36
      },
      {
         "type": "source",
         "html": "<pre><code>            let rectList = _.arrayStacked(length * <span class=\"hljs-number\">3</span>,<span class=\"hljs-keyword\">this</span>.createRect())\n            const module = {\n                positions:new Float32Array(rectList),\n                sizes:<span class=\"hljs-keyword\">this</span>.module.randomFir.sizes,\n            }\n            <span class=\"hljs-keyword\">this</span>.createBall();\n            <span class=\"hljs-keyword\">this</span>.createRipper();\n\n            <span class=\"hljs-keyword\">return</span> module;\n        }\n        <span class=\"hljs-keyword\">this</span>.system  = <span class=\"hljs-keyword\">this</span>.createModule();\n</code></pre>",
         "index": 37
      },
      {
         "type": "comment",
         "lineStart": 133,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>this.particles.changeParticles(&#39;scale&#39;, [20,20,20])</p>\n"
            }
         ],
         "index": 38
      },
      {
         "type": "source",
         "html": "<pre><code>\n    }\n    update<span class=\"hljs-comment\">()</span>{\n</code></pre>",
         "index": 39
      },
      {
         "type": "comment",
         "lineStart": 137,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>blink效果 </p>\n"
            }
         ],
         "index": 40
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-keyword\">const</span> length = <span class=\"hljs-keyword\">this</span>.system.sizes.length;\n        <span class=\"hljs-keyword\">const</span> <span class=\"hljs-keyword\">module</span> = {\n            positions:<span class=\"hljs-keyword\">this</span>.system.positions,\n            sizes:<span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Float32Array</span>(length),\n            colors:<span class=\"hljs-keyword\">this</span>.module.randomFir.colors,\n        };\n        <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">let</span> i = <span class=\"hljs-number\">0</span>;i &lt; length;i++){\n</code></pre>",
         "index": 41
      },
      {
         "type": "comment",
         "lineStart": 145,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>const trueIndex = i % </p>\n"
            }
         ],
         "index": 42
      },
      {
         "type": "comment",
         "lineStart": 146,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>随机闪烁 </p>\n"
            }
         ],
         "index": 43
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-keyword\">const</span> <span class=\"hljs-built_in\">size</span> = <span class=\"hljs-keyword\">this</span>.system.sizes[i] || <span class=\"hljs-number\">0</span>;\n            <span class=\"hljs-keyword\">module</span>.sizes[i] = <span class=\"hljs-built_in\">size</span>;\n            <span class=\"hljs-built_in\">if</span>(Math.<span class=\"hljs-built_in\">random</span>() &lt; <span class=\"hljs-keyword\">this</span>.<span class=\"hljs-built_in\">config</span>.blinkPro){\n                <span class=\"hljs-keyword\">module</span>.sizes[i] = <span class=\"hljs-built_in\">size</span> + Math.<span class=\"hljs-built_in\">abs</span>(Math.<span class=\"hljs-built_in\">cos</span>(<span class=\"hljs-keyword\">this</span>.timer.elapsedMilliseconds * <span class=\"hljs-keyword\">this</span>.<span class=\"hljs-built_in\">config</span>.blinkSpd)) * <span class=\"hljs-keyword\">this</span>.<span class=\"hljs-built_in\">config</span>.blinkRad;\n            }\n        }\n</code></pre>",
         "index": 44
      },
      {
         "type": "comment",
         "lineStart": 153,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>波纹闪动效果 </p>\n"
            }
         ],
         "index": 45
      },
      {
         "type": "comment",
         "lineStart": 156,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>debugger </p>\n"
            }
         ],
         "index": 46
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-keyword\">this</span>.particles.changePoints(<span class=\"hljs-string\">'size'</span>, module.sizes)\n    }\n    transin(){\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">super</span>.transin(<span class=\"hljs-keyword\">this</span>.system);\n    }\n    transout(){\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">super</span>.transout(<span class=\"hljs-keyword\">this</span>.module.moduleThi)\n    }\n}\n</code></pre>",
         "index": 47
      }
   ],
   "/src/js/Animator/sec-ripper.js": [
      {
         "lineStart": 1,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>@file 第二幕转场与module\n @author 涂强（tuqiang01@baidu.com）</p>\n"
            }
         ],
         "index": 0
      },
      {
         "lineStart": 5,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>eslint-disable */ </p>\n"
            }
         ],
         "index": 1
      },
      {
         "type": "source",
         "html": "<pre><code>\n<span class=\"hljs-keyword\">import</span> BasicTrans <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./BasicAni'</span>;\n<span class=\"hljs-keyword\">import</span> _ <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'../../lib/until'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> Ripper <span class=\"hljs-keyword\">extends</span> BasicTrans {\n    <span class=\"hljs-keyword\">constructor</span>(<span class=\"hljs-params\">scene, <span class=\"hljs-built_in\">module</span>, timer</span>) {\n        <span class=\"hljs-keyword\">super</span>(scene, <span class=\"hljs-keyword\">module</span>);\n        this.config = {\n            rings:<span class=\"hljs-number\">8</span>,\n            radius:<span class=\"hljs-number\">3</span>,\n            radiusStep: <span class=\"hljs-number\">5</span>,\n            itemCount:<span class=\"hljs-number\">6</span>,\n            sizeMin:<span class=\"hljs-number\">5</span>,\n            sizeMax:<span class=\"hljs-number\">20</span>,\n            sizeRat:<span class=\"hljs-number\">3</span>,\n            basicXOffset:<span class=\"hljs-number\">100</span>,\n        }\n        <span class=\"hljs-keyword\">this</span>.count = <span class=\"hljs-number\">0</span>;\n        <span class=\"hljs-keyword\">this</span>.angleList = [];\n        <span class=\"hljs-keyword\">this</span>.timer = timer;\n        <span class=\"hljs-keyword\">this</span>.createModule = <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n            <span class=\"hljs-keyword\">const</span> length = <span class=\"hljs-keyword\">this</span>.module.randomFir.sizes.length;\n            <span class=\"hljs-keyword\">const</span> <span class=\"hljs-keyword\">module</span> = {\n                positions:<span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Float32Array</span>(length * <span class=\"hljs-number\">3</span>),\n                sizes:<span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Float32Array</span>(length),\n                colors:<span class=\"hljs-keyword\">this</span>.module.randomFir.colors,\n                angle:<span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Float32Array</span>(length),\n                radius:[],\n            }\n</code></pre>",
         "index": 2
      },
      {
         "type": "comment",
         "lineStart": 34,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>vertex container </p>\n"
            }
         ],
         "index": 3
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-keyword\">const</span> <span class=\"hljs-built_in\">vertex</span> = <span class=\"hljs-keyword\">new</span> THREE.Vector3();\n            <span class=\"hljs-keyword\">for</span> (let i = <span class=\"hljs-number\">0</span>; i &lt; <span class=\"hljs-keyword\">this</span>.config.rings; i++) {\n                let count = Math.<span class=\"hljs-built_in\">ceil</span>(i * <span class=\"hljs-keyword\">this</span>.config.itemCount);\n                <span class=\"hljs-keyword\">for</span> (let j = <span class=\"hljs-number\">0</span>; j &lt; count; j++) {\n                    <span class=\"hljs-keyword\">const</span> angle = (j / count) * Math.<span class=\"hljs-literal\">PI</span> * <span class=\"hljs-number\">2</span>;\n                    <span class=\"hljs-keyword\">const</span> currentIndex = i * count + j\n                    <span class=\"hljs-built_in\">vertex</span>.x = Math.<span class=\"hljs-built_in\">cos</span>(angle) * <span class=\"hljs-keyword\">this</span>.config.radius + <span class=\"hljs-keyword\">this</span>.config.basicXOffset;\n                    <span class=\"hljs-built_in\">vertex</span>.y = Math.<span class=\"hljs-built_in\">sin</span>(angle) * <span class=\"hljs-keyword\">this</span>.config.radius;\n                    <span class=\"hljs-built_in\">vertex</span>.z = <span class=\"hljs-number\">0</span>;\n</code></pre>",
         "index": 4
      },
      {
         "type": "comment",
         "lineStart": 44,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>vertex.angle = angle; </p>\n"
            }
         ],
         "index": 5
      },
      {
         "type": "source",
         "html": "<pre><code>                    vertex.toArray(<span class=\"hljs-keyword\">module</span>.positions, (currentIndex * <span class=\"hljs-number\">3</span>));\n                    <span class=\"hljs-keyword\">module</span>.sizes[currentIndex] = _.analogy(i, <span class=\"hljs-number\">0</span>, <span class=\"hljs-keyword\">this</span>.<span class=\"hljs-built_in\">config</span>.rings, <span class=\"hljs-keyword\">this</span>.<span class=\"hljs-built_in\">config</span>.sizeMax, <span class=\"hljs-keyword\">this</span>.<span class=\"hljs-built_in\">config</span>.sizeMin);\n\n                    <span class=\"hljs-keyword\">module</span>.angle[currentIndex] = angle;\n                    <span class=\"hljs-keyword\">module</span>.radius[currentIndex] = <span class=\"hljs-keyword\">this</span>.<span class=\"hljs-built_in\">config</span>.radius;\n                    <span class=\"hljs-keyword\">this</span>.count++;\n                }\n                <span class=\"hljs-keyword\">this</span>.<span class=\"hljs-built_in\">config</span>.radius += <span class=\"hljs-keyword\">this</span>.<span class=\"hljs-built_in\">config</span>.radiusStep;\n            }\n            <span class=\"hljs-built_in\">return</span> <span class=\"hljs-keyword\">module</span>;\n        };\n\n        <span class=\"hljs-keyword\">this</span>.system = <span class=\"hljs-keyword\">this</span>.<span class=\"hljs-keyword\">module</span>.moduleSec = <span class=\"hljs-keyword\">this</span>.createModule();\n</code></pre>",
         "index": 6
      },
      {
         "type": "comment",
         "lineStart": 58,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>console.log(this.system) </p>\n"
            }
         ],
         "index": 7
      },
      {
         "type": "comment",
         "lineStart": 59,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>this.system.positions.set( [50,0,0])</p>\n"
            }
         ],
         "index": 8
      },
      {
         "type": "source",
         "html": "<pre><code>    }\n    update<span class=\"hljs-comment\">()</span>{\n</code></pre>",
         "index": 9
      },
      {
         "type": "comment",
         "lineStart": 62,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>position </p>\n"
            }
         ],
         "index": 10
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-keyword\">const</span> length = <span class=\"hljs-keyword\">this</span>.system.sizes.length;\n        <span class=\"hljs-keyword\">const</span> vertex = <span class=\"hljs-keyword\">new</span> THREE.Vector3();\n        <span class=\"hljs-keyword\">const</span> <span class=\"hljs-keyword\">module</span> = {\n            positions:<span class=\"hljs-keyword\">this</span>.system.positions,\n            sizes:<span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Float32Array</span>(length),\n</code></pre>",
         "index": 11
      },
      {
         "type": "comment",
         "lineStart": 68,
         "api": [],
         "index": 12
      },
      {
         "type": "source",
         "html": "<pre><code>            colors:this.module.randomFir.colors,\n            <span class=\"hljs-built_in\">angle</span>:[],\n        }\n        <span class=\"hljs-keyword\">for</span> (let <span class=\"hljs-built_in\">i</span> = <span class=\"hljs-number\">0</span>;<span class=\"hljs-built_in\">i</span> &lt; this.system.<span class=\"hljs-built_in\">angle</span>.<span class=\"hljs-built_in\">length</span>;<span class=\"hljs-built_in\">i</span>++){\n</code></pre>",
         "index": 13
      },
      {
         "type": "comment",
         "lineStart": 73,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>debugger </p>\n"
            }
         ],
         "index": 14
      },
      {
         "type": "source",
         "html": "<pre><code>            const angle = this.system.angle[i] || 0;\n            const<span class=\"hljs-built_in\"> radius </span>= this.system.radius[i] || this.config.radius;\n            const size = this.system.sizes[i] || 0;\n            this.system.angle[i] -= (Math.cos(this.timer.elapsedMilliseconds *  0.0025 -<span class=\"hljs-built_in\"> radius </span>* 0.15) * 0.02)\n\n\n            vertex.x = Math.cos(angle) *<span class=\"hljs-built_in\"> radius </span>+ this.config.basicXOffset;\n            vertex.y = Math.sin(angle) *<span class=\"hljs-built_in\"> radius;\n</span>            vertex.z = Math.cos(this.timer.elapsedMilliseconds* 0.005 -<span class=\"hljs-built_in\"> radius </span>* 0.3) * 5;\n\n</code></pre>",
         "index": 15
      },
      {
         "type": "comment",
         "lineStart": 84,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>console.log(angle) </p>\n"
            }
         ],
         "index": 16
      },
      {
         "type": "source",
         "html": "<pre><code>            vertex.toArray(<span class=\"hljs-built_in\">module</span>.positions, (i * <span class=\"hljs-number\">3</span>));\n\n            <span class=\"hljs-keyword\">let</span> freeScale = <span class=\"hljs-built_in\">Math</span>.cos(<span class=\"hljs-keyword\">this</span>.timer.elapsedMilliseconds * <span class=\"hljs-number\">0.005</span> - radius * <span class=\"hljs-number\">0.6</span>);\n            <span class=\"hljs-keyword\">let</span> lockScale = <span class=\"hljs-built_in\">Math</span>.abs(freeScale);\n            <span class=\"hljs-built_in\">module</span>.sizes[i] = size + lockScale * <span class=\"hljs-keyword\">this</span>.config.sizeRat;\n            <span class=\"hljs-keyword\">if</span>(<span class=\"hljs-built_in\">isNaN</span>(angle)){\n                <span class=\"hljs-keyword\">debugger</span>\n            }\n        }\n        <span class=\"hljs-keyword\">this</span>.scene.changePoints(<span class=\"hljs-string\">'position'</span>, <span class=\"hljs-built_in\">module</span>.positions);\n        <span class=\"hljs-keyword\">this</span>.scene.changePoints(<span class=\"hljs-string\">'size'</span>, <span class=\"hljs-built_in\">module</span>.sizes);\n\n        <span class=\"hljs-keyword\">this</span>.module.moduleSec = <span class=\"hljs-built_in\">module</span>;\n    }\n    transout() {\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">super</span>.transout(<span class=\"hljs-keyword\">this</span>.module.randomFir);\n    }\n    transin() {\n        <span class=\"hljs-keyword\">return</span> {\n            <span class=\"hljs-attr\">position</span>:<span class=\"hljs-keyword\">super</span>.transin(<span class=\"hljs-keyword\">this</span>.system),\n            <span class=\"hljs-attr\">size</span>:<span class=\"hljs-keyword\">new</span> TWEEN.Tween(<span class=\"hljs-keyword\">this</span>.randomModule.sizes)\n                .to(<span class=\"hljs-keyword\">this</span>.system.sizes, <span class=\"hljs-number\">2000</span>)\n                .delay(<span class=\"hljs-built_in\">Math</span>.random() * <span class=\"hljs-number\">2000</span>)\n                .onUpdate(<span class=\"hljs-function\"><span class=\"hljs-params\">obj</span> =&gt;</span> <span class=\"hljs-keyword\">this</span>.scene.changePoints(<span class=\"hljs-string\">'size'</span>, obj))\n        }\n    }\n</code></pre>",
         "index": 17
      },
      {
         "type": "comment",
         "lineStart": 111,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>由于有两个量的变化，先这样处理 </p>\n"
            }
         ],
         "index": 18
      },
      {
         "type": "source",
         "html": "<pre><code>    isTraninComplete(<span class=\"hljs-built_in\">timer</span>,<span class=\"hljs-built_in\">status</span>){\n        <span class=\"hljs-built_in\">let</span> systempos = this.<span class=\"hljs-built_in\">system</span>.positions\n        <span class=\"hljs-built_in\">let</span> randomArr = this.randomModule.positions;\n</code></pre>",
         "index": 19
      },
      {
         "type": "comment",
         "lineStart": 115,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>tweencomplete不精确 </p>\n"
            }
         ],
         "index": 20
      },
      {
         "type": "comment",
         "lineStart": 116,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>选取某粒子，判断其是否达到位置，若达到，则认为所有粒子tween动画完成 </p>\n"
            }
         ],
         "index": 21
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-keyword\">let</span> <span class=\"hljs-attr\">flag</span> = <span class=\"hljs-literal\">true</span>;\n        for (<span class=\"hljs-keyword\">let</span> <span class=\"hljs-attr\">i</span> = <span class=\"hljs-number\">0</span>;i &lt; <span class=\"hljs-number\">100</span>;i++){\n            <span class=\"hljs-keyword\">if</span>( (systempos[i] - randomArr[i]) &gt; <span class=\"hljs-number\">0.1</span>) {\n                <span class=\"hljs-attr\">flag</span> = <span class=\"hljs-literal\">false</span>;\n            }\n        }\n        <span class=\"hljs-keyword\">if</span>(flag){\n            timer.<span class=\"hljs-attr\">elapsedMilliseconds</span> = <span class=\"hljs-number\">0</span>;\n            status.update()\n        }\n    }\n}\n\n\n</code></pre>",
         "index": 22
      }
   ],
   "/src/js/Animator/thi-phone.js": [
      {
         "lineStart": 1,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>@file 第三幕转场与module\n @author 涂强（tuqiang01@baidu.com）</p>\n"
            }
         ],
         "index": 0
      },
      {
         "lineStart": 5,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>eslint-disable */ </p>\n"
            }
         ],
         "index": 1
      },
      {
         "type": "source",
         "html": "<pre><code>\n<span class=\"hljs-keyword\">import</span> Particles <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'../particles/Particles'</span>;\n<span class=\"hljs-keyword\">import</span> BasicTrans <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./BasicAni'</span>;\n<span class=\"hljs-keyword\">import</span> _ <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'../../lib/until'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">Phone</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">BasicTrans</span> {</span>\n    constructor(particles, <span class=\"hljs-built_in\">module</span>, timer) {\n        <span class=\"hljs-keyword\">super</span>(particles, <span class=\"hljs-built_in\">module</span>);\n        <span class=\"hljs-keyword\">this</span>.timer = timer;\n        <span class=\"hljs-keyword\">this</span>.system = <span class=\"hljs-keyword\">this</span>.<span class=\"hljs-built_in\">module</span>.moduleThi;\n        <span class=\"hljs-keyword\">this</span>.config = {\n</code></pre>",
         "index": 2
      },
      {
         "type": "comment",
         "lineStart": 16,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>基础缩放比例 </p>\n"
            }
         ],
         "index": 3
      },
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-symbol\">            scaleRat:</span> <span class=\"hljs-number\">20</span>,\n</code></pre>",
         "index": 4
      },
      {
         "type": "comment",
         "lineStart": 18,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>粒子闪烁概率 </p>\n"
            }
         ],
         "index": 5
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-selector-tag\">blinkPro</span>: <span class=\"hljs-selector-class\">.0005</span>,\n</code></pre>",
         "index": 6
      },
      {
         "type": "comment",
         "lineStart": 20,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>闪烁半径 </p>\n"
            }
         ],
         "index": 7
      },
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-symbol\">            blinkRad:</span> <span class=\"hljs-number\">3</span>,\n</code></pre>",
         "index": 8
      },
      {
         "type": "comment",
         "lineStart": 22,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>闪烁速度 </p>\n"
            }
         ],
         "index": 9
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-selector-tag\">blinkSpd</span>: <span class=\"hljs-selector-class\">.001</span>,\n</code></pre>",
         "index": 10
      },
      {
         "type": "comment",
         "lineStart": 24,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>30°偏移量 </p>\n"
            }
         ],
         "index": 11
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-built_in\">rotateZ</span>: -Math.<span class=\"hljs-literal\">PI</span> / <span class=\"hljs-number\">6</span>,\n</code></pre>",
         "index": 12
      },
      {
         "type": "comment",
         "lineStart": 26,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>x位置偏移量 </p>\n"
            }
         ],
         "index": 13
      },
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-symbol\">            offsetX:</span> <span class=\"hljs-number\">100</span>,\n</code></pre>",
         "index": 14
      },
      {
         "type": "comment",
         "lineStart": 28,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>角度旋转增量 </p>\n"
            }
         ],
         "index": 15
      },
      {
         "type": "source",
         "html": "<pre><code>            angleStep: Math<span class=\"hljs-selector-class\">.PI</span> / <span class=\"hljs-number\">20</span>,\n</code></pre>",
         "index": 16
      },
      {
         "type": "comment",
         "lineStart": 30,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>光晕浮动y轴增量 </p>\n"
            }
         ],
         "index": 17
      },
      {
         "type": "source",
         "html": "<pre><code>            yStep: <span class=\"hljs-number\">10</span>,\n        }\n        <span class=\"hljs-keyword\">this</span>.ringConf = {\n</code></pre>",
         "index": 18
      },
      {
         "type": "comment",
         "lineStart": 34,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>光晕数量 </p>\n"
            }
         ],
         "index": 19
      },
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-symbol\">            rings:</span> <span class=\"hljs-number\">2</span>, </code></pre>",
         "index": 20
      },
      {
         "type": "comment",
         "lineStart": 35,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>光晕半径 </p>\n"
            }
         ],
         "index": 21
      },
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-symbol\">            radius:</span> <span class=\"hljs-number\">50</span>, </code></pre>",
         "index": 22
      },
      {
         "type": "comment",
         "lineStart": 36,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>光晕粒子数 </p>\n"
            }
         ],
         "index": 23
      },
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-symbol\">            itemCount:</span> <span class=\"hljs-number\">50</span>, </code></pre>",
         "index": 24
      },
      {
         "type": "comment",
         "lineStart": 37,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>光晕y轴偏移量 </p>\n"
            }
         ],
         "index": 25
      },
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-symbol\">            yOffset:</span> <span class=\"hljs-number\">20</span>, </code></pre>",
         "index": 26
      },
      {
         "type": "comment",
         "lineStart": 38,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>光晕y递增量 </p>\n"
            }
         ],
         "index": 27
      },
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-symbol\">            stepY:</span> <span class=\"hljs-number\">30</span>, </code></pre>",
         "index": 28
      },
      {
         "type": "comment",
         "lineStart": 39,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>粒子尺寸 </p>\n"
            }
         ],
         "index": 29
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-built_in\">size</span>: <span class=\"hljs-number\">8.0</span>, </code></pre>",
         "index": 30
      },
      {
         "type": "comment",
         "lineStart": 41,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>初始化旋转角度 </p>\n"
            }
         ],
         "index": 31
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-selector-tag\">basicRotate</span>: {<span class=\"hljs-attribute\">x</span>:<span class=\"hljs-number\">0</span>, y:<span class=\"hljs-number\">0</span>, z: -<span class=\"hljs-number\">45</span> * (Math.PI / <span class=\"hljs-number\">180</span>)} </code></pre>",
         "index": 32
      },
      {
         "type": "source",
         "html": "<pre><code>        }\n\n        <span class=\"hljs-keyword\">this</span>.halo = {\n            <span class=\"hljs-attr\">positions</span>: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Float32Array</span>(),\n            <span class=\"hljs-attr\">colors</span>: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Float32Array</span>(),\n            <span class=\"hljs-attr\">sizes</span>: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Float32Array</span>()\n        }\n\n        <span class=\"hljs-keyword\">this</span>.createRing();\n\n</code></pre>",
         "index": 33
      },
      {
         "type": "comment",
         "lineStart": 52,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>模型的长度 482 </p>\n"
            }
         ],
         "index": 34
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-keyword\">this</span>.createModule = <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> { </code></pre>",
         "index": 35
      },
      {
         "type": "comment",
         "lineStart": 53,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>scale太小，进行缩放 </p>\n"
            }
         ],
         "index": 36
      },
      {
         "type": "source",
         "html": "<pre><code>            let posArr = <span class=\"hljs-keyword\">this</span>.<span class=\"hljs-keyword\">module</span>.moduleThi.positions.<span class=\"hljs-built_in\">map</span>(i =&gt; i * <span class=\"hljs-keyword\">this</span>.<span class=\"hljs-built_in\">config</span>.scaleRat);\n            let sizeArr = <span class=\"hljs-keyword\">this</span>.<span class=\"hljs-keyword\">module</span>.moduleThi.sizes;\n\n</code></pre>",
         "index": 37
      },
      {
         "type": "comment",
         "lineStart": 57,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>上个模型的粒子数 </p>\n"
            }
         ],
         "index": 38
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-keyword\">let</span> length = <span class=\"hljs-keyword\">this</span>.<span class=\"hljs-keyword\">module</span>.randomFir.sizes.length; </code></pre>",
         "index": 39
      },
      {
         "type": "source",
         "html": "<pre><code>\n            <span class=\"hljs-keyword\">const</span> <span class=\"hljs-built_in\">module</span> = {\n                <span class=\"hljs-attr\">positions</span>: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Float32Array</span>(length * <span class=\"hljs-number\">3</span>),\n                <span class=\"hljs-attr\">sizes</span>: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Float32Array</span>(length),\n                <span class=\"hljs-attr\">colors</span>: <span class=\"hljs-keyword\">this</span>.module.randomFir.colors,\n                <span class=\"hljs-attr\">angle</span>: [],\n                <span class=\"hljs-attr\">randius</span>: [],\n            }\n\n            <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">let</span> i = <span class=\"hljs-number\">0</span>; i &lt; length; i++) {\n                <span class=\"hljs-keyword\">let</span> trueIndex = i % sizeArr.length;\n                <span class=\"hljs-built_in\">module</span>.positions[i * <span class=\"hljs-number\">3</span>] = posArr[trueIndex * <span class=\"hljs-number\">3</span>];\n                <span class=\"hljs-built_in\">module</span>.positions[i * <span class=\"hljs-number\">3</span> + <span class=\"hljs-number\">1</span>] = posArr[trueIndex * <span class=\"hljs-number\">3</span> + <span class=\"hljs-number\">1</span>];\n                <span class=\"hljs-built_in\">module</span>.positions[i * <span class=\"hljs-number\">3</span> + <span class=\"hljs-number\">2</span>] = posArr[trueIndex * <span class=\"hljs-number\">3</span> + <span class=\"hljs-number\">2</span>];\n\n                <span class=\"hljs-built_in\">module</span>.sizes[i] = sizeArr[trueIndex] * <span class=\"hljs-number\">2.0</span>;\n            }\n            <span class=\"hljs-keyword\">return</span> <span class=\"hljs-built_in\">module</span>;\n        }\n        <span class=\"hljs-keyword\">this</span>.system = <span class=\"hljs-keyword\">this</span>.module.moduleThi = <span class=\"hljs-keyword\">this</span>.createModule();\n    }\n\n</code></pre>",
         "index": 40
      },
      {
         "type": "comment",
         "lineStart": 80,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>生成一个圆圈 </p>\n"
            }
         ],
         "index": 41
      },
      {
         "type": "source",
         "html": "<pre><code>    getSingleRing(radius, offsetY) {\n        <span class=\"hljs-keyword\">if</span> (!offsetY) {\n            offsetY = this.ringConf.yOffset;\n            this.ringConf.yOffset += this.ringConf.stepY;\n        }\n\n        const ponitNum =<span class=\"hljs-built_in\"> radius </span>* this.ringConf.itemCount;\n        const positions = new Float32Array(ponitNum * 3);\n        const colors = new Float32Array(ponitNum * 3);\n        const sizes = new Float32Array(ponitNum);\n\n        const vector = new THREE.Vector3();\n        const vertexsColor = new THREE.Color(1, 0, 0);\n\n        const count = this.ringConf.itemCount;\n        <span class=\"hljs-keyword\">for</span> (let i = 0; i &lt; count; i++) {\n            const angle = (i / count) * Math.PI * 2;\n            vector.x = Math.cos(angle) *<span class=\"hljs-built_in\"> radius;\n</span>            vector.z = Math.sin(angle) *<span class=\"hljs-built_in\"> radius;\n</span>            vector.y = offsetY;\n            vector.toArray(positions, i * 3);\n            vertexsColor.toArray(colors, i * 3);\n\n            sizes[i] = this.ringConf.size;\n        }\n\n        return {\n            positions,\n            colors,\n            sizes\n        }\n    }\n\n    createRing() {\n\n</code></pre>",
         "index": 42
      },
      {
         "type": "comment",
         "lineStart": 116,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>上下圆环 </p>\n"
            }
         ],
         "index": 43
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-keyword\">for</span> (let i = <span class=\"hljs-number\">0</span>; i &lt; <span class=\"hljs-keyword\">this</span>.ringConf.rings; i++) {\n            const ringInfo = <span class=\"hljs-keyword\">this</span>.getSingleRing(<span class=\"hljs-keyword\">this</span>.ringConf.radius);\n            <span class=\"hljs-keyword\">this</span>.halo.positions = _.Float32Concat(<span class=\"hljs-keyword\">this</span>.halo.positions, ringInfo.positions);\n            <span class=\"hljs-keyword\">this</span>.halo.colors = _.Float32Concat(<span class=\"hljs-keyword\">this</span>.halo.colors, ringInfo.colors);\n            <span class=\"hljs-keyword\">this</span>.halo.sizes = _.Float32Concat(<span class=\"hljs-keyword\">this</span>.halo.sizes, ringInfo.sizes);\n        }\n\n        <span class=\"hljs-keyword\">this</span>.ringParticles = new Particles();\n\n        <span class=\"hljs-keyword\">this</span>.ringParticles.setVertexInfo({\n            positions: <span class=\"hljs-keyword\">this</span>.halo.positions,\n            colors: <span class=\"hljs-keyword\">this</span>.halo.colors,\n            sizes: <span class=\"hljs-keyword\">this</span>.halo.sizes\n        });\n\n</code></pre>",
         "index": 44
      },
      {
         "type": "comment",
         "lineStart": 132,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>生成中间的圆环 </p>\n"
            }
         ],
         "index": 45
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-keyword\">this</span>.middleRingParticles = new Particles();\n        const middleRingInfo = <span class=\"hljs-keyword\">this</span>.getSingleRing(<span class=\"hljs-keyword\">this</span>.ringConf.radius, <span class=\"hljs-number\">35</span>);\n\n        <span class=\"hljs-keyword\">this</span>.middleRingParticles.setVertexInfo({\n            positions: middleRingInfo.positions,\n            colors: middleRingInfo.colors,\n            sizes: middleRingInfo.sizes\n        });\n\n        window.pointScene.addParticles(<span class=\"hljs-keyword\">this</span>.ringParticles.getParticles());\n        window.pointScene.addParticles(<span class=\"hljs-keyword\">this</span>.middleRingParticles.getParticles());\n\n</code></pre>",
         "index": 46
      },
      {
         "type": "comment",
         "lineStart": 145,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>this.ringParticles.rotate(this.ringConf.basicRotate); </p>\n"
            }
         ],
         "index": 47
      },
      {
         "type": "comment",
         "lineStart": 146,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>this.middleRingParticles.rotate(this.ringConf.basicRotate); </p>\n"
            }
         ],
         "index": 48
      },
      {
         "type": "source",
         "html": "<pre><code>    }\n\n    update() {\n        <span class=\"hljs-keyword\">const</span> length = <span class=\"hljs-keyword\">this</span>.system.sizes.length;\n        <span class=\"hljs-keyword\">const</span> v = <span class=\"hljs-keyword\">new</span> THREE.Vector3();\n        <span class=\"hljs-keyword\">const</span> <span class=\"hljs-keyword\">module</span> = {\n            positions: <span class=\"hljs-keyword\">this</span>.system.positions,\n            sizes: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Float32Array</span>(length),\n            colors: <span class=\"hljs-keyword\">this</span>.module.randomFir.colors,\n        };\n\n</code></pre>",
         "index": 49
      },
      {
         "type": "comment",
         "lineStart": 158,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>随机闪烁 </p>\n"
            }
         ],
         "index": 50
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-built_in\">for</span> (let i = <span class=\"hljs-number\">0</span>; i &lt; length; i++) {\n            <span class=\"hljs-keyword\">const</span> <span class=\"hljs-built_in\">size</span> = <span class=\"hljs-keyword\">this</span>.system.sizes[i] || <span class=\"hljs-number\">0</span>;\n            <span class=\"hljs-keyword\">module</span>.sizes[i] = <span class=\"hljs-built_in\">size</span>;\n            <span class=\"hljs-built_in\">if</span> (Math.<span class=\"hljs-built_in\">random</span>() &lt; <span class=\"hljs-keyword\">this</span>.<span class=\"hljs-built_in\">config</span>.blinkPro) {\n                <span class=\"hljs-keyword\">module</span>.sizes[i] = <span class=\"hljs-built_in\">size</span> + Math.<span class=\"hljs-built_in\">abs</span>(Math.<span class=\"hljs-built_in\">cos</span>(<span class=\"hljs-keyword\">this</span>.timer.elapsedMilliseconds * <span class=\"hljs-keyword\">this</span>.<span class=\"hljs-built_in\">config</span>.blinkSpd)) * <span class=\"hljs-keyword\">this</span>.<span class=\"hljs-built_in\">config</span>.blinkRad;\n            }\n        }\n\n</code></pre>",
         "index": 51
      },
      {
         "type": "comment",
         "lineStart": 167,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>随机更改大小，使粒子 bling bling </p>\n"
            }
         ],
         "index": 52
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-keyword\">this</span>.particles.changePoints(<span class=\"hljs-string\">'size'</span>, <span class=\"hljs-keyword\">module</span>.sizes);\n\n</code></pre>",
         "index": 53
      },
      {
         "type": "comment",
         "lineStart": 170,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>外圈旋转 </p>\n"
            }
         ],
         "index": 54
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-keyword\">const</span> angle = (<span class=\"hljs-keyword\">this</span>.timer.elapsedMilliseconds % <span class=\"hljs-number\">360</span>) * (Math.<span class=\"hljs-literal\">PI</span> / <span class=\"hljs-number\">180</span>);\n\n       \n        <span class=\"hljs-keyword\">this</span>.ringParticles.<span class=\"hljs-built_in\">rotate</span>({\n            y: angle\n        });\n        <span class=\"hljs-keyword\">this</span>.middleRingParticles.<span class=\"hljs-built_in\">rotate</span>({\n            y: -angle\n        });\n    }\n    transin() {\n</code></pre>",
         "index": 55
      },
      {
         "type": "comment",
         "lineStart": 182,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>console.log(this.randomModule,this.system) </p>\n"
            }
         ],
         "index": 56
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">super</span>.transin(<span class=\"hljs-keyword\">this</span>.system);\n    }\n    transout() {\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">super</span>.transout(<span class=\"hljs-keyword\">this</span>.module.moduleSec);\n    }\n}</code></pre>",
         "index": 57
      }
   ],
   "/src/js/PointScene.js": [
      {
         "lineStart": 1,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>@file 3D 例子场景类\n @author 陈蔓青（chenmanqing@baidu.com)</p>\n"
            }
         ],
         "index": 0
      },
      {
         "lineStart": 5,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>eslint-disable */ </p>\n"
            }
         ],
         "index": 1
      },
      {
         "lineStart": 6,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>调试模式开启的工具 */ </p>\n"
            }
         ],
         "index": 2
      },
      {
         "type": "comment",
         "lineStart": 7,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>相机控制器 </p>\n"
            }
         ],
         "index": 3
      },
      {
         "type": "source",
         "html": "<pre><code>let controls<span class=\"hljs-comment\">; </span></code></pre>",
         "index": 4
      },
      {
         "type": "comment",
         "lineStart": 8,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>检测状态的 </p>\n"
            }
         ],
         "index": 5
      },
      {
         "type": "source",
         "html": "<pre><code>let stats<span class=\"hljs-comment\">; </span></code></pre>",
         "index": 6
      },
      {
         "type": "source",
         "html": "<pre><code>\n<span class=\"hljs-built_in\">let</span> container;\n<span class=\"hljs-built_in\">let</span> <span class=\"hljs-built_in\">scene</span>;\n<span class=\"hljs-built_in\">let</span> camera;\n<span class=\"hljs-built_in\">let</span> renderer;\n\n</code></pre>",
         "index": 7
      },
      {
         "type": "comment",
         "lineStart": 15,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>粒子集合 </p>\n"
            }
         ],
         "index": 8
      },
      {
         "type": "source",
         "html": "<pre><code>let particles<span class=\"hljs-comment\">; </span></code></pre>",
         "index": 9
      },
      {
         "type": "source",
         "html": "<pre><code>\nconst PARTICLE_SIZE = <span class=\"hljs-number\">20</span><span class=\"hljs-comment\">;</span>\n\n</code></pre>",
         "index": 10
      },
      {
         "lineStart": 19,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [],
               "name": "PonitScene",
               "defHtml": " {<a data-jsdef-prop=\"Class\">Class</a>}",
               "commentHtml": "<p>粒子场景</p>\n"
            }
         ],
         "index": 11
      },
      {
         "type": "source",
         "html": "<pre><code>\n<span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">PonitScene</span> </span>{\n\n    </code></pre>",
         "index": 12
      },
      {
         "lineStart": 25,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 3,
                     "children": [],
                     "name": "dev",
                     "defHtml": " {<a data-jsdef-prop=\"boolean\">boolean</a>}",
                     "commentHtml": "<p> 是否为调试模式，包含 TrackballControls，stats，AxisHelper。很蛋疼的这里 stats 在代码里写死了 fixed 定位，如果要改就去 node_modules 把 stats.min.js 的相关样式给去了 🤷‍</p>\n"
                  },
                  {
                     "level": 3,
                     "children": [],
                     "name": "container",
                     "defHtml": " {<a data-jsdef-prop=\"DOM\">DOM</a>}",
                     "commentHtml": "<p> 容器，如果没有就新建一个 append 到 body</p>\n"
                  },
                  {
                     "level": 3,
                     "children": [],
                     "name": "renderType",
                     "defHtml": " {<a data-jsdef-prop=\"String\">String</a>}",
                     "commentHtml": "<p> 渲染方式，&#39;gpu&#39; 或者 &#39;cpu&#39;</p>\n"
                  }
               ],
               "name": "PonitScene.constructor",
               "defHtml": " <a data-jsdef-prop=\"conf\">conf</a> =&gt; <a data-jsdef-prop=\"null\">null</a>",
               "commentHtml": ""
            }
         ],
         "index": 13
      },
      {
         "type": "source",
         "html": "<pre><code>\n    <span class=\"hljs-function\"><span class=\"hljs-keyword\">constructor</span><span class=\"hljs-params\">(conf)</span> <span class=\"hljs-comment\">{\n\n        container = conf.container;\n\n        scene = new THREE.Scene();\n</span></span></code></pre>",
         "index": 14
      },
      {
         "type": "comment",
         "lineStart": 36,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>调试用 </p>\n"
            }
         ],
         "index": 15
      },
      {
         "type": "source",
         "html": "<pre><code>        window.<span class=\"hljs-built_in\">scene</span> = <span class=\"hljs-built_in\">scene</span>;\n</code></pre>",
         "index": 16
      },
      {
         "type": "comment",
         "lineStart": 38,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>scene.background = new THREE.Color( 0xcccccc ); </p>\n"
            }
         ],
         "index": 17
      },
      {
         "type": "source",
         "html": "<pre><code>\n        <span class=\"hljs-keyword\">camera</span> = new THREE.PerspectiveCamera(<span class=\"hljs-number\">45</span>, <span class=\"hljs-keyword\">window</span>.innerWidth / <span class=\"hljs-keyword\">window</span>.innerHeight, <span class=\"hljs-number\">.1</span>, <span class=\"hljs-number\">1000</span>);\n        <span class=\"hljs-keyword\">camera</span>.position.z = <span class=\"hljs-number\">290</span>;\n\n        <span class=\"hljs-keyword\">renderer</span> = new THREE.WebGLRenderer({\n</code></pre>",
         "index": 18
      },
      {
         "type": "comment",
         "lineStart": 44,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>反锯齿</p>\n"
            }
         ],
         "index": 19
      },
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-attr\">            antialias:</span> <span class=\"hljs-literal\">true</span><span class=\"hljs-string\">,</span> </code></pre>",
         "index": 20
      },
      {
         "type": "comment",
         "lineStart": 45,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>精度范围</p>\n"
            }
         ],
         "index": 21
      },
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-symbol\">            precision:</span> <span class=\"hljs-string\">\"highp\"</span>, </code></pre>",
         "index": 22
      },
      {
         "type": "comment",
         "lineStart": 46,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>是否可以设置背景色透明</p>\n"
            }
         ],
         "index": 23
      },
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-attr\">            alpha:</span> <span class=\"hljs-literal\">true</span><span class=\"hljs-string\">,</span> </code></pre>",
         "index": 24
      },
      {
         "type": "comment",
         "lineStart": 47,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>默认true ,canvas与canvas的背景或者整个页面的背景是否融合.</p>\n"
            }
         ],
         "index": 25
      },
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-attr\">            premultipliedAlpha:</span> <span class=\"hljs-literal\">true</span><span class=\"hljs-string\">,</span> </code></pre>",
         "index": 26
      },
      {
         "type": "comment",
         "lineStart": 48,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>是否支持模板缓冲</p>\n"
            }
         ],
         "index": 27
      },
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-attr\">            stencil:</span> <span class=\"hljs-literal\">false</span><span class=\"hljs-string\">,</span> </code></pre>",
         "index": 28
      },
      {
         "type": "comment",
         "lineStart": 49,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>是否保存绘图缓冲</p>\n"
            }
         ],
         "index": 29
      },
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-attr\">            preserveDrawingBuffer:</span> <span class=\"hljs-literal\">true</span><span class=\"hljs-string\">,</span> </code></pre>",
         "index": 30
      },
      {
         "type": "source",
         "html": "<pre><code>        });\n\n        <span class=\"hljs-keyword\">renderer</span>.setPixelRatio(<span class=\"hljs-keyword\">window</span>.devicePixelRatio);\n        <span class=\"hljs-keyword\">renderer</span>.setSize(<span class=\"hljs-keyword\">window</span>.innerWidth, <span class=\"hljs-keyword\">window</span>.innerHeight);\n\n        <span class=\"hljs-keyword\">container</span>.appendChild(<span class=\"hljs-keyword\">renderer</span>.domElement);\n\n        <span class=\"hljs-keyword\">if</span> (conf.dev) {\n            this.openDevTool()\n            const axes = new THREE.AxesHelper(<span class=\"hljs-number\">1000</span>);\n            scene.add(axes);\n        };\n\n    }\n\n    </code></pre>",
         "index": 31
      },
      {
         "lineStart": 65,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>调试模式，打开帧数记录和控制器 */ </p>\n"
            }
         ],
         "index": 32
      },
      {
         "type": "source",
         "html": "<pre><code>\n    <span class=\"hljs-selector-tag\">openDevTool</span>() {\n</code></pre>",
         "index": 33
      },
      {
         "type": "comment",
         "lineStart": 67,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>控制器  </p>\n"
            }
         ],
         "index": 34
      },
      {
         "type": "source",
         "html": "<pre><code>        controls = new THREE.TrackballControls(camera)<span class=\"hljs-comment\">;</span>\n        controls.rotateSpeed = <span class=\"hljs-number\">1</span>.<span class=\"hljs-number\">0</span><span class=\"hljs-comment\">;</span>\n        controls.zoomSpeed = <span class=\"hljs-number\">1</span>.<span class=\"hljs-number\">2</span><span class=\"hljs-comment\">;</span>\n        controls.panSpeed = <span class=\"hljs-number\">0</span>.<span class=\"hljs-number\">8</span><span class=\"hljs-comment\">;</span>\n        controls.noZoom = false<span class=\"hljs-comment\">;</span>\n        controls.<span class=\"hljs-keyword\">noPan </span>= false<span class=\"hljs-comment\">;</span>\n        controls.staticMoving = true<span class=\"hljs-comment\">;</span>\n        controls.dynamicDampingFactor = <span class=\"hljs-number\">0</span>.<span class=\"hljs-number\">3</span><span class=\"hljs-comment\">;</span>\n        controls.keys = [<span class=\"hljs-number\">65</span>, <span class=\"hljs-number\">83</span>, <span class=\"hljs-number\">68</span>]<span class=\"hljs-comment\">;</span>\n        controls.<span class=\"hljs-keyword\">addEventListener('change', </span>function () {\n            render()<span class=\"hljs-comment\">;</span>\n        })<span class=\"hljs-comment\">;</span>\n\n</code></pre>",
         "index": 35
      },
      {
         "type": "comment",
         "lineStart": 81,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>记录帧率  </p>\n"
            }
         ],
         "index": 36
      },
      {
         "type": "comment",
         "lineStart": 82,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>很蛋疼的这里 stats 在代码里写死了 fixed 定位 </p>\n"
            }
         ],
         "index": 37
      },
      {
         "type": "comment",
         "lineStart": 83,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>如果要改就去 node_modules 把 stats.min.js 的相关样式给去了 🤷‍ </p>\n"
            }
         ],
         "index": 38
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-keyword\">const</span> statsWrap = <span class=\"hljs-built_in\">document</span>.<span class=\"hljs-built_in\">querySelector</span>(<span class=\"hljs-string\">'.stats-wrap'</span>);\n        stats = <span class=\"hljs-keyword\">new</span> Stats();\n        statsWrap.appendChild(stats.dom);\n    }\n\n    </code></pre>",
         "index": 39
      },
      {
         "lineStart": 89,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 3,
                     "children": [],
                     "name": "verticesInfo",
                     "defHtml": " {<a data-jsdef-prop=\"Object\">Object</a>}",
                     "commentHtml": "<p> 顶点相关信息，通常为 <a data-jsdef-link=\"createRandomVertex\">createRandomVertex</a> 或者 <a data-jsdef-link=\"createModelVertex\">createModelVertex</a> 返回的信息</p>\n"
                  },
                  {
                     "level": 3,
                     "children": [],
                     "name": "material",
                     "defHtml": " {<a data-jsdef-prop=\"PointsMaterial\">PointsMaterial</a>}",
                     "commentHtml": "<p> 顶点材质，如果不传默认数值 {color: 0x888888, size: 2}</p>\n"
                  }
               ],
               "name": "PonitScene.addPonits",
               "defHtml": " (<a data-jsdef-prop=\"vertices\">vertices</a>, <a data-jsdef-prop=\"material\">material</a>) =&gt; <a data-jsdef-prop=\"null\">null</a>",
               "commentHtml": "<p>在场景中添加粒子集合</p>\n"
            }
         ],
         "index": 40
      },
      {
         "type": "source",
         "html": "<pre><code>\n    addPonits(verticesInfo, material) {\n        <span class=\"hljs-keyword\">const</span> verticesLen = verticesInfo.sizes.<span class=\"hljs-built_in\">length</span>;\n</code></pre>",
         "index": 41
      },
      {
         "type": "comment",
         "lineStart": 97,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>使用缓存几何模型 </p>\n"
            }
         ],
         "index": 42
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-keyword\">const</span> geometry = <span class=\"hljs-keyword\">new</span> THREE.BufferGeometry(); </code></pre>",
         "index": 43
      },
      {
         "type": "source",
         "html": "<pre><code>\n        geometry.addAttribute(<span class=\"hljs-string\">'position'</span>, <span class=\"hljs-keyword\">new</span> <span class=\"hljs-type\">THREE</span>.BufferAttribute(verticesInfo.positions, <span class=\"hljs-number\">3</span>));\n        geometry.addAttribute(<span class=\"hljs-string\">'customColor'</span>, <span class=\"hljs-keyword\">new</span> <span class=\"hljs-type\">THREE</span>.BufferAttribute(verticesInfo.colors, <span class=\"hljs-number\">3</span>));\n        geometry.addAttribute(<span class=\"hljs-string\">'size'</span>, <span class=\"hljs-keyword\">new</span> <span class=\"hljs-type\">THREE</span>.BufferAttribute(verticesInfo.sizes, <span class=\"hljs-number\">1</span>));\n\n        \n        <span class=\"hljs-keyword\">if</span> (!material) {\n            material = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-type\">THREE</span>.PointsMaterial({\n                color: <span class=\"hljs-type\">0x888888</span>,\n                size: <span class=\"hljs-type\">2</span>\n            });\n        }\n</code></pre>",
         "index": 44
      },
      {
         "type": "comment",
         "lineStart": 110,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>添加粒子 </p>\n"
            }
         ],
         "index": 45
      },
      {
         "type": "source",
         "html": "<pre><code>        particles = <span class=\"hljs-function\"><span class=\"hljs-keyword\">new</span> <span class=\"hljs-title\">THREE</span>.<span class=\"hljs-title\">Points</span>(geometry, material);\n        <span class=\"hljs-title\">scene</span>.<span class=\"hljs-title\">add</span>(particles);\n    }\n\n    <span class=\"hljs-title\">addNewScene</span>() {\n\n    }\n\n</span></code></pre>",
         "index": 46
      },
      {
         "type": "comment",
         "lineStart": 119,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>TODO </p>\n"
            }
         ],
         "index": 47
      },
      {
         "type": "comment",
         "lineStart": 120,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>根据屏幕计算偏移量，以及缩放信息 </p>\n"
            }
         ],
         "index": 48
      },
      {
         "type": "comment",
         "lineStart": 121,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>默认模型居中显示 </p>\n"
            }
         ],
         "index": 49
      },
      {
         "type": "comment",
         "lineStart": 122,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>（如果直接缩小粒子会显得十分密集） </p>\n"
            }
         ],
         "index": 50
      },
      {
         "lineStart": 125,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 3,
                     "children": [
                        {
                           "level": 6,
                           "children": [],
                           "name": "scale",
                           "defHtml": "",
                           "commentHtml": "<p> 缩放，默认 [0,0,0]</p>\n"
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "rotate",
                           "defHtml": "",
                           "commentHtml": "<p> 旋转，默认 [1,1,1]</p>\n"
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "translate",
                           "defHtml": "",
                           "commentHtml": "<p> 位移，默认 [0,0,0]</p>\n"
                        }
                     ],
                     "name": "type",
                     "defHtml": " {<a data-jsdef-prop=\"String\">String</a>}",
                     "commentHtml": "<p> 需要改变的粒子集合的信息</p>\n"
                  },
                  {
                     "level": 3,
                     "children": [],
                     "name": "val",
                     "defHtml": " {<a data-jsdef-prop=\"Array\">Array</a>}",
                     "commentHtml": "<p> 相关参数的数值 [x,y,z]</p>\n"
                  }
               ],
               "name": "PonitScene.changeParticles",
               "defHtml": " (<a data-jsdef-prop=\"type\">type</a>, <a data-jsdef-prop=\"val\">val</a>) =&gt; <a data-jsdef-prop=\"null\">null</a>",
               "commentHtml": "<p>改变粒子集合信息，暂时只支持缓存几何体</p>\n"
            }
         ],
         "index": 51
      },
      {
         "type": "source",
         "html": "<pre><code>\n    changeParticles(type, val) {\n        const <span class=\"hljs-attr\">method</span> = `${type}Particles`;\n        this[method](...val);\n    }\n\n    translateParticles(<span class=\"hljs-attr\">x=0,</span> <span class=\"hljs-attr\">y=0,</span> <span class=\"hljs-attr\">z=0)</span> {\n        particles.position.<span class=\"hljs-attr\">x</span> = x;\n        particles.position.<span class=\"hljs-attr\">y</span> = y;\n        particles.position.<span class=\"hljs-attr\">z</span> = z;\n    }\n    scaleParticles(<span class=\"hljs-attr\">x=1,</span> <span class=\"hljs-attr\">y=1,</span> <span class=\"hljs-attr\">z=1)</span> {\n        particles.scale.<span class=\"hljs-attr\">x</span> = x;\n        particles.scale.<span class=\"hljs-attr\">y</span> = y;\n        particles.scale.<span class=\"hljs-attr\">z</span> = z;\n    }\n    rotateParticles(<span class=\"hljs-attr\">x=0,</span> <span class=\"hljs-attr\">y=0,</span> <span class=\"hljs-attr\">z=0)</span> {\n        particles.rotation.<span class=\"hljs-attr\">x</span> = x;\n        particles.rotation.<span class=\"hljs-attr\">y</span> = y;\n        particles.rotation.<span class=\"hljs-attr\">z</span> = z;\n    }\n\n    getIndex() {\n        const <span class=\"hljs-attr\">geometry</span> = particles.geometry;\n        return geometry.getIndex();\n    }\n    setIndex() {\n</code></pre>",
         "index": 52
      },
      {
         "type": "comment",
         "lineStart": 160,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>const geometry = particles.geometry; </p>\n"
            }
         ],
         "index": 53
      },
      {
         "type": "comment",
         "lineStart": 161,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>return geometry.getIndex(); </p>\n"
            }
         ],
         "index": 54
      },
      {
         "type": "source",
         "html": "<pre><code>    }\n\n\n\n    </code></pre>",
         "index": 55
      },
      {
         "lineStart": 166,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 3,
                     "children": [],
                     "name": "randomNum",
                     "defHtml": " {<a data-jsdef-prop=\"Number\">Number</a>}",
                     "commentHtml": "<p>需要随机的粒子数量</p>\n"
                  },
                  {
                     "level": 3,
                     "children": [],
                     "name": "MINPOS",
                     "defHtml": " {<a data-jsdef-prop=\"Number\">Number</a>}",
                     "commentHtml": "<p> 最小坐标</p>\n"
                  },
                  {
                     "level": 3,
                     "children": [],
                     "name": "MAXPOS",
                     "defHtml": " {<a data-jsdef-prop=\"Number\">Number</a>}",
                     "commentHtml": "<p> 最大坐标</p>\n"
                  },
                  {
                     "level": 3,
                     "children": [],
                     "name": "verticesInfo",
                     "defHtml": " {<a data-jsdef-prop=\"Object\">Object</a>}",
                     "commentHtml": "<p> 返回顶点的存储信息，参照 <a data-jsdef-link=\"createModelVertex\">createModelVertex</a> 中的返回</p>\n"
                  }
               ],
               "name": "PonitScene.createRandomVertex",
               "defHtml": " (<a data-jsdef-prop=\"randomNum\">randomNum</a>, <a data-jsdef-prop=\"MINPOS\">MINPOS</a>, <a data-jsdef-prop=\"MAXPOS\">MAXPOS</a>) =&gt; <a data-jsdef-prop=\"verticesInfo\">verticesInfo</a>",
               "commentHtml": "<p>生成随机粒子（暂时为一正方体内）</p>\n"
            }
         ],
         "index": 56
      },
      {
         "type": "source",
         "html": "<pre><code>\n    createRandomVertex<span class=\"hljs-params\">(randomNum, <span class=\"hljs-attr\">MINPOS</span> = -100, <span class=\"hljs-attr\">MAXPOS</span> = 100)</span> {\n</code></pre>",
         "index": 57
      },
      {
         "type": "comment",
         "lineStart": 177,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>存储位置信息 </p>\n"
            }
         ],
         "index": 58
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-keyword\">const</span> randomPos = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Float32Array</span>(randomNum * <span class=\"hljs-number\">3</span>); </code></pre>",
         "index": 59
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-keyword\">const</span> colors = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Float32Array</span>(randomNum * <span class=\"hljs-number\">3</span>);\n        <span class=\"hljs-keyword\">const</span> sizes = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Float32Array</span>(randomNum);\n\n        <span class=\"hljs-keyword\">const</span> <span class=\"hljs-built_in\">color</span> = <span class=\"hljs-keyword\">new</span> THREE.Color();\n        <span class=\"hljs-keyword\">const</span> vertex = <span class=\"hljs-keyword\">new</span> THREE.Vector3();\n\n        <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">let</span> i = <span class=\"hljs-number\">0</span>, l = randomNum; i &lt; l; i++) {\n</code></pre>",
         "index": 60
      },
      {
         "type": "comment",
         "lineStart": 185,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>获取 n-m 之间的随机数： (m-n)+n </p>\n"
            }
         ],
         "index": 61
      },
      {
         "type": "comment",
         "lineStart": 186,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>-200 到 200 之间的点 </p>\n"
            }
         ],
         "index": 62
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-built_in\">vertex</span>.x = Math.<span class=\"hljs-built_in\">random</span>() * (MAXPOS - MINPOS) + MINPOS;\n            <span class=\"hljs-built_in\">vertex</span>.y = Math.<span class=\"hljs-built_in\">random</span>() * (MAXPOS - MINPOS) + MINPOS;\n            <span class=\"hljs-built_in\">vertex</span>.z = Math.<span class=\"hljs-built_in\">random</span>() * (MAXPOS - MINPOS) + MINPOS;\n            <span class=\"hljs-built_in\">vertex</span>.toArray(randomPos, i * <span class=\"hljs-number\">3</span>);\n\n</code></pre>",
         "index": 63
      },
      {
         "type": "comment",
         "lineStart": 192,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>color.setHSL(0.01 + 0.1 * (i / l), 1.0, 0.5); // 颜色 </p>\n"
            }
         ],
         "index": 64
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-selector-tag\">color</span><span class=\"hljs-selector-class\">.toArray</span>(<span class=\"hljs-selector-tag\">colors</span>, <span class=\"hljs-selector-tag\">i</span> * 3);\n\n</code></pre>",
         "index": 65
      },
      {
         "type": "comment",
         "lineStart": 195,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>大小 </p>\n"
            }
         ],
         "index": 66
      },
      {
         "type": "source",
         "html": "<pre><code>            sizes[i] = PARTICLE_SIZE * <span class=\"hljs-number\">0.2</span><span class=\"hljs-comment\">; </span></code></pre>",
         "index": 67
      },
      {
         "type": "source",
         "html": "<pre><code>        }\n        <span class=\"hljs-selector-tag\">return</span> {\n            <span class=\"hljs-attribute\">positions</span>: randomPos,\n            colors: colors,\n            sizes: sizes\n        }\n    }\n\n\n    </code></pre>",
         "index": 68
      },
      {
         "lineStart": 205,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 3,
                     "children": [],
                     "name": "vertices",
                     "defHtml": " {<a data-jsdef-prop=\"Array\">Array</a>}",
                     "commentHtml": "<p>顶点信息，格式如   [{x: 1, y: 1, z: 1}, ...]，每个顶点的信息为三维向量 THREE.Vector3();</p>\n"
                  },
                  {
                     "level": 3,
                     "children": [
                        {
                           "level": 5,
                           "children": [],
                           "name": "x",
                           "defHtml": " {<a data-jsdef-prop=\"Number\">Number</a>}",
                           "commentHtml": "<p> x 坐标偏移</p>\n"
                        },
                        {
                           "level": 5,
                           "children": [],
                           "name": "y",
                           "defHtml": " {<a data-jsdef-prop=\"Number\">Number</a>}",
                           "commentHtml": "<p> y 坐标偏移</p>\n"
                        },
                        {
                           "level": 5,
                           "children": [],
                           "name": "z",
                           "defHtml": " {<a data-jsdef-prop=\"Number\">Number</a>}",
                           "commentHtml": "<p>z 坐标偏移</p>\n"
                        }
                     ],
                     "name": "offset",
                     "defHtml": " {<a data-jsdef-prop=\"Object\">Object</a>}",
                     "commentHtml": "<p>偏移量</p>\n"
                  },
                  {
                     "level": 3,
                     "children": [
                        {
                           "level": 5,
                           "children": [],
                           "name": ".positions",
                           "defHtml": " {<a data-jsdef-prop=\"Array\">Array</a>}",
                           "commentHtml": "<p> xyz 位置数组（二位矩阵）</p>\n<p>格式如下：</p>\n<p>[      -1, -1, -1  // x,y,z</p>\n<p>-1, 0, 1</p>\n<p>...</p>\n<p>]</p>\n"
                        },
                        {
                           "level": 5,
                           "children": [],
                           "name": ".colors",
                           "defHtml": " {<a data-jsdef-prop=\"Array\">Array</a>}",
                           "commentHtml": "<p> HSL 颜色数组（二位矩阵），格式同 positions</p>\n"
                        },
                        {
                           "level": 5,
                           "children": [],
                           "name": ".sizes",
                           "defHtml": " {<a data-jsdef-prop=\"Array\">Array</a>}",
                           "commentHtml": "<p> 大小数组，例如 size[1,2,3,4,2,1,2,3];</p>\n"
                        }
                     ],
                     "name": "verticesInfo",
                     "defHtml": " {<a data-jsdef-prop=\"Object\">Object</a>}",
                     "commentHtml": "<p>返回顶点的存储信息</p>\n"
                  }
               ],
               "name": "PonitScene.createModelVertex",
               "defHtml": " (<a data-jsdef-prop=\"vertices\">vertices</a>, <a data-jsdef-prop=\"offset\">offset</a>) =&gt; <a data-jsdef-prop=\"verticesInfo\">verticesInfo</a>",
               "commentHtml": "<p>获取上传的模型顶点信息</p>\n"
            }
         ],
         "index": 69
      },
      {
         "type": "source",
         "html": "<pre><code>\n    createModelVertex(<span class=\"hljs-keyword\">vertices</span>, <span class=\"hljs-keyword\">offset</span> = {\n        x: <span class=\"hljs-number\">0</span>,\n        y: <span class=\"hljs-number\">0</span>,\n        z: <span class=\"hljs-number\">0</span>\n    }) {\n        <span class=\"hljs-keyword\">const</span> verticesLen = <span class=\"hljs-keyword\">vertices</span>.<span class=\"hljs-built_in\">length</span>;\n</code></pre>",
         "index": 70
      },
      {
         "type": "comment",
         "lineStart": 238,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>存储位置信息 </p>\n"
            }
         ],
         "index": 71
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-keyword\">const</span> positions = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Float32Array</span>(verticesLen * <span class=\"hljs-number\">3</span>); </code></pre>",
         "index": 72
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-keyword\">const</span> colors = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Float32Array</span>(verticesLen * <span class=\"hljs-number\">3</span>);\n        <span class=\"hljs-keyword\">const</span> sizes = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Float32Array</span>(verticesLen);\n\n        <span class=\"hljs-keyword\">let</span> vertex;\n        <span class=\"hljs-keyword\">let</span> <span class=\"hljs-built_in\">color</span> = <span class=\"hljs-keyword\">new</span> THREE.Color();\n\n        <span class=\"hljs-keyword\">const</span> offestVector = <span class=\"hljs-keyword\">new</span> THREE.Vector3(offset.x, offset.y, offset.z);\n</code></pre>",
         "index": 73
      },
      {
         "type": "comment",
         "lineStart": 246,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>读取顶点信息 </p>\n"
            }
         ],
         "index": 74
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-keyword\">for</span> (let <span class=\"hljs-built_in\">i</span> = <span class=\"hljs-number\">0</span>, l = verticesLen; <span class=\"hljs-built_in\">i</span> &lt; l; <span class=\"hljs-built_in\">i</span>++) {\n            vertex = vertices[i];\n</code></pre>",
         "index": 75
      },
      {
         "type": "comment",
         "lineStart": 249,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>add(offestVector). </p>\n"
            }
         ],
         "index": 76
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-selector-tag\">vertex</span><span class=\"hljs-selector-class\">.add</span>(<span class=\"hljs-selector-tag\">offestVector</span>)<span class=\"hljs-selector-class\">.toArray</span>(<span class=\"hljs-selector-tag\">positions</span>, <span class=\"hljs-selector-tag\">i</span> * 3);\n</code></pre>",
         "index": 77
      },
      {
         "type": "comment",
         "lineStart": 251,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>颜色 </p>\n"
            }
         ],
         "index": 78
      },
      {
         "type": "source",
         "html": "<pre><code>            color.setHSL(<span class=\"hljs-number\">0.01</span> + <span class=\"hljs-number\">0.1</span> * (i / l), <span class=\"hljs-number\">1.0</span>, <span class=\"hljs-number\">0.5</span>); </code></pre>",
         "index": 79
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-selector-tag\">color</span><span class=\"hljs-selector-class\">.toArray</span>(<span class=\"hljs-selector-tag\">colors</span>, <span class=\"hljs-selector-tag\">i</span> * 3);\n</code></pre>",
         "index": 80
      },
      {
         "type": "comment",
         "lineStart": 253,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>大小 </p>\n"
            }
         ],
         "index": 81
      },
      {
         "type": "source",
         "html": "<pre><code>            sizes[i] = PARTICLE_SIZE * <span class=\"hljs-number\">0.2</span><span class=\"hljs-comment\">; </span></code></pre>",
         "index": 82
      },
      {
         "type": "source",
         "html": "<pre><code>        }\n\n        <span class=\"hljs-selector-tag\">return</span> {\n            <span class=\"hljs-attribute\">positions</span>: positions,\n            colors: colors,\n            sizes: sizes\n        };\n    }\n\n    </code></pre>",
         "index": 83
      },
      {
         "lineStart": 263,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 3,
                     "children": [],
                     "name": "path",
                     "defHtml": " {<a data-jsdef-prop=\"string\">string</a>}",
                     "commentHtml": "<p> 要加载的模型的 json 路径信息</p>\n"
                  },
                  {
                     "level": 3,
                     "children": [],
                     "name": "vertices",
                     "defHtml": " {<a data-jsdef-prop=\"Promise\">Promise</a>}",
                     "commentHtml": "<p> 顶点集合 vertices</p>\n"
                  }
               ],
               "name": "PonitScene.loadPoints",
               "defHtml": " (<a data-jsdef-prop=\"path\">path</a>, <a data-jsdef-prop=\"material\">material</a>) =&gt; <a data-jsdef-prop=\"modelVertexInfo\">modelVertexInfo</a>",
               "commentHtml": "<p>上传模型</p>\n"
            }
         ],
         "index": 84
      },
      {
         "type": "source",
         "html": "<pre><code>\n    loadPoints(path) {\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Promise</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">resolve, reject</span>) =&gt;</span> {\n            <span class=\"hljs-keyword\">const</span> loader = <span class=\"hljs-keyword\">new</span> THREE.JSONLoader();\n\n            loader.load(path, <span class=\"hljs-function\"><span class=\"hljs-params\">geometry</span> =&gt;</span> {\n</code></pre>",
         "index": 85
      },
      {
         "type": "comment",
         "lineStart": 274,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>顶点信息,  [{x:10, y:10, z:10}, ...]</p>\n"
            }
         ],
         "index": 86
      },
      {
         "type": "source",
         "html": "<pre><code>                <span class=\"hljs-keyword\">const</span> <span class=\"hljs-keyword\">vertices</span> = geometry.<span class=\"hljs-keyword\">vertices</span>;\n                resolve(<span class=\"hljs-keyword\">vertices</span>);\n            });\n        })\n    }\n\n    </code></pre>",
         "index": 87
      },
      {
         "lineStart": 281,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 3,
                     "children": [],
                     "name": "type",
                     "defHtml": " {<a data-jsdef-prop=\"String\">String</a>}",
                     "commentHtml": "<p> 需要更改的模型信息，&#39;position&#39; || &#39;color&#39; || &#39;size&#39;</p>\n"
                  },
                  {
                     "level": 3,
                     "children": [],
                     "name": "arr",
                     "defHtml": " {<a data-jsdef-prop=\"Array\">Array</a>}",
                     "commentHtml": "<p> 更新后的数组</p>\n"
                  },
                  {
                     "level": 3,
                     "children": [
                        {
                           "level": 5,
                           "children": [],
                           "name": ".newArray",
                           "defHtml": " {<a data-jsdef-prop=\"Array\">Array</a>}",
                           "commentHtml": "<p> 更新后的数组</p>\n"
                        },
                        {
                           "level": 5,
                           "children": [],
                           "name": ".oldArray",
                           "defHtml": " {<a data-jsdef-prop=\"Array\">Array</a>}",
                           "commentHtml": "<p> 更新前的数组</p>\n"
                        }
                     ],
                     "name": "res",
                     "defHtml": " {<a data-jsdef-prop=\"Object\">Object</a>}",
                     "commentHtml": "<p> 返回信息，包含新数组和旧数组</p>\n"
                  }
               ],
               "name": "PonitScene.changePoints",
               "defHtml": " (<a data-jsdef-prop=\"type\">type</a>, <a data-jsdef-prop=\"arr\">arr</a>) =&gt; <a data-jsdef-prop=\"res\">res</a>",
               "commentHtml": "<p>改变粒子的大小形状，默认使用 cpu 更新机制</p>\n"
            }
         ],
         "index": 88
      },
      {
         "type": "source",
         "html": "<pre><code>\n    changePoints(<span class=\"hljs-keyword\">type</span>, arr) {\n        <span class=\"hljs-keyword\">const</span> geometry = particles.geometry;\n        <span class=\"hljs-keyword\">const</span> attributes = geometry.attributes;\n\n        <span class=\"hljs-keyword\">const</span> res = {\n            newArray: arr,\n            oldArray: []\n        };\n</code></pre>",
         "index": 89
      },
      {
         "type": "comment",
         "lineStart": 298,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>particles.material.uniforms.color.value = new THREE.Color(0x00ff00); </p>\n"
            }
         ],
         "index": 90
      },
      {
         "type": "source",
         "html": "<pre><code>\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">type</span> <span class=\"hljs-type\">=== </span><span class=\"hljs-symbol\">'position</span>') {\n            attributes.position.<span class=\"hljs-keyword\">array</span> = arr;\n            attributes.position.needsUpdate = <span class=\"hljs-literal\">true</span>;\n\n            res.oldArray = attributes.position.<span class=\"hljs-keyword\">array</span>;\n        } <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">type</span> <span class=\"hljs-type\">=== </span><span class=\"hljs-symbol\">'color</span>') {\n            </code></pre>",
         "index": 91
      },
      {
         "lineStart": 306,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>颜色 */ </p>\n"
            }
         ],
         "index": 92
      },
      {
         "type": "source",
         "html": "<pre><code>\n            attributes.customColor.<span class=\"hljs-keyword\">array</span> = arr;\n            attributes.customColor.needsUpdate = <span class=\"hljs-literal\">true</span>;\n            res.oldArray = attributes.customColor.<span class=\"hljs-keyword\">array</span>;\n        } <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">type</span> <span class=\"hljs-type\">=== </span><span class=\"hljs-symbol\">'size</span>') {\n            </code></pre>",
         "index": 93
      },
      {
         "lineStart": 311,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>大小 */ </p>\n"
            }
         ],
         "index": 94
      },
      {
         "type": "source",
         "html": "<pre><code>\n            attributes.<span class=\"hljs-built_in\">size</span>.array = arr;\n            attributes.<span class=\"hljs-built_in\">size</span>.needsUpdate = true;\n            res.oldArray = attributes.<span class=\"hljs-built_in\">size</span>.array;\n        }\n        <span class=\"hljs-keyword\">return</span> res;\n    }\n}\n\n<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">render</span><span class=\"hljs-params\">()</span> {</span>\n</code></pre>",
         "index": 95
      },
      {
         "type": "comment",
         "lineStart": 321,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>particles.rotation.y += 0.001; </p>\n"
            }
         ],
         "index": 96
      },
      {
         "type": "source",
         "html": "<pre><code>    <span class=\"hljs-selector-tag\">window</span><span class=\"hljs-selector-class\">.animator</span><span class=\"hljs-selector-class\">.update</span>();\n    <span class=\"hljs-selector-tag\">setCamera</span>();\n    <span class=\"hljs-selector-tag\">renderer</span><span class=\"hljs-selector-class\">.render</span>(scene, camera);\n}\n\n<span class=\"hljs-selector-tag\">function</span> <span class=\"hljs-selector-tag\">animate</span>() {\n    <span class=\"hljs-selector-tag\">requestAnimationFrame</span>(animate);\n    <span class=\"hljs-selector-tag\">render</span>();\n    <span class=\"hljs-selector-tag\">TWEEN</span><span class=\"hljs-selector-class\">.update</span>();\n    <span class=\"hljs-selector-tag\">stats</span><span class=\"hljs-selector-class\">.update</span>();\n    <span class=\"hljs-selector-tag\">controls</span><span class=\"hljs-selector-class\">.update</span>();\n}\n\n\n\n</code></pre>",
         "index": 97
      },
      {
         "type": "comment",
         "lineStart": 337,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>TODO 事件绑定，需要统一于优化</p>\n"
            }
         ],
         "index": 98
      },
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-keyword\">const</span> config = {\n    SCREEN_WIDTH: <span class=\"hljs-built_in\">window</span>.innerWidth,\n    SCREEN_HEIGHT: <span class=\"hljs-built_in\">window</span>.innerHeight,\n    SCREEN_HALFX: <span class=\"hljs-built_in\">window</span>.innerWidth / <span class=\"hljs-number\">2</span>,\n    SCREEN_HALFY: <span class=\"hljs-built_in\">window</span>.innerHeight / <span class=\"hljs-number\">2</span>,\n    cameraSpeed: <span class=\"hljs-number\">.2</span>,\n    cameraMaxX: <span class=\"hljs-number\">15</span>,\n    cameraMaxY: <span class=\"hljs-number\">10</span>,\n    mouseX:<span class=\"hljs-number\">0</span>,\n    mouseY:<span class=\"hljs-number\">0</span>,\n}\n<span class=\"hljs-keyword\">const</span> handleEvent = <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n    cameraMove();\n    resize();\n}\n<span class=\"hljs-keyword\">const</span> cameraMove = <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n    <span class=\"hljs-built_in\">document</span>.addEventListener(<span class=\"hljs-string\">'mousemove'</span>, <span class=\"hljs-function\"><span class=\"hljs-params\">e</span> =&gt;</span> {\n        config.mouseX = e.clientX - config.SCREEN_HALFX;\n        config.mouseY = e.clientY - config.SCREEN_HALFY;\n    });\n}\n<span class=\"hljs-keyword\">const</span> resize = <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n</code></pre>",
         "index": 99
      },
      {
         "type": "comment",
         "lineStart": 360,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>窗口大小更改 </p>\n"
            }
         ],
         "index": 100
      },
      {
         "type": "source",
         "html": "<pre><code>    <span class=\"hljs-built_in\">window</span>.onresize = <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\"></span>) </span>{\n</code></pre>",
         "index": 101
      },
      {
         "type": "comment",
         "lineStart": 362,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>设置透视摄像机的长宽比 </p>\n"
            }
         ],
         "index": 102
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-keyword\">camera</span>.aspect = <span class=\"hljs-keyword\">window</span>.innerWidth / <span class=\"hljs-keyword\">window</span>.innerHeight;\n</code></pre>",
         "index": 103
      },
      {
         "type": "comment",
         "lineStart": 364,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>摄像机的 position 和 target 是自动更新的，而 fov、aspect、near、far 的修改则需要重新计算投影矩阵（projection matrix） </p>\n"
            }
         ],
         "index": 104
      },
      {
         "type": "source",
         "html": "<pre><code>        camera.updateProjectionMatrix()<span class=\"hljs-comment\">;</span>\n</code></pre>",
         "index": 105
      },
      {
         "type": "comment",
         "lineStart": 366,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>设置渲染器输出的 canvas 的大小 </p>\n"
            }
         ],
         "index": 106
      },
      {
         "type": "source",
         "html": "<pre><code>        renderer.setSize(window.innerWidth, window.innerHeight);\n        controls.handleResize();\n    };\n}\n\n<span class=\"hljs-keyword\">const</span> setCamera = () =&gt; {\n    <span class=\"hljs-keyword\">const</span> increX = camera.<span class=\"hljs-built_in\">position</span>.x + (<span class=\"hljs-built_in\">config</span>.mouseX / <span class=\"hljs-built_in\">config</span>.SCREEN_HALFX) * <span class=\"hljs-built_in\">config</span>.cameraSpeed;\n    <span class=\"hljs-keyword\">const</span> increY = camera.<span class=\"hljs-built_in\">position</span>.y + (-<span class=\"hljs-built_in\">config</span>.mouseY / <span class=\"hljs-built_in\">config</span>.SCREEN_HALFY) * <span class=\"hljs-built_in\">config</span>.cameraSpeed;\n\n    <span class=\"hljs-built_in\">if</span> (Math.<span class=\"hljs-built_in\">abs</span>(increX) &lt; <span class=\"hljs-built_in\">config</span>.cameraMaxX) {\n        camera.<span class=\"hljs-built_in\">position</span>.x = increX;\n    }\n    <span class=\"hljs-built_in\">if</span> (Math.<span class=\"hljs-built_in\">abs</span>(increY) &lt; <span class=\"hljs-built_in\">config</span>.cameraMaxY) {\n        camera.<span class=\"hljs-built_in\">position</span>.y = increY;\n    }\n}\nhandleEvent();\n\n<span class=\"hljs-keyword\">export</span> {\n    PonitScene,\n    animate\n};\n</code></pre>",
         "index": 107
      }
   ],
   "/src/js/index.js": [
      {
         "lineStart": 1,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>@file 业务逻辑入口\n @author 陈蔓青（chenmanqing@baidu.com)</p>\n"
            }
         ],
         "index": 0
      },
      {
         "type": "comment",
         "lineStart": 6,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>TODO </p>\n"
            }
         ],
         "index": 1
      },
      {
         "type": "comment",
         "lineStart": 7,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>背景粒子变化 </p>\n"
            }
         ],
         "index": 2
      },
      {
         "type": "source",
         "html": "<pre><code>\n<span class=\"hljs-keyword\">import</span> {\n    PonitScene,\n    animate\n} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./PointScene'</span>;\n\n<span class=\"hljs-keyword\">import</span> Particles <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./particles/Particles'</span>;\n<span class=\"hljs-keyword\">import</span> RandomParticles <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./particles/RandomParticles'</span>;\n<span class=\"hljs-keyword\">import</span> ModelParticles <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./particles/ModelParticles'</span>;\n<span class=\"hljs-keyword\">import</span> Animator <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./Animator/Animator'</span>;\n\n\n</code></pre>",
         "index": 3
      },
      {
         "type": "comment",
         "lineStart": 20,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>初始化场景 </p>\n"
            }
         ],
         "index": 4
      },
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-keyword\">const</span> pointScene = <span class=\"hljs-keyword\">new</span> PonitScene({ </code></pre>",
         "index": 5
      },
      {
         "type": "source",
         "html": "<pre><code>    container: <span class=\"hljs-built_in\">document</span>.getElementById(<span class=\"hljs-string\">'container'</span>),\n    dev: <span class=\"hljs-literal\">true</span>,\n    renderType: <span class=\"hljs-string\">'gpu'</span>\n});\n<span class=\"hljs-built_in\">window</span>.pointScene = pointScene;\n\n</code></pre>",
         "index": 6
      },
      {
         "type": "comment",
         "lineStart": 27,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>动画逻辑 </p>\n"
            }
         ],
         "index": 7
      },
      {
         "type": "source",
         "html": "<pre><code>let animator<span class=\"hljs-comment\">; </span></code></pre>",
         "index": 8
      },
      {
         "type": "source",
         "html": "<pre><code>\n<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">init</span><span class=\"hljs-params\">()</span> </span>{\n</code></pre>",
         "index": 9
      },
      {
         "type": "comment",
         "lineStart": 30,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>TODO 多个模型的分布加载 </p>\n"
            }
         ],
         "index": 10
      },
      {
         "type": "comment",
         "lineStart": 31,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>TODO 本地stroge缓存 </p>\n"
            }
         ],
         "index": 11
      },
      {
         "lineStart": 33,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>初始化生成随机点 */ </p>\n"
            }
         ],
         "index": 12
      },
      {
         "type": "source",
         "html": "<pre><code>\n    <span class=\"hljs-keyword\">const</span> randomParticles = <span class=\"hljs-keyword\">new</span> RandomParticles({\n        randomNum: <span class=\"hljs-number\">11437</span>,\n        MINPOS: <span class=\"hljs-number\">-450</span>,\n        MAXPOS: <span class=\"hljs-number\">450</span>,\n        <span class=\"hljs-built_in\">color</span>: <span class=\"hljs-string\">'rgb(255, 255, 255)'</span>,\n        <span class=\"hljs-built_in\">size</span>: <span class=\"hljs-number\">6</span>\n    });\n</code></pre>",
         "index": 13
      },
      {
         "type": "comment",
         "lineStart": 41,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>获取随机点的位置大小颜色信息 </p>\n"
            }
         ],
         "index": 14
      },
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-attribute\">    const randomParticlesInfo</span> = randomParticles.getVertexInfo(); </code></pre>",
         "index": 15
      },
      {
         "lineStart": 43,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>场景1: hi 图标模型 */ </p>\n"
            }
         ],
         "index": 16
      },
      {
         "type": "source",
         "html": "<pre><code>\n<span class=\"hljs-attribute\">    const hiModelParticles</span> = new ModelParticles();\n<span class=\"hljs-attribute\">    let hiModelVertex</span> = hiModelParticles.loadPoints(<span class=\"hljs-string\">'/src/assets/himodel.json'</span>);\n\n    </code></pre>",
         "index": 17
      },
      {
         "lineStart": 47,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>场景2: 语音输入 */ </p>\n"
            }
         ],
         "index": 18
      },
      {
         "type": "comment",
         "lineStart": 48,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>const voiceModelParticles = new ModelParticles(); </p>\n"
            }
         ],
         "index": 19
      },
      {
         "lineStart": 50,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>场景3: Beep 登录 */ </p>\n"
            }
         ],
         "index": 20
      },
      {
         "type": "source",
         "html": "<pre><code>\n<span class=\"hljs-attribute\">    const beepModelParticles</span> = new ModelParticles();\n<span class=\"hljs-attribute\">    const beepModelVertex</span> = beepModelParticles.loadPoints(<span class=\"hljs-string\">'/src/assets/phone.json'</span>);\n\n    </code></pre>",
         "index": 21
      },
      {
         "lineStart": 54,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>场景4: 无线投屏 */ </p>\n"
            }
         ],
         "index": 22
      },
      {
         "type": "source",
         "html": "<pre><code>\n<span class=\"hljs-attribute\">    const wlanModelParticles</span> = new ModelParticles();\n<span class=\"hljs-attribute\">    const wlanModelVertex</span> = wlanModelParticles.loadPoints(<span class=\"hljs-string\">'/src/assets/wlan.json'</span>);\n    </code></pre>",
         "index": 23
      },
      {
         "lineStart": 57,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>场景5: 应用中心 */ </p>\n"
            }
         ],
         "index": 24
      },
      {
         "type": "source",
         "html": "<pre><code>\n    <span class=\"hljs-keyword\">const</span> appModelParticles = <span class=\"hljs-keyword\">new</span> ModelParticles();\n    <span class=\"hljs-keyword\">const</span> appModelVertex = appModelParticles.loadPoints(<span class=\"hljs-string\">'/src/assets/app.json'</span>);\n\n    <span class=\"hljs-built_in\">Promise</span>.all([hiModelVertex, beepModelVertex, wlanModelVertex, appModelVertex])\n        .then(<span class=\"hljs-function\"><span class=\"hljs-params\">rs</span> =&gt;</span> {\n            <span class=\"hljs-keyword\">const</span> hiModelInfo = hiModelParticles.getVertexInfo();\n            <span class=\"hljs-keyword\">const</span> beepModelInfo = beepModelParticles.getVertexInfo();\n            <span class=\"hljs-keyword\">const</span> wlanModelInfo = wlanModelParticles.getVertexInfo();\n            <span class=\"hljs-keyword\">const</span> appModelInfo = appModelParticles.getVertexInfo();\n\n</code></pre>",
         "index": 25
      },
      {
         "type": "comment",
         "lineStart": 68,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>在场景中添加粒子集合 </p>\n"
            }
         ],
         "index": 26
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-selector-tag\">window</span><span class=\"hljs-selector-class\">.pointScene</span><span class=\"hljs-selector-class\">.addParticles</span>(<span class=\"hljs-selector-tag\">randomParticles</span><span class=\"hljs-selector-class\">.getParticles</span>()); </code></pre>",
         "index": 27
      },
      {
         "type": "comment",
         "lineStart": 70,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>ceateBg(); </p>\n"
            }
         ],
         "index": 28
      },
      {
         "type": "source",
         "html": "<pre><code>\n            animator = window.animator = <span class=\"hljs-keyword\">new</span> Animator(\n<span class=\"hljs-built_in\">                randomParticles,</span> [randomParticlesInfo, hiModelInfo, beepModelInfo, wlanModelParticles, appModelInfo])<span class=\"hljs-comment\">;</span>\n\n</code></pre>",
         "index": 29
      },
      {
         "type": "comment",
         "lineStart": 75,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>感觉应该这么构建比较好，数组中每个 Particles 都有 changePoint 方法来改变粒子位置，和 getVertexInfo 来获取信息 </p>\n"
            }
         ],
         "index": 30
      },
      {
         "type": "comment",
         "lineStart": 76,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>new Animator( [randomParticles, hiModelParticles, beepModelParticles])</p>\n"
            }
         ],
         "index": 31
      },
      {
         "type": "source",
         "html": "<pre><code>\n            animate()<span class=\"hljs-comment\">;</span>\n        })<span class=\"hljs-comment\">;</span>\n}\n\n</code></pre>",
         "index": 32
      },
      {
         "type": "comment",
         "lineStart": 82,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>背景图层 </p>\n"
            }
         ],
         "index": 33
      },
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">ceateBg</span><span class=\"hljs-params\">()</span> </span>{\n</code></pre>",
         "index": 34
      },
      {
         "type": "comment",
         "lineStart": 84,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>生成随机点 </p>\n"
            }
         ],
         "index": 35
      },
      {
         "type": "source",
         "html": "<pre><code>    const randomParticles = new RandomParticles(<span class=\"hljs-number\">10000</span>, <span class=\"hljs-number\">-450</span>, <span class=\"hljs-number\">450</span>); </code></pre>",
         "index": 36
      },
      {
         "type": "source",
         "html": "<pre><code>    <span class=\"hljs-selector-tag\">window</span><span class=\"hljs-selector-class\">.pointScene</span><span class=\"hljs-selector-class\">.addParticles</span>(<span class=\"hljs-selector-tag\">randomParticles</span><span class=\"hljs-selector-class\">.getParticles</span>());\n}\n\n</code></pre>",
         "index": 37
      },
      {
         "type": "comment",
         "lineStart": 88,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>TODO 防抖 </p>\n"
            }
         ],
         "index": 38
      },
      {
         "type": "comment",
         "lineStart": 89,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>TODO 事件统一管理 </p>\n"
            }
         ],
         "index": 39
      },
      {
         "type": "source",
         "html": "<pre><code>const btn = <span class=\"hljs-built_in\">document</span>.querySelector(<span class=\"hljs-string\">'.btn'</span>);\nbtn.addEventListener(<span class=\"hljs-string\">'click'</span>, <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n    animator.statusUpdate();\n    updateText();\n});\n\n</code></pre>",
         "index": 40
      },
      {
         "type": "comment",
         "lineStart": 96,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>文字和左侧状态变换 </p>\n"
            }
         ],
         "index": 41
      },
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-keyword\">const</span> textSceneWrap = <span class=\"hljs-built_in\">document</span>.<span class=\"hljs-built_in\">querySelectorAll</span>(<span class=\"hljs-string\">'.text-scene-wrap'</span>);\n<span class=\"hljs-keyword\">const</span> dotWrap = <span class=\"hljs-built_in\">document</span>.<span class=\"hljs-built_in\">querySelectorAll</span>(<span class=\"hljs-string\">'.dot'</span>);\n\n</code></pre>",
         "index": 42
      },
      {
         "type": "comment",
         "lineStart": 100,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>跟 animator 的状态机一样，稍后合并 </p>\n"
            }
         ],
         "index": 43
      },
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-attribute\">let txtStatus</span> = 0; </code></pre>",
         "index": 44
      },
      {
         "type": "source",
         "html": "<pre><code>\n<span class=\"hljs-selector-tag\">function</span> <span class=\"hljs-selector-tag\">updateText</span>() {\n    <span class=\"hljs-selector-tag\">txtStatus</span>++;\n    <span class=\"hljs-selector-tag\">for</span> (let i = <span class=\"hljs-number\">0</span>; i &lt; textSceneWrap.length; i++) {\n        <span class=\"hljs-selector-tag\">textSceneWrap</span><span class=\"hljs-selector-attr\">[i]</span><span class=\"hljs-selector-class\">.classList</span><span class=\"hljs-selector-class\">.remove</span>(<span class=\"hljs-string\">'active'</span>);\n        <span class=\"hljs-selector-tag\">dotWrap</span><span class=\"hljs-selector-attr\">[i]</span><span class=\"hljs-selector-class\">.classList</span><span class=\"hljs-selector-class\">.remove</span>(<span class=\"hljs-string\">'active'</span>);\n        <span class=\"hljs-selector-tag\">if</span> (i === txtStatus) {\n            <span class=\"hljs-selector-tag\">textSceneWrap</span><span class=\"hljs-selector-attr\">[i]</span><span class=\"hljs-selector-class\">.classList</span><span class=\"hljs-selector-class\">.add</span>(<span class=\"hljs-string\">'active'</span>);\n            <span class=\"hljs-selector-tag\">dotWrap</span><span class=\"hljs-selector-attr\">[i]</span><span class=\"hljs-selector-class\">.classList</span><span class=\"hljs-selector-class\">.add</span>(<span class=\"hljs-string\">'active'</span>);\n        }\n    }\n}\n\n</code></pre>",
         "index": 45
      },
      {
         "type": "comment",
         "lineStart": 114,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>右上角按钮事件 </p>\n"
            }
         ],
         "index": 46
      },
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-keyword\">const</span> musicBtn = <span class=\"hljs-built_in\">document</span>.querySelector(<span class=\"hljs-string\">'.music'</span>);\n<span class=\"hljs-keyword\">let</span> musicOn = <span class=\"hljs-literal\">true</span>;\nmusicBtn.addEventListener(<span class=\"hljs-string\">'click'</span>, <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n    <span class=\"hljs-keyword\">if</span> (musicOn) {\n        musicBtn.classList.add(<span class=\"hljs-string\">'music-off'</span>);\n        musicOn = <span class=\"hljs-literal\">false</span>;\n    } <span class=\"hljs-keyword\">else</span> {\n        musicBtn.classList.remove(<span class=\"hljs-string\">'music-off'</span>);\n        musicOn = <span class=\"hljs-literal\">true</span>;\n    }\n});\n\ninit();\n</code></pre>",
         "index": 47
      }
   ],
   "/src/lib/TrackballControls.js": [
      {
         "lineStart": 1,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>@author Eberhard Graether / <a href=\"http://egraether.com/\">http://egraether.com/</a>\n @author Mark Lundin     / <a href=\"http://mark-lundin.com\">http://mark-lundin.com</a>\n @author Simone Manini / <a href=\"http://daron1337.github.io\">http://daron1337.github.io</a>\n @author Luca Antiga     / <a href=\"http://lantiga.github.io\">http://lantiga.github.io</a></p>\n"
            }
         ],
         "index": 0
      },
      {
         "type": "source",
         "html": "<pre><code>\n\n<span class=\"kotlin\">THREE.TrackballControls = function (<span class=\"hljs-keyword\">object</span>, domElement) {\n\n    <span class=\"hljs-keyword\">var</span> _this = <span class=\"hljs-keyword\">this</span>;\n    <span class=\"hljs-keyword\">var</span> STATE = {\n        NONE: <span class=\"hljs-number\">-1</span>,\n        ROTATE: <span class=\"hljs-number\">0</span>,\n        ZOOM: <span class=\"hljs-number\">1</span>,\n        PAN: <span class=\"hljs-number\">2</span>,\n        TOUCH_ROTATE: <span class=\"hljs-number\">3</span>,\n        TOUCH_ZOOM_PAN: <span class=\"hljs-number\">4</span>\n    };\n\n    <span class=\"hljs-keyword\">this</span>.<span class=\"hljs-keyword\">object</span> = <span class=\"hljs-keyword\">object</span>;\n    <span class=\"hljs-keyword\">this</span>.domElement = (domElement !== undefined) ? domElement : document;\n\n</span></code></pre>",
         "index": 1
      },
      {
         "type": "comment",
         "lineStart": 23,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>API </p>\n"
            }
         ],
         "index": 2
      },
      {
         "type": "source",
         "html": "<pre><code>\n    <span class=\"hljs-keyword\">this</span>.enabled = <span class=\"hljs-literal\">true</span>;\n\n    <span class=\"hljs-keyword\">this</span>.screen = {\n        left: <span class=\"hljs-number\">0</span>,\n        top: <span class=\"hljs-number\">0</span>,\n        width: <span class=\"hljs-number\">0</span>,\n        height: <span class=\"hljs-number\">0</span>\n    };\n\n    <span class=\"hljs-keyword\">this</span>.rotateSpeed = <span class=\"hljs-number\">1.0</span>;\n    <span class=\"hljs-keyword\">this</span>.zoomSpeed = <span class=\"hljs-number\">1.2</span>;\n    <span class=\"hljs-keyword\">this</span>.panSpeed = <span class=\"hljs-number\">0.3</span>;\n\n    <span class=\"hljs-keyword\">this</span>.noRotate = <span class=\"hljs-literal\">false</span>;\n    <span class=\"hljs-keyword\">this</span>.noZoom = <span class=\"hljs-literal\">false</span>;\n    <span class=\"hljs-keyword\">this</span>.noPan = <span class=\"hljs-literal\">false</span>;\n\n    <span class=\"hljs-keyword\">this</span>.staticMoving = <span class=\"hljs-literal\">false</span>;\n    <span class=\"hljs-keyword\">this</span>.dynamicDampingFactor = <span class=\"hljs-number\">0.2</span>;\n\n    <span class=\"hljs-keyword\">this</span>.minDistance = <span class=\"hljs-number\">0</span>;\n    <span class=\"hljs-keyword\">this</span>.maxDistance = Infinity;\n\n    <span class=\"hljs-keyword\">this</span>.keys = [<span class=\"hljs-number\">65</span> </code></pre>",
         "index": 3
      },
      {
         "lineStart": 48,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>A*/</p>\n"
            }
         ],
         "index": 4
      },
      {
         "type": "source",
         "html": "<pre><code> , <span class=\"hljs-number\">83</span> </code></pre>",
         "index": 5
      },
      {
         "lineStart": 48,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>S*/</p>\n"
            }
         ],
         "index": 6
      },
      {
         "type": "source",
         "html": "<pre><code> , <span class=\"hljs-number\">68</span> </code></pre>",
         "index": 7
      },
      {
         "lineStart": 48,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>D*/</p>\n"
            }
         ],
         "index": 8
      },
      {
         "type": "source",
         "html": "<pre><code> ]<span class=\"hljs-comment\">;</span>\n\n</code></pre>",
         "index": 9
      },
      {
         "type": "comment",
         "lineStart": 50,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>internals </p>\n"
            }
         ],
         "index": 10
      },
      {
         "type": "source",
         "html": "<pre><code>\n    <span class=\"hljs-built_in\">this</span>.target = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-type\">THREE</span>.Vector3();\n\n    <span class=\"hljs-keyword\">var</span> EPS = <span class=\"hljs-number\">0.000001</span>;\n\n    <span class=\"hljs-keyword\">var</span> lastPosition = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-type\">THREE</span>.Vector3();\n\n    <span class=\"hljs-keyword\">var</span> _state = STATE.NONE,\n        _prevState = STATE.NONE,\n\n        _eye = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-type\">THREE</span>.Vector3(),\n\n        _movePrev = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-type\">THREE</span>.Vector2(),\n        _moveCurr = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-type\">THREE</span>.Vector2(),\n\n        _lastAxis = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-type\">THREE</span>.Vector3(),\n        _lastAngle = <span class=\"hljs-number\">0</span>,\n\n        _zoomStart = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-type\">THREE</span>.Vector2(),\n        _zoomEnd = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-type\">THREE</span>.Vector2(),\n\n        _touchZoomDistanceStart = <span class=\"hljs-number\">0</span>,\n        _touchZoomDistanceEnd = <span class=\"hljs-number\">0</span>,\n\n        _panStart = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-type\">THREE</span>.Vector2(),\n        _panEnd = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-type\">THREE</span>.Vector2();\n\n</code></pre>",
         "index": 11
      },
      {
         "type": "comment",
         "lineStart": 78,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>for reset </p>\n"
            }
         ],
         "index": 12
      },
      {
         "type": "source",
         "html": "<pre><code>\n    <span class=\"hljs-keyword\">this</span>.target0 = <span class=\"hljs-keyword\">this</span>.target.clone();\n    <span class=\"hljs-keyword\">this</span>.position0 = <span class=\"hljs-keyword\">this</span>.<span class=\"hljs-keyword\">object</span>.position.clone();\n    <span class=\"hljs-keyword\">this</span>.up0 = <span class=\"hljs-keyword\">this</span>.<span class=\"hljs-keyword\">object</span>.up.clone();\n\n</code></pre>",
         "index": 13
      },
      {
         "type": "comment",
         "lineStart": 84,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>events </p>\n"
            }
         ],
         "index": 14
      },
      {
         "type": "source",
         "html": "<pre><code>\n    <span class=\"hljs-keyword\">var</span> changeEvent = {\n        <span class=\"hljs-class\"><span class=\"hljs-keyword\">type</span></span>: <span class=\"hljs-symbol\">'chang</span>e'\n    };\n    <span class=\"hljs-keyword\">var</span> startEvent = {\n        <span class=\"hljs-class\"><span class=\"hljs-keyword\">type</span></span>: <span class=\"hljs-symbol\">'star</span>t'\n    };\n    <span class=\"hljs-keyword\">var</span> endEvent = {\n        <span class=\"hljs-class\"><span class=\"hljs-keyword\">type</span></span>: <span class=\"hljs-symbol\">'en</span>d'\n    };\n\n\n</code></pre>",
         "index": 15
      },
      {
         "type": "comment",
         "lineStart": 97,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>methods </p>\n"
            }
         ],
         "index": 16
      },
      {
         "type": "source",
         "html": "<pre><code>\n    <span class=\"hljs-keyword\">this</span>.handleResize = function () {\n\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.domElement === document) {\n\n            <span class=\"hljs-keyword\">this</span>.screen.left = <span class=\"hljs-number\">0</span>;\n            <span class=\"hljs-keyword\">this</span>.screen.top = <span class=\"hljs-number\">0</span>;\n            <span class=\"hljs-keyword\">this</span>.screen.width = window.innerWidth;\n            <span class=\"hljs-keyword\">this</span>.screen.height = window.innerHeight;\n\n        } <span class=\"hljs-keyword\">else</span> {\n\n            <span class=\"hljs-keyword\">var</span> box = <span class=\"hljs-keyword\">this</span>.domElement.getBoundingClientRect();\n</code></pre>",
         "index": 17
      },
      {
         "type": "comment",
         "lineStart": 111,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>adjustments come from similar code in the jquery offset() function </p>\n"
            }
         ],
         "index": 18
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-keyword\">var</span> d = <span class=\"hljs-keyword\">this</span>.domElement.ownerDocument.documentElement;\n            <span class=\"hljs-keyword\">this</span>.screen.left = box.left + <span class=\"hljs-built_in\">window</span>.pageXOffset - d.clientLeft;\n            <span class=\"hljs-keyword\">this</span>.screen.top = box.top + <span class=\"hljs-built_in\">window</span>.pageYOffset - d.clientTop;\n            <span class=\"hljs-keyword\">this</span>.screen.width = box.width;\n            <span class=\"hljs-keyword\">this</span>.screen.height = box.height;\n\n        }\n\n    };\n\n    <span class=\"hljs-keyword\">this</span>.handleEvent = <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">event</span>) </span>{\n\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">typeof</span> <span class=\"hljs-keyword\">this</span>[event.type] == <span class=\"hljs-string\">'function'</span>) {\n\n            <span class=\"hljs-keyword\">this</span>[event.type](event);\n\n        }\n\n    };\n\n    <span class=\"hljs-keyword\">var</span> getMouseOnScreen = (<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\"></span>) </span>{\n\n        <span class=\"hljs-keyword\">var</span> vector = <span class=\"hljs-keyword\">new</span> THREE.Vector2();\n\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">getMouseOnScreen</span>(<span class=\"hljs-params\">pageX, pageY</span>) </span>{\n\n            vector.set(\n                (pageX - _this.screen.left) / _this.screen.width,\n                (pageY - _this.screen.top) / _this.screen.height\n            );\n\n            <span class=\"hljs-keyword\">return</span> vector;\n\n        };\n\n    }());\n\n    <span class=\"hljs-keyword\">var</span> getMouseOnCircle = (<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\"></span>) </span>{\n\n        <span class=\"hljs-keyword\">var</span> vector = <span class=\"hljs-keyword\">new</span> THREE.Vector2();\n\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">getMouseOnCircle</span>(<span class=\"hljs-params\">pageX, pageY</span>) </span>{\n\n            vector.set(\n                ((pageX - _this.screen.width * <span class=\"hljs-number\">0.5</span> - _this.screen.left) / (_this.screen.width * <span class=\"hljs-number\">0.5</span>)),\n</code></pre>",
         "index": 19
      },
      {
         "type": "comment",
         "lineStart": 157,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>screen.width intentional </p>\n"
            }
         ],
         "index": 20
      },
      {
         "type": "source",
         "html": "<pre><code>                ((<span class=\"hljs-name\">_this.screen.height</span> + <span class=\"hljs-number\">2</span> * (<span class=\"hljs-name\">_this.screen.top</span> - pageY)) / _this.screen.width) </code></pre>",
         "index": 21
      },
      {
         "type": "source",
         "html": "<pre><code>            );\n\n            return vector;\n\n        };\n\n    }());\n\n    this.rotateCamera = (function () {\n\n        var axis = new THREE.Vector3(),\n            quaternion = new THREE.Quaternion(),\n            <span class=\"hljs-built_in\">eyeDirection</span> = new THREE.Vector3(),\n            objectUpDirection = new THREE.Vector3(),\n            objectSidewaysDirection = new THREE.Vector3(),\n            moveDirection = new THREE.Vector3(),\n            angle;\n\n        return function rotateCamera() {\n\n            moveDirection.<span class=\"hljs-built_in\">set</span>(<span class=\"hljs-variable\">_moveCurr</span>.x - <span class=\"hljs-variable\">_movePrev</span>.x, <span class=\"hljs-variable\">_moveCurr</span>.y - <span class=\"hljs-variable\">_movePrev</span>.y, <span class=\"hljs-number\">0</span>);\n            angle = moveDirection.length();\n\n            <span class=\"hljs-keyword\">if</span> (angle) {\n\n                <span class=\"hljs-variable\">_eye</span>.copy(<span class=\"hljs-variable\">_this</span>.object.<span class=\"hljs-built_in\">position</span>).sub(<span class=\"hljs-variable\">_this</span>.target);\n\n                <span class=\"hljs-built_in\">eyeDirection</span>.copy(<span class=\"hljs-variable\">_eye</span>).normalize();\n                objectUpDirection.copy(<span class=\"hljs-variable\">_this</span>.object.up).normalize();\n                objectSidewaysDirection.crossVectors(objectUpDirection, <span class=\"hljs-built_in\">eyeDirection</span>).normalize();\n\n                objectUpDirection.setLength(<span class=\"hljs-variable\">_moveCurr</span>.y - <span class=\"hljs-variable\">_movePrev</span>.y);\n                objectSidewaysDirection.setLength(<span class=\"hljs-variable\">_moveCurr</span>.x - <span class=\"hljs-variable\">_movePrev</span>.x);\n\n                moveDirection.copy(objectUpDirection.add(objectSidewaysDirection));\n\n                axis.crossVectors(moveDirection, <span class=\"hljs-variable\">_eye</span>).normalize();\n\n                angle *= <span class=\"hljs-variable\">_this</span>.rotateSpeed;\n                quaternion.setFromAxisAngle(axis, angle);\n\n                <span class=\"hljs-variable\">_eye</span>.applyQuaternion(quaternion);\n                <span class=\"hljs-variable\">_this</span>.object.up.applyQuaternion(quaternion);\n\n                <span class=\"hljs-variable\">_lastAxis</span>.copy(axis);\n                <span class=\"hljs-variable\">_lastAngle</span> = angle;\n\n            } <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (!<span class=\"hljs-variable\">_this</span>.staticMoving &amp;&amp; <span class=\"hljs-variable\">_lastAngle</span>) {\n\n                <span class=\"hljs-variable\">_lastAngle</span> *= Math.<span class=\"hljs-built_in\">sqrt</span>(<span class=\"hljs-number\">1.0</span> - <span class=\"hljs-variable\">_this</span>.dynamicDampingFactor);\n                <span class=\"hljs-variable\">_eye</span>.copy(<span class=\"hljs-variable\">_this</span>.object.<span class=\"hljs-built_in\">position</span>).sub(<span class=\"hljs-variable\">_this</span>.target);\n                quaternion.setFromAxisAngle(<span class=\"hljs-variable\">_lastAxis</span>, <span class=\"hljs-variable\">_lastAngle</span>);\n                <span class=\"hljs-variable\">_eye</span>.applyQuaternion(quaternion);\n                <span class=\"hljs-variable\">_this</span>.object.up.applyQuaternion(quaternion);\n\n            }\n\n            <span class=\"hljs-variable\">_movePrev</span>.copy(<span class=\"hljs-variable\">_moveCurr</span>);\n\n        };\n\n    }());\n\n\n    this.zoomCamera = function () {\n\n        var factor;\n\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-variable\">_state</span> === STATE.TOUCH_ZOOM_PAN) {\n\n            factor = <span class=\"hljs-variable\">_touchZoomDistanceStart</span> / <span class=\"hljs-variable\">_touchZoomDistanceEnd</span>;\n            <span class=\"hljs-variable\">_touchZoomDistanceStart</span> = <span class=\"hljs-variable\">_touchZoomDistanceEnd</span>;\n            <span class=\"hljs-variable\">_eye</span>.multiplyScalar(factor);\n\n        } <span class=\"hljs-keyword\">else</span> {\n\n            factor = <span class=\"hljs-number\">1.0</span> + (<span class=\"hljs-variable\">_zoomEnd</span>.y - <span class=\"hljs-variable\">_zoomStart</span>.y) * <span class=\"hljs-variable\">_this</span>.zoomSpeed;\n\n            <span class=\"hljs-keyword\">if</span> (factor !== <span class=\"hljs-number\">1.0</span> &amp;&amp; factor &gt; <span class=\"hljs-number\">0.0</span>) {\n\n                <span class=\"hljs-variable\">_eye</span>.multiplyScalar(factor);\n\n            }\n\n            <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-variable\">_this</span>.staticMoving) {\n\n                <span class=\"hljs-variable\">_zoomStart</span>.copy(<span class=\"hljs-variable\">_zoomEnd</span>);\n\n            } <span class=\"hljs-keyword\">else</span> {\n\n                <span class=\"hljs-variable\">_zoomStart</span>.y += (<span class=\"hljs-variable\">_zoomEnd</span>.y - <span class=\"hljs-variable\">_zoomStart</span>.y) * this.dynamicDampingFactor;\n\n            }\n\n        }\n\n    };\n\n    this.panCamera = (function () {\n\n        var mouseChange = new THREE.Vector2(),\n            objectUp = new THREE.Vector3(),\n            pan = new THREE.Vector3();\n\n        return function panCamera() {\n\n            mouseChange.copy(<span class=\"hljs-variable\">_panEnd</span>).sub(<span class=\"hljs-variable\">_panStart</span>);\n\n            <span class=\"hljs-keyword\">if</span> (mouseChange.lengthSq()) {\n\n                mouseChange.multiplyScalar(<span class=\"hljs-variable\">_eye</span>.length() * <span class=\"hljs-variable\">_this</span>.panSpeed);\n\n                pan.copy(<span class=\"hljs-variable\">_eye</span>).cross(<span class=\"hljs-variable\">_this</span>.object.up).setLength(mouseChange.x);\n                pan.add(objectUp.copy(<span class=\"hljs-variable\">_this</span>.object.up).setLength(mouseChange.y));\n\n                <span class=\"hljs-variable\">_this</span>.object.<span class=\"hljs-built_in\">position</span>.add(pan);\n                <span class=\"hljs-variable\">_this</span>.target.add(pan);\n\n                <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-variable\">_this</span>.staticMoving) {\n\n                    <span class=\"hljs-variable\">_panStart</span>.copy(<span class=\"hljs-variable\">_panEnd</span>);\n\n                } <span class=\"hljs-keyword\">else</span> {\n\n                    <span class=\"hljs-variable\">_panStart</span>.add(mouseChange.subVectors(<span class=\"hljs-variable\">_panEnd</span>, <span class=\"hljs-variable\">_panStart</span>).multiplyScalar(<span class=\"hljs-variable\">_this</span>.dynamicDampingFactor));\n\n                }\n\n            }\n\n        };\n\n    }());\n\n    this.checkDistances = function () {\n\n        <span class=\"hljs-keyword\">if</span> (!<span class=\"hljs-variable\">_this</span>.noZoom || !<span class=\"hljs-variable\">_this</span>.noPan) {\n\n            <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-variable\">_eye</span>.lengthSq() &gt; <span class=\"hljs-variable\">_this</span>.maxDistance * <span class=\"hljs-variable\">_this</span>.maxDistance) {\n\n                <span class=\"hljs-variable\">_this</span>.object.<span class=\"hljs-built_in\">position</span>.addVectors(<span class=\"hljs-variable\">_this</span>.target, <span class=\"hljs-variable\">_eye</span>.setLength(<span class=\"hljs-variable\">_this</span>.maxDistance));\n                <span class=\"hljs-variable\">_zoomStart</span>.copy(<span class=\"hljs-variable\">_zoomEnd</span>);\n\n            }\n\n            <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-variable\">_eye</span>.lengthSq() &lt; <span class=\"hljs-variable\">_this</span>.minDistance * <span class=\"hljs-variable\">_this</span>.minDistance) {\n\n                <span class=\"hljs-variable\">_this</span>.object.<span class=\"hljs-built_in\">position</span>.addVectors(<span class=\"hljs-variable\">_this</span>.target, <span class=\"hljs-variable\">_eye</span>.setLength(<span class=\"hljs-variable\">_this</span>.minDistance));\n                <span class=\"hljs-variable\">_zoomStart</span>.copy(<span class=\"hljs-variable\">_zoomEnd</span>);\n\n            }\n\n        }\n\n    };\n\n    this.update = function () {\n\n        <span class=\"hljs-variable\">_eye</span>.subVectors(<span class=\"hljs-variable\">_this</span>.object.<span class=\"hljs-built_in\">position</span>, <span class=\"hljs-variable\">_this</span>.target);\n\n        <span class=\"hljs-keyword\">if</span> (!<span class=\"hljs-variable\">_this</span>.noRotate) {\n\n            <span class=\"hljs-variable\">_this</span>.rotateCamera();\n\n        }\n\n        <span class=\"hljs-keyword\">if</span> (!<span class=\"hljs-variable\">_this</span>.noZoom) {\n\n            <span class=\"hljs-variable\">_this</span>.zoomCamera();\n\n        }\n\n        <span class=\"hljs-keyword\">if</span> (!<span class=\"hljs-variable\">_this</span>.noPan) {\n\n            <span class=\"hljs-variable\">_this</span>.panCamera();\n\n        }\n\n        <span class=\"hljs-variable\">_this</span>.object.<span class=\"hljs-built_in\">position</span>.addVectors(<span class=\"hljs-variable\">_this</span>.target, <span class=\"hljs-variable\">_eye</span>);\n\n        <span class=\"hljs-variable\">_this</span>.checkDistances();\n\n        <span class=\"hljs-variable\">_this</span>.object.<span class=\"hljs-built_in\">lookAt</span>(<span class=\"hljs-variable\">_this</span>.target);\n\n        <span class=\"hljs-keyword\">if</span> (lastPosition.distanceToSquared(<span class=\"hljs-variable\">_this</span>.object.<span class=\"hljs-built_in\">position</span>) &gt; EPS) {\n\n            <span class=\"hljs-variable\">_this</span>.dispatchEvent(changeEvent);\n\n            lastPosition.copy(<span class=\"hljs-variable\">_this</span>.object.<span class=\"hljs-built_in\">position</span>);\n\n        }\n\n    };\n\n    this.reset = function () {\n\n        <span class=\"hljs-variable\">_state</span> = STATE.NONE;\n        <span class=\"hljs-variable\">_prevState</span> = STATE.NONE;\n\n        <span class=\"hljs-variable\">_this</span>.target.copy(<span class=\"hljs-variable\">_this</span>.target0);\n        <span class=\"hljs-variable\">_this</span>.object.<span class=\"hljs-built_in\">position</span>.copy(<span class=\"hljs-variable\">_this</span>.position0);\n        <span class=\"hljs-variable\">_this</span>.object.up.copy(<span class=\"hljs-variable\">_this</span>.up0);\n\n        <span class=\"hljs-variable\">_eye</span>.subVectors(<span class=\"hljs-variable\">_this</span>.object.<span class=\"hljs-built_in\">position</span>, <span class=\"hljs-variable\">_this</span>.target);\n\n        <span class=\"hljs-variable\">_this</span>.object.<span class=\"hljs-built_in\">lookAt</span>(<span class=\"hljs-variable\">_this</span>.target);\n\n        <span class=\"hljs-variable\">_this</span>.dispatchEvent(changeEvent);\n\n        lastPosition.copy(<span class=\"hljs-variable\">_this</span>.object.<span class=\"hljs-built_in\">position</span>);\n\n    };\n\n</code></pre>",
         "index": 22
      },
      {
         "type": "comment",
         "lineStart": 371,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>listeners </p>\n"
            }
         ],
         "index": 23
      },
      {
         "type": "source",
         "html": "<pre><code>\n    function keydown(event) {\n\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-variable\">_this</span>.enabled === <span class=\"hljs-literal\">false</span>) return;\n\n        window.removeEventListener(<span class=\"hljs-string\">'keydown'</span>, keydown);\n\n        <span class=\"hljs-variable\">_prevState</span> = <span class=\"hljs-variable\">_state</span>;\n\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-variable\">_state</span> !== STATE.NONE) {\n\n            return;\n\n        } <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (event.keyCode === <span class=\"hljs-variable\">_this</span>.keys[STATE.ROTATE] &amp;&amp; !<span class=\"hljs-variable\">_this</span>.noRotate) {\n\n            <span class=\"hljs-variable\">_state</span> = STATE.ROTATE;\n\n        } <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (event.keyCode === <span class=\"hljs-variable\">_this</span>.keys[STATE.ZOOM] &amp;&amp; !<span class=\"hljs-variable\">_this</span>.noZoom) {\n\n            <span class=\"hljs-variable\">_state</span> = STATE.ZOOM;\n\n        } <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (event.keyCode === <span class=\"hljs-variable\">_this</span>.keys[STATE.PAN] &amp;&amp; !<span class=\"hljs-variable\">_this</span>.noPan) {\n\n            <span class=\"hljs-variable\">_state</span> = STATE.PAN;\n\n        }\n\n    }\n\n    function keyup(event) {\n\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-variable\">_this</span>.enabled === <span class=\"hljs-literal\">false</span>) return;\n\n        <span class=\"hljs-variable\">_state</span> = <span class=\"hljs-variable\">_prevState</span>;\n\n        window.addEventListener(<span class=\"hljs-string\">'keydown'</span>, keydown, <span class=\"hljs-literal\">false</span>);\n\n    }\n\n    function mousedown(event) {\n\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-variable\">_this</span>.enabled === <span class=\"hljs-literal\">false</span>) return;\n\n        event.preventDefault();\n        event.stopPropagation();\n\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-variable\">_state</span> === STATE.NONE) {\n\n            <span class=\"hljs-variable\">_state</span> = event.button;\n\n        }\n\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-variable\">_state</span> === STATE.ROTATE &amp;&amp; !<span class=\"hljs-variable\">_this</span>.noRotate) {\n\n            <span class=\"hljs-variable\">_moveCurr</span>.copy(getMouseOnCircle(event.pageX, event.pageY));\n            <span class=\"hljs-variable\">_movePrev</span>.copy(<span class=\"hljs-variable\">_moveCurr</span>);\n\n        } <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-variable\">_state</span> === STATE.ZOOM &amp;&amp; !<span class=\"hljs-variable\">_this</span>.noZoom) {\n\n            <span class=\"hljs-variable\">_zoomStart</span>.copy(getMouseOnScreen(event.pageX, event.pageY));\n            <span class=\"hljs-variable\">_zoomEnd</span>.copy(<span class=\"hljs-variable\">_zoomStart</span>);\n\n        } <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-variable\">_state</span> === STATE.PAN &amp;&amp; !<span class=\"hljs-variable\">_this</span>.noPan) {\n\n            <span class=\"hljs-variable\">_panStart</span>.copy(getMouseOnScreen(event.pageX, event.pageY));\n            <span class=\"hljs-variable\">_panEnd</span>.copy(<span class=\"hljs-variable\">_panStart</span>);\n\n        }\n\n        document.addEventListener(<span class=\"hljs-string\">'mousemove'</span>, mousemove, <span class=\"hljs-literal\">false</span>);\n        document.addEventListener(<span class=\"hljs-string\">'mouseup'</span>, mouseup, <span class=\"hljs-literal\">false</span>);\n\n        <span class=\"hljs-variable\">_this</span>.dispatchEvent(startEvent);\n\n    }\n\n    function mousemove(event) {\n\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-variable\">_this</span>.enabled === <span class=\"hljs-literal\">false</span>) return;\n\n        event.preventDefault();\n        event.stopPropagation();\n\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-variable\">_state</span> === STATE.ROTATE &amp;&amp; !<span class=\"hljs-variable\">_this</span>.noRotate) {\n\n            <span class=\"hljs-variable\">_movePrev</span>.copy(<span class=\"hljs-variable\">_moveCurr</span>);\n            <span class=\"hljs-variable\">_moveCurr</span>.copy(getMouseOnCircle(event.pageX, event.pageY));\n\n        } <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-variable\">_state</span> === STATE.ZOOM &amp;&amp; !<span class=\"hljs-variable\">_this</span>.noZoom) {\n\n            <span class=\"hljs-variable\">_zoomEnd</span>.copy(getMouseOnScreen(event.pageX, event.pageY));\n\n        } <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-variable\">_state</span> === STATE.PAN &amp;&amp; !<span class=\"hljs-variable\">_this</span>.noPan) {\n\n            <span class=\"hljs-variable\">_panEnd</span>.copy(getMouseOnScreen(event.pageX, event.pageY));\n\n        }\n\n    }\n\n    function mouseup(event) {\n\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-variable\">_this</span>.enabled === <span class=\"hljs-literal\">false</span>) return;\n\n        event.preventDefault();\n        event.stopPropagation();\n\n        <span class=\"hljs-variable\">_state</span> = STATE.NONE;\n\n        document.removeEventListener(<span class=\"hljs-string\">'mousemove'</span>, mousemove);\n        document.removeEventListener(<span class=\"hljs-string\">'mouseup'</span>, mouseup);\n        <span class=\"hljs-variable\">_this</span>.dispatchEvent(endEvent);\n\n    }\n\n    function mousewheel(event) {\n\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-variable\">_this</span>.enabled === <span class=\"hljs-literal\">false</span>) return;\n\n        event.preventDefault();\n        event.stopPropagation();\n\n        <span class=\"hljs-keyword\">switch</span> (event.deltaMode) {\n\n            <span class=\"hljs-keyword\">case</span> <span class=\"hljs-number\">2</span>:\n</code></pre>",
         "index": 24
      },
      {
         "type": "comment",
         "lineStart": 497,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>Zoom in pages </p>\n"
            }
         ],
         "index": 25
      },
      {
         "type": "source",
         "html": "<pre><code>                _zoomStart.y -= <span class=\"hljs-keyword\">event</span>.deltaY * <span class=\"hljs-number\">0.025</span>;\n                <span class=\"hljs-keyword\">break</span>;\n\n            <span class=\"hljs-keyword\">case</span> <span class=\"hljs-number\">1</span>:\n</code></pre>",
         "index": 26
      },
      {
         "type": "comment",
         "lineStart": 502,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>Zoom in lines </p>\n"
            }
         ],
         "index": 27
      },
      {
         "type": "source",
         "html": "<pre><code>                _zoomStart.y -= <span class=\"hljs-keyword\">event</span>.deltaY * <span class=\"hljs-number\">0.01</span>;\n                <span class=\"hljs-keyword\">break</span>;\n\n            <span class=\"hljs-keyword\">default</span>:\n</code></pre>",
         "index": 28
      },
      {
         "type": "comment",
         "lineStart": 507,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>undefined, 0, assume pixels </p>\n"
            }
         ],
         "index": 29
      },
      {
         "type": "source",
         "html": "<pre><code>                <span class=\"hljs-number\">_</span>zoomStart<span class=\"hljs-variable\">.y</span> -= <span class=\"hljs-keyword\">event</span><span class=\"hljs-variable\">.deltaY</span> * <span class=\"hljs-number\">0</span><span class=\"hljs-variable\">.00025</span>;\n                <span class=\"hljs-keyword\">break</span>;\n\n        }\n\n        <span class=\"hljs-number\">_</span><span class=\"hljs-keyword\">this</span><span class=\"hljs-variable\">.dispatchEvent</span>(startEvent);\n        <span class=\"hljs-number\">_</span><span class=\"hljs-keyword\">this</span><span class=\"hljs-variable\">.dispatchEvent</span>(endEvent);\n\n    }\n\n    <span class=\"hljs-keyword\">function</span> touchstart(<span class=\"hljs-keyword\">event</span>) {\n\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-number\">_</span><span class=\"hljs-keyword\">this</span><span class=\"hljs-variable\">.enabled</span> === false) <span class=\"hljs-keyword\">return</span>;\n\n        switch (<span class=\"hljs-keyword\">event</span><span class=\"hljs-variable\">.touches</span><span class=\"hljs-variable\">.length</span>) {\n\n            <span class=\"hljs-keyword\">case</span> <span class=\"hljs-number\">1</span>:\n                <span class=\"hljs-number\">_</span>state = STATE<span class=\"hljs-variable\">.TOUCH_ROTATE</span>;\n                <span class=\"hljs-number\">_</span>moveCurr<span class=\"hljs-variable\">.copy</span>(getMouseOnCircle(<span class=\"hljs-keyword\">event</span><span class=\"hljs-variable\">.touches</span>[<span class=\"hljs-number\">0</span>]<span class=\"hljs-variable\">.pageX</span>, <span class=\"hljs-keyword\">event</span><span class=\"hljs-variable\">.touches</span>[<span class=\"hljs-number\">0</span>]<span class=\"hljs-variable\">.pageY</span>));\n                <span class=\"hljs-number\">_</span>movePrev<span class=\"hljs-variable\">.copy</span>(<span class=\"hljs-number\">_</span>moveCurr);\n                <span class=\"hljs-keyword\">break</span>;\n\n</code></pre>",
         "index": 30
      },
      {
         "type": "comment",
         "lineStart": 530,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>2 or more </p>\n"
            }
         ],
         "index": 31
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-keyword\">default</span>: </code></pre>",
         "index": 32
      },
      {
         "type": "source",
         "html": "<pre><code>                _state = STATE.TOUCH_ZOOM_PAN;\n                <span class=\"hljs-keyword\">var</span> dx = <span class=\"hljs-keyword\">event</span>.touches[<span class=\"hljs-number\">0</span>].pageX - <span class=\"hljs-keyword\">event</span>.touches[<span class=\"hljs-number\">1</span>].pageX;\n                <span class=\"hljs-keyword\">var</span> dy = <span class=\"hljs-keyword\">event</span>.touches[<span class=\"hljs-number\">0</span>].pageY - <span class=\"hljs-keyword\">event</span>.touches[<span class=\"hljs-number\">1</span>].pageY;\n                _touchZoomDistanceEnd = _touchZoomDistanceStart = Math.sqrt(dx * dx + dy * dy);\n\n                <span class=\"hljs-keyword\">var</span> x = (<span class=\"hljs-keyword\">event</span>.touches[<span class=\"hljs-number\">0</span>].pageX + <span class=\"hljs-keyword\">event</span>.touches[<span class=\"hljs-number\">1</span>].pageX) / <span class=\"hljs-number\">2</span>;\n                <span class=\"hljs-keyword\">var</span> y = (<span class=\"hljs-keyword\">event</span>.touches[<span class=\"hljs-number\">0</span>].pageY + <span class=\"hljs-keyword\">event</span>.touches[<span class=\"hljs-number\">1</span>].pageY) / <span class=\"hljs-number\">2</span>;\n                _panStart.copy(getMouseOnScreen(x, y));\n                _panEnd.copy(_panStart);\n                <span class=\"hljs-keyword\">break</span>;\n\n        }\n\n        _this.dispatchEvent(startEvent);\n\n    }\n\n    <span class=\"hljs-function\">function <span class=\"hljs-title\">touchmove</span>(<span class=\"hljs-params\"><span class=\"hljs-keyword\">event</span></span>) </span>{\n\n        <span class=\"hljs-keyword\">if</span> (_this.enabled === <span class=\"hljs-literal\">false</span>) <span class=\"hljs-keyword\">return</span>;\n\n        <span class=\"hljs-keyword\">event</span>.preventDefault();\n        <span class=\"hljs-keyword\">event</span>.stopPropagation();\n\n        <span class=\"hljs-keyword\">switch</span> (<span class=\"hljs-keyword\">event</span>.touches.length) {\n\n            <span class=\"hljs-keyword\">case</span> <span class=\"hljs-number\">1</span>:\n                _movePrev.copy(_moveCurr);\n                _moveCurr.copy(getMouseOnCircle(<span class=\"hljs-keyword\">event</span>.touches[<span class=\"hljs-number\">0</span>].pageX, <span class=\"hljs-keyword\">event</span>.touches[<span class=\"hljs-number\">0</span>].pageY));\n                <span class=\"hljs-keyword\">break</span>;\n\n</code></pre>",
         "index": 33
      },
      {
         "type": "comment",
         "lineStart": 562,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>2 or more </p>\n"
            }
         ],
         "index": 34
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-keyword\">default</span>: </code></pre>",
         "index": 35
      },
      {
         "type": "source",
         "html": "<pre><code>                <span class=\"hljs-keyword\">var</span> dx = <span class=\"hljs-keyword\">event</span>.touches[<span class=\"hljs-number\">0</span>].pageX - <span class=\"hljs-keyword\">event</span>.touches[<span class=\"hljs-number\">1</span>].pageX;\n                <span class=\"hljs-keyword\">var</span> dy = <span class=\"hljs-keyword\">event</span>.touches[<span class=\"hljs-number\">0</span>].pageY - <span class=\"hljs-keyword\">event</span>.touches[<span class=\"hljs-number\">1</span>].pageY;\n                _touchZoomDistanceEnd = Math.sqrt(dx * dx + dy * dy);\n\n                <span class=\"hljs-keyword\">var</span> x = (<span class=\"hljs-keyword\">event</span>.touches[<span class=\"hljs-number\">0</span>].pageX + <span class=\"hljs-keyword\">event</span>.touches[<span class=\"hljs-number\">1</span>].pageX) / <span class=\"hljs-number\">2</span>;\n                <span class=\"hljs-keyword\">var</span> y = (<span class=\"hljs-keyword\">event</span>.touches[<span class=\"hljs-number\">0</span>].pageY + <span class=\"hljs-keyword\">event</span>.touches[<span class=\"hljs-number\">1</span>].pageY) / <span class=\"hljs-number\">2</span>;\n                _panEnd.copy(getMouseOnScreen(x, y));\n                <span class=\"hljs-keyword\">break</span>;\n\n        }\n\n    }\n\n    <span class=\"hljs-function\">function <span class=\"hljs-title\">touchend</span>(<span class=\"hljs-params\"><span class=\"hljs-keyword\">event</span></span>) </span>{\n\n        <span class=\"hljs-keyword\">if</span> (_this.enabled === <span class=\"hljs-literal\">false</span>) <span class=\"hljs-keyword\">return</span>;\n\n        <span class=\"hljs-keyword\">switch</span> (<span class=\"hljs-keyword\">event</span>.touches.length) {\n\n            <span class=\"hljs-keyword\">case</span> <span class=\"hljs-number\">0</span>:\n                _state = STATE.NONE;\n                <span class=\"hljs-keyword\">break</span>;\n\n            <span class=\"hljs-keyword\">case</span> <span class=\"hljs-number\">1</span>:\n                _state = STATE.TOUCH_ROTATE;\n                _moveCurr.copy(getMouseOnCircle(<span class=\"hljs-keyword\">event</span>.touches[<span class=\"hljs-number\">0</span>].pageX, <span class=\"hljs-keyword\">event</span>.touches[<span class=\"hljs-number\">0</span>].pageY));\n                _movePrev.copy(_moveCurr);\n                <span class=\"hljs-keyword\">break</span>;\n\n        }\n\n        _this.dispatchEvent(endEvent);\n\n    }\n\n    <span class=\"hljs-function\">function <span class=\"hljs-title\">contextmenu</span>(<span class=\"hljs-params\"><span class=\"hljs-keyword\">event</span></span>) </span>{\n\n        <span class=\"hljs-keyword\">if</span> (_this.enabled === <span class=\"hljs-literal\">false</span>) <span class=\"hljs-keyword\">return</span>;\n\n        <span class=\"hljs-keyword\">event</span>.preventDefault();\n\n    }\n\n    <span class=\"hljs-keyword\">this</span>.dispose = function () {\n\n        <span class=\"hljs-keyword\">this</span>.domElement.removeEventListener(<span class=\"hljs-string\">'contextmenu'</span>, contextmenu, <span class=\"hljs-literal\">false</span>);\n        <span class=\"hljs-keyword\">this</span>.domElement.removeEventListener(<span class=\"hljs-string\">'mousedown'</span>, mousedown, <span class=\"hljs-literal\">false</span>);\n        <span class=\"hljs-keyword\">this</span>.domElement.removeEventListener(<span class=\"hljs-string\">'wheel'</span>, mousewheel, <span class=\"hljs-literal\">false</span>);\n\n        <span class=\"hljs-keyword\">this</span>.domElement.removeEventListener(<span class=\"hljs-string\">'touchstart'</span>, touchstart, <span class=\"hljs-literal\">false</span>);\n        <span class=\"hljs-keyword\">this</span>.domElement.removeEventListener(<span class=\"hljs-string\">'touchend'</span>, touchend, <span class=\"hljs-literal\">false</span>);\n        <span class=\"hljs-keyword\">this</span>.domElement.removeEventListener(<span class=\"hljs-string\">'touchmove'</span>, touchmove, <span class=\"hljs-literal\">false</span>);\n\n        document.removeEventListener(<span class=\"hljs-string\">'mousemove'</span>, mousemove, <span class=\"hljs-literal\">false</span>);\n        document.removeEventListener(<span class=\"hljs-string\">'mouseup'</span>, mouseup, <span class=\"hljs-literal\">false</span>);\n\n        window.removeEventListener(<span class=\"hljs-string\">'keydown'</span>, keydown, <span class=\"hljs-literal\">false</span>);\n        window.removeEventListener(<span class=\"hljs-string\">'keyup'</span>, keyup, <span class=\"hljs-literal\">false</span>);\n\n    };\n\n    <span class=\"hljs-keyword\">this</span>.domElement.addEventListener(<span class=\"hljs-string\">'contextmenu'</span>, contextmenu, <span class=\"hljs-literal\">false</span>);\n    <span class=\"hljs-keyword\">this</span>.domElement.addEventListener(<span class=\"hljs-string\">'mousedown'</span>, mousedown, <span class=\"hljs-literal\">false</span>);\n    <span class=\"hljs-keyword\">this</span>.domElement.addEventListener(<span class=\"hljs-string\">'wheel'</span>, mousewheel, <span class=\"hljs-literal\">false</span>);\n\n    <span class=\"hljs-keyword\">this</span>.domElement.addEventListener(<span class=\"hljs-string\">'touchstart'</span>, touchstart, <span class=\"hljs-literal\">false</span>);\n    <span class=\"hljs-keyword\">this</span>.domElement.addEventListener(<span class=\"hljs-string\">'touchend'</span>, touchend, <span class=\"hljs-literal\">false</span>);\n    <span class=\"hljs-keyword\">this</span>.domElement.addEventListener(<span class=\"hljs-string\">'touchmove'</span>, touchmove, <span class=\"hljs-literal\">false</span>);\n\n    window.addEventListener(<span class=\"hljs-string\">'keydown'</span>, keydown, <span class=\"hljs-literal\">false</span>);\n    window.addEventListener(<span class=\"hljs-string\">'keyup'</span>, keyup, <span class=\"hljs-literal\">false</span>);\n\n    <span class=\"hljs-keyword\">this</span>.handleResize();\n\n</code></pre>",
         "index": 36
      },
      {
         "type": "comment",
         "lineStart": 637,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>force an update at start </p>\n"
            }
         ],
         "index": 37
      },
      {
         "type": "source",
         "html": "<pre><code>    this.update()<span class=\"hljs-comment\">;</span>\n\n}<span class=\"hljs-comment\">;</span>\n\nTHREE.TrackballControls.prototype = Object.create(THREE.EventDispatcher.prototype)<span class=\"hljs-comment\">;</span>\nTHREE.TrackballControls.prototype.constructor = THREE.TrackballControls<span class=\"hljs-comment\">;</span></code></pre>",
         "index": 38
      }
   ],
   "/src/lib/until.js": [
      {
         "lineStart": 1,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>@file 工具库\n @author 涂强（tuqiang01@baidu.com）</p>\n"
            }
         ],
         "index": 0
      },
      {
         "lineStart": 6,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>eslint-disable */ </p>\n"
            }
         ],
         "index": 1
      },
      {
         "type": "source",
         "html": "<pre><code>\n<span class=\"hljs-keyword\">const</span> _ = {};\n\n\n_.type = <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">obj</span>) </span>{\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-built_in\">Object</span>.prototype.toString.call(obj).replace(<span class=\"hljs-regexp\">/\\[object\\s|\\]/g</span>, <span class=\"hljs-string\">\"\"</span>);\n};\n\n_.isArray = <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">list</span>) </span>{\n    <span class=\"hljs-keyword\">return</span> _.type(list) === <span class=\"hljs-string\">\"Array\"</span>;\n};\n\n_.isString = <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">list</span>) </span>{\n    <span class=\"hljs-keyword\">return</span> _.type(list) === <span class=\"hljs-string\">\"String\"</span>;\n};\n\n_.isObject = <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">list</span>) </span>{\n    <span class=\"hljs-keyword\">return</span> _.type(list) === <span class=\"hljs-string\">\"Object\"</span>;\n};\n\n_.isFunction = <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">list</span>) </span>{\n    <span class=\"hljs-keyword\">return</span> _.type(list) === <span class=\"hljs-string\">\"Function\"</span>;\n};\n\n_.isNullString = <span class=\"hljs-function\">(<span class=\"hljs-params\">data</span>) =&gt;</span> {\n    <span class=\"hljs-keyword\">return</span> data.replace(<span class=\"hljs-regexp\">/(^\\s*)|(\\s*$)/g</span>, <span class=\"hljs-string\">\"\"</span>).length ? <span class=\"hljs-literal\">false</span> : <span class=\"hljs-literal\">true</span>;\n};\n\n_.deleteEmptyProperty = <span class=\"hljs-function\">(<span class=\"hljs-params\">object</span>) =&gt;</span> {\n    <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">const</span> i <span class=\"hljs-keyword\">in</span> object) {\n        <span class=\"hljs-keyword\">const</span> value = object[i];\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">typeof</span> value === <span class=\"hljs-string\">\"object\"</span>) {\n            <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-built_in\">Array</span>.isArray(value)) {\n                <span class=\"hljs-keyword\">if</span> (value.length === <span class=\"hljs-number\">0</span>) {\n                    <span class=\"hljs-keyword\">delete</span> object[i];\n                    <span class=\"hljs-keyword\">continue</span>;\n                }\n            }\n            _.deleteEmptyProperty(value);\n            <span class=\"hljs-keyword\">if</span> (_.isEmpty(value)) {\n                <span class=\"hljs-keyword\">delete</span> object[i];\n            }\n        } <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (value === <span class=\"hljs-string\">\"\"</span> || value === <span class=\"hljs-literal\">null</span> || value === <span class=\"hljs-literal\">undefined</span>) {\n            <span class=\"hljs-keyword\">delete</span> object[i];\n\n        }\n    }\n};\n_.isEmptyObject = <span class=\"hljs-function\">(<span class=\"hljs-params\">object</span>) =&gt;</span> {\n    <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">const</span> name <span class=\"hljs-keyword\">in</span> object) {\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">false</span>;\n    }\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">true</span>;\n};\n\n_.copyArr = <span class=\"hljs-function\">(<span class=\"hljs-params\">arr</span>) =&gt;</span> {\n    <span class=\"hljs-keyword\">const</span> newArr = [];\n    arr.forEach(<span class=\"hljs-function\">(<span class=\"hljs-params\">item</span>) =&gt;</span> {\n        newArr.push(item);\n    });\n    <span class=\"hljs-keyword\">return</span> newArr;\n};\n\n_.objToArr = <span class=\"hljs-function\">(<span class=\"hljs-params\">obj</span>) =&gt;</span> {\n    <span class=\"hljs-keyword\">const</span> ar = [];\n    <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">const</span> key <span class=\"hljs-keyword\">in</span> obj){\n        ar.push(obj[key]);\n    }\n    <span class=\"hljs-keyword\">return</span> ar;\n};\n\n\n\n_.setStatePromise = <span class=\"hljs-function\">(<span class=\"hljs-params\">that, newState</span>) =&gt;</span> {\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Promise</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">resolve</span>) =&gt;</span> {\n        that.setState(newState, () =&gt; {\n            resolve();\n        });\n    });\n};\n\n\n</code></pre>",
         "index": 2
      },
      {
         "type": "comment",
         "lineStart": 88,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>判断字符串有多少个字节 </p>\n"
            }
         ],
         "index": 3
      },
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-keyword\">_</span>.strByteLength = (data) =&gt; {\n    <span class=\"hljs-keyword\">let</span> len = <span class=\"hljs-number\">0</span>;\n    <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">let</span> i = <span class=\"hljs-number\">0</span>;i &lt; data.length;i++){\n</code></pre>",
         "index": 4
      },
      {
         "type": "comment",
         "lineStart": 92,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>全角 </p>\n"
            }
         ],
         "index": 5
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-keyword\">if</span> (data [i].match(<span class=\"hljs-regexp\">/[^x00-xff]/ig</span>) !== <span class=\"hljs-literal\">null</span>){\n            len += <span class=\"hljs-number\">2</span>;\n        } <span class=\"hljs-keyword\">else</span> {\n            len += <span class=\"hljs-number\">1</span>;\n        }\n    }\n    <span class=\"hljs-keyword\">return</span> len;\n};\n\n_.isIE = <span class=\"hljs-function\"><span class=\"hljs-params\">(version)</span> =&gt;</span> {\n    const b = <span class=\"hljs-built_in\">document</span>.createElement(<span class=\"hljs-string\">\"b\"</span>);\n    b.innerHTML = `<span class=\"javascript\">&lt;!--[<span class=\"hljs-keyword\">if</span> IE ${version} ]&gt;<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span></span><span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">![endif]--</span>&gt;</span></span></span>`;\n    <span class=\"hljs-keyword\">return</span> b.getElementsByTagName(<span class=\"hljs-string\">\"i\"</span>).length === <span class=\"hljs-number\">1</span>;\n};\n\n\n</code></pre>",
         "index": 6
      },
      {
         "lineStart": 109,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>生成一组平滑的随机数，根据数量，将随机数均匀的分布\n @param {String} count 需要生成几个数据\n @param {Number} bits 需要保留几位小数\n @returns {Array} 对应的数组</p>\n"
            }
         ],
         "index": 7
      },
      {
         "type": "source",
         "html": "<pre><code>\n_.smoothRandom = <span class=\"hljs-function\">(<span class=\"hljs-params\">count, bits</span>) =&gt;</span> {\n    <span class=\"hljs-keyword\">let</span> num = <span class=\"hljs-built_in\">parseInt</span>(count);\n    <span class=\"hljs-keyword\">const</span> rs = [];\n    <span class=\"hljs-keyword\">if</span> ( <span class=\"hljs-built_in\">isNaN</span>(num) || (<span class=\"hljs-keyword\">typeof</span> num !== <span class=\"hljs-string\">\"number\"</span>)){\n        num = <span class=\"hljs-number\">1</span>;\n    }\n    <span class=\"hljs-keyword\">const</span> step = <span class=\"hljs-number\">1</span> / num ;\n    <span class=\"hljs-keyword\">let</span> i = <span class=\"hljs-number\">1</span>;\n    <span class=\"hljs-keyword\">while</span> (i &lt;= num){\n        <span class=\"hljs-keyword\">const</span> <span class=\"hljs-built_in\">number</span> = <span class=\"hljs-built_in\">Math</span>.random() * step * i;\n        <span class=\"hljs-keyword\">const</span> flag = <span class=\"hljs-built_in\">number</span> &gt; (step * (i - <span class=\"hljs-number\">1</span>)) &amp;&amp; <span class=\"hljs-built_in\">number</span> &lt; (step * (i + <span class=\"hljs-number\">1</span>));\n        <span class=\"hljs-keyword\">if</span> (flag){\n            rs.push(+<span class=\"hljs-built_in\">number</span>.toFixed(bits));\n            i++;\n        }\n    }\n    <span class=\"hljs-keyword\">return</span> rs;\n};\n\n</code></pre>",
         "index": 8
      },
      {
         "lineStart": 134,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>Hex转RGBA\n @param {String} color Hex颜色值\n @param {Number} alpha 值 默认为1\n @returns {object} {rbg:{String},toString:{function} } RGB颜色值</p>\n"
            }
         ],
         "index": 9
      },
      {
         "type": "source",
         "html": "<pre><code>\n_.hexToRgba = <span class=\"hljs-function\">(<span class=\"hljs-params\">color, alpha</span>) =&gt;</span> {\n    <span class=\"hljs-keyword\">let</span> newColor = color.replace(<span class=\"hljs-string\">\"#\"</span>, <span class=\"hljs-string\">\"\"</span>);\n    <span class=\"hljs-keyword\">const</span> a = <span class=\"hljs-built_in\">parseFloat</span>(alpha) || <span class=\"hljs-number\">1</span>;\n    <span class=\"hljs-keyword\">if</span> (newColor.length === <span class=\"hljs-number\">3</span>) {\n        newColor = newColor.split(<span class=\"hljs-string\">\"\"</span>).map(<span class=\"hljs-function\"><span class=\"hljs-params\">item</span> =&gt;</span> <span class=\"hljs-built_in\">parseInt</span>(<span class=\"hljs-string\">`0x<span class=\"hljs-subst\">${item}</span><span class=\"hljs-subst\">${item}</span>`</span>));\n    } <span class=\"hljs-keyword\">else</span> {\n        newColor = newColor.split(<span class=\"hljs-string\">\"\"</span>).map(<span class=\"hljs-function\">(<span class=\"hljs-params\">item, index</span>) =&gt;</span> {\n            <span class=\"hljs-keyword\">if</span> (index % <span class=\"hljs-number\">2</span> === <span class=\"hljs-number\">0</span>) {\n                <span class=\"hljs-keyword\">return</span> <span class=\"hljs-built_in\">parseInt</span>(<span class=\"hljs-string\">`0x<span class=\"hljs-subst\">${item}</span><span class=\"hljs-subst\">${newColor[index + <span class=\"hljs-number\">1</span>]}</span>`</span>);\n            }\n            <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">\"\"</span>;\n        }).filter(<span class=\"hljs-function\"><span class=\"hljs-params\">item</span> =&gt;</span> item !== <span class=\"hljs-string\">\"\"</span>);\n    }\n    <span class=\"hljs-keyword\">const</span> result = {\n        <span class=\"hljs-attr\">rgb</span>: newColor\n    };\n    result.toString = <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> <span class=\"hljs-string\">`RGBA(<span class=\"hljs-subst\">${newColor.join(<span class=\"hljs-string\">\",\"</span>)}</span>,<span class=\"hljs-subst\">${a}</span>)`</span>;\n\n    <span class=\"hljs-keyword\">return</span> result;\n};\n\n</code></pre>",
         "index": 10
      },
      {
         "lineStart": 161,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>RGB转Hex\n @param {Array} color R、G、B三个值\n @returns {string} Hex值</p>\n"
            }
         ],
         "index": 11
      },
      {
         "type": "source",
         "html": "<pre><code>\n_.rgbToHex = <span class=\"hljs-function\">(<span class=\"hljs-params\">...color</span>) =&gt;</span> {\n    <span class=\"hljs-keyword\">const</span> newColor = color.map(<span class=\"hljs-function\"><span class=\"hljs-params\">item</span> =&gt;</span> {\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-built_in\">Number</span>(item).toString(<span class=\"hljs-number\">16</span>).length &lt; <span class=\"hljs-number\">2</span> ?\n            <span class=\"hljs-string\">`0<span class=\"hljs-subst\">${<span class=\"hljs-built_in\">Number</span>(item).toString(<span class=\"hljs-number\">16</span>)}</span>`</span> :\n            <span class=\"hljs-built_in\">Number</span>(item).toString(<span class=\"hljs-number\">16</span>);\n    }).join(<span class=\"hljs-string\">\"\"</span>);\n\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">`#<span class=\"hljs-subst\">${newColor}</span>`</span>;\n};\n\n</code></pre>",
         "index": 12
      },
      {
         "lineStart": 176,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>函数防抖\n @type {{}}</p>\n"
            }
         ],
         "index": 13
      },
      {
         "type": "source",
         "html": "<pre><code>\n\n<span class=\"maxima\"><span class=\"hljs-symbol\">_</span>.debounce = (fn, <span class=\"hljs-built_in\">delay</span>) =&gt; {\n    <span class=\"hljs-built_in\">let</span> <span class=\"hljs-built_in\">timer</span> = <span class=\"hljs-number\">0</span>;\n    <span class=\"hljs-built_in\">return</span> (...<span class=\"hljs-built_in\">args</span>) =&gt; {\n        clearTimeout(<span class=\"hljs-built_in\">timer</span>);\n        <span class=\"hljs-built_in\">timer</span> = setTimeout(() =&gt; {\n            fn(...<span class=\"hljs-built_in\">args</span>);\n        }, <span class=\"hljs-built_in\">delay</span>);\n    };\n};\n\n</span></code></pre>",
         "index": 14
      },
      {
         "lineStart": 191,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>取url中的参数\n 调用方法_.getUrlParam(&quot;参数名&quot;)\n @param {string} name The url param key name.\n @returns {*} The value with the key in the url search.</p>\n"
            }
         ],
         "index": 15
      },
      {
         "type": "source",
         "html": "<pre><code>\n_.getUrlParam = <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">name</span>) </span>{\n    <span class=\"hljs-keyword\">const</span> reg = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">RegExp</span>(<span class=\"hljs-string\">`(^|&amp;)<span class=\"hljs-subst\">${name}</span>=([^&amp;]*)(&amp;|$)`</span>, <span class=\"hljs-string\">\"i\"</span>),\n        stringStart = <span class=\"hljs-number\">1</span>;\n    <span class=\"hljs-keyword\">const</span> r = <span class=\"hljs-built_in\">window</span>.location.href.substr(stringStart).match(reg);\n    <span class=\"hljs-keyword\">if</span> (r !== <span class=\"hljs-literal\">null</span>) {\n        <span class=\"hljs-keyword\">const</span> valueIndex = <span class=\"hljs-number\">2</span>;\n\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-built_in\">decodeURIComponent</span>(r[valueIndex]);\n    }\n\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">null</span>;\n};\n</code></pre>",
         "index": 16
      },
      {
         "lineStart": 209,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>几何计算\n @勾股定理\n @三维矩阵变换\n @随机整数\n @raf polyfill</p>\n"
            }
         ],
         "index": 17
      },
      {
         "lineStart": 217,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>勾股定理计算\n @param {number} side1\n @param {number} side2\n @param {number} hypotenuse 斜边\n @returns {*}</p>\n"
            }
         ],
         "index": 18
      },
      {
         "type": "source",
         "html": "<pre><code>\n_.pythagoras = <span class=\"hljs-function\">(<span class=\"hljs-params\">side1,side2,hypotenuse</span>) =&gt;</span> {\n    <span class=\"hljs-keyword\">let</span> rs;\n    <span class=\"hljs-keyword\">if</span>(!hypotenuse){\n        rs = <span class=\"hljs-built_in\">Math</span>.sqrt(  <span class=\"hljs-built_in\">Math</span>.pow(+side1,<span class=\"hljs-number\">2</span>) + <span class=\"hljs-built_in\">Math</span>.pow(+side2,<span class=\"hljs-number\">2</span>)  );\n    }<span class=\"hljs-keyword\">else</span> {\n        <span class=\"hljs-keyword\">const</span> s1 = +side1 || <span class=\"hljs-number\">0</span>;\n        <span class=\"hljs-keyword\">const</span> s2 = +side1 || <span class=\"hljs-number\">0</span>;\n        rs = <span class=\"hljs-built_in\">Math</span>.sqrt(  <span class=\"hljs-built_in\">Math</span>.pow(+hypotenuse,<span class=\"hljs-number\">2</span>) - <span class=\"hljs-built_in\">Math</span>.pow(s1,<span class=\"hljs-number\">2</span>) - <span class=\"hljs-built_in\">Math</span>.pow(s2,<span class=\"hljs-number\">2</span>)  );\n    }\n    <span class=\"hljs-keyword\">return</span>  rs;\n};\n\n</code></pre>",
         "index": 19
      },
      {
         "lineStart": 236,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>三维矩阵变换\n @param {string} type 饶哪个轴旋转\n @param {number} angle 旋转角度\n @param {num} x 坐标\n @param {num} y 坐标\n @param {num} z 坐标\n @returns {object}</p>\n"
            }
         ],
         "index": 20
      },
      {
         "type": "source",
         "html": "<pre><code>\n\n<span class=\"mel\">_.matrix3DRotate = (type = <span class=\"hljs-string\">'x'</span>,<span class=\"hljs-keyword\">angle</span>,x,y,z) =&gt; {\n    let <span class=\"hljs-keyword\">cos</span> = Math.<span class=\"hljs-keyword\">cos</span>(<span class=\"hljs-keyword\">angle</span>);\n    let <span class=\"hljs-keyword\">sin</span> = Math.<span class=\"hljs-keyword\">sin</span>(<span class=\"hljs-keyword\">angle</span>);\n    <span class=\"hljs-keyword\">switch</span> (type){\n        <span class=\"hljs-keyword\">case</span> <span class=\"hljs-string\">'x'</span>:{\n\n        }\n        <span class=\"hljs-keyword\">default</span>:<span class=\"hljs-keyword\">return</span> {}\n    }\n    <span class=\"hljs-keyword\">return</span> {}\n}\n\n\n\n</span></code></pre>",
         "index": 21
      },
      {
         "type": "comment",
         "lineStart": 260,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>获得一个区间的整数随机数 不指定则为  [0- 100] 闭区间</p>\n"
            }
         ],
         "index": 22
      },
      {
         "type": "source",
         "html": "<pre><code>_.intRandom = <span class=\"hljs-function\">(<span class=\"hljs-params\">max = <span class=\"hljs-number\">100</span>,min = <span class=\"hljs-number\">0</span></span>) =&gt;</span> {\n    min = <span class=\"hljs-built_in\">Math</span>.ceil(min);\n    max = <span class=\"hljs-built_in\">Math</span>.floor(max);\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-built_in\">Math</span>.floor(<span class=\"hljs-built_in\">Math</span>.random() * (max - min + <span class=\"hljs-number\">1</span>)) + min;\n}\n\n\n_.raf = <span class=\"hljs-function\">(<span class=\"hljs-params\">callback</span>) =&gt;</span> {\n    <span class=\"hljs-built_in\">window</span>.ranf =  <span class=\"hljs-built_in\">window</span>.requestAnimationFrame ||\n        <span class=\"hljs-built_in\">window</span>.webkitRequestAnimationFrame ||\n        <span class=\"hljs-built_in\">window</span>.mozRequestAnimationFrame ||\n        <span class=\"hljs-built_in\">window</span>.oRequestAnimationFrame ||\n        <span class=\"hljs-built_in\">window</span>.msRequestAnimationFrame ||\n\n        <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">callback</span>) </span>{\n            <span class=\"hljs-keyword\">let</span> start,\n                finish;\n            <span class=\"hljs-keyword\">const</span> self = {};\n            <span class=\"hljs-built_in\">window</span>.setTimeout(<span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n                start = +<span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>();\n                callback(start);\n                finish = +<span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>();\n\n                self.timeout = <span class=\"hljs-number\">1000</span> / <span class=\"hljs-number\">60</span> - (finish - start);\n\n            }, self.timeout);\n        };\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-built_in\">window</span>.ranf(callback);\n};\n\n</code></pre>",
         "index": 23
      },
      {
         "lineStart": 291,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>数字映射\n @param {number} origin 提供数据\n @param {number} oriStart 数据起点\n @param {number} oriEnd 数据重点\n @param {number} tarStart 映射数据起点\n @param {number} tarEnd 映射数据终点\n @returns {number} 映射数据</p>\n"
            }
         ],
         "index": 24
      },
      {
         "type": "source",
         "html": "<pre><code>\n_.analogy = <span class=\"hljs-function\"><span class=\"hljs-params\">(origin,oriStart,oriEnd,tarStart,tarEnd)</span> =&gt;</span> {\n    <span class=\"hljs-keyword\">return</span> ((tarEnd - tarStart) * ((origin - oriStart) / (oriEnd - oriStart))) + tarStart;\n}\n\n</code></pre>",
         "index": 25
      },
      {
         "lineStart": 304,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>float32类型的array.concat\n @param first\n @param second\n @returns {Float32Array}\n @constructor</p>\n"
            }
         ],
         "index": 26
      },
      {
         "type": "source",
         "html": "<pre><code>\n<span class=\"hljs-symbol\">_</span>.Float32Concat = (<span class=\"hljs-built_in\">first</span>, <span class=\"hljs-built_in\">second</span>) =&gt;{\n    <span class=\"hljs-built_in\">var</span> firstLength = <span class=\"hljs-built_in\">first</span>.<span class=\"hljs-built_in\">length</span>,\n        result = <span class=\"hljs-built_in\">new</span> Float32Array(firstLength + <span class=\"hljs-built_in\">second</span>.<span class=\"hljs-built_in\">length</span>);\n\n    result.set(<span class=\"hljs-built_in\">first</span>);\n    result.set(<span class=\"hljs-built_in\">second</span>, firstLength);\n\n    <span class=\"hljs-built_in\">return</span> result;\n}\n\n</code></pre>",
         "index": 27
      },
      {
         "lineStart": 321,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>数组堆叠 将数组循环顺序堆叠于一个指定长度的数组\n @param maxLength 目标长度\n @param origin 源数组\n @returns {*} 结果数组</p>\n"
            }
         ],
         "index": 28
      },
      {
         "type": "source",
         "html": "<pre><code>\n<span class=\"hljs-symbol\">_</span>.arrayStacked = (maxLength,<span class=\"hljs-built_in\">origin</span>) =&gt; {\n    <span class=\"hljs-keyword\">if</span>(!Array.isArray(<span class=\"hljs-built_in\">origin</span>)) <span class=\"hljs-built_in\">return</span>;\n    <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-built_in\">origin</span>.<span class=\"hljs-built_in\">length</span> === <span class=\"hljs-number\">0</span>) <span class=\"hljs-built_in\">return</span>;\n    <span class=\"hljs-keyword\">if</span>(<span class=\"hljs-built_in\">origin</span>.<span class=\"hljs-built_in\">length</span> &gt; maxLength) <span class=\"hljs-built_in\">return</span> <span class=\"hljs-built_in\">origin</span>;\n\n    const rs = [];\n    <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-built_in\">let</span> i = <span class=\"hljs-number\">0</span>; i &lt; maxLength; i++){\n        const trueIndex = i <span class=\"hljs-symbol\">%</span> <span class=\"hljs-built_in\">origin</span>.<span class=\"hljs-built_in\">length</span>;\n        rs[i] = <span class=\"hljs-built_in\">origin</span>[trueIndex]\n    }\n    <span class=\"hljs-built_in\">return</span> rs;\n}\n\n\n\nmodule.exports = <span class=\"hljs-symbol\">_</span>;\n</code></pre>",
         "index": 29
      }
   ],
   "/src/main.js": [
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./lib/TrackballControls.js'</span>\n\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./js/index.js'</span>\n\n</code></pre>",
         "index": 0
      }
   ],
   "/src/js/particles/ModelParticles.js": [
      {
         "lineStart": 1,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>@file 模型粒子集合\n @author 陈蔓青（chenmanqing@baidu.com)</p>\n"
            }
         ],
         "index": 0
      },
      {
         "lineStart": 5,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>eslint-disable */ </p>\n"
            }
         ],
         "index": 1
      },
      {
         "type": "source",
         "html": "<pre><code>\n\n<span class=\"clean\"><span class=\"hljs-keyword\">import</span> Particles <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./Particles'</span>;\n\n</span></code></pre>",
         "index": 2
      },
      {
         "lineStart": 9,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [],
               "name": "ModelParticles",
               "defHtml": " {<a data-jsdef-prop=\"Class\">Class</a>}",
               "commentHtml": "<p>模型粒子集合</p>\n"
            }
         ],
         "index": 3
      },
      {
         "type": "source",
         "html": "<pre><code>\nexport <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">ModelParticles</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Particles</span> </span>{\n    constructor() {\n        <span class=\"hljs-keyword\">super</span>();\n    }\n\n    </code></pre>",
         "index": 4
      },
      {
         "lineStart": 18,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 3,
                     "children": [],
                     "name": "path",
                     "defHtml": " {<a data-jsdef-prop=\"string\">string</a>}",
                     "commentHtml": "<p> 要加载的模型的 json 路径信息</p>\n"
                  },
                  {
                     "level": 3,
                     "children": [],
                     "name": "vertices",
                     "defHtml": " {<a data-jsdef-prop=\"Promise\">Promise</a>}",
                     "commentHtml": "<p> 顶点集合 vertices</p>\n"
                  }
               ],
               "name": "ModelParticles.loadPoints",
               "defHtml": " (<a data-jsdef-prop=\"path\">path</a>, <a data-jsdef-prop=\"material\">material</a>) =&gt; <a data-jsdef-prop=\"modelVertexInfo\">modelVertexInfo</a>",
               "commentHtml": "<p>上传模型</p>\n"
            }
         ],
         "index": 5
      },
      {
         "type": "source",
         "html": "<pre><code>\n\n<span class=\"typescript\">    loadPoints(path) {\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Promise</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">resolve, reject</span>) =&gt;</span> {\n            <span class=\"hljs-keyword\">const</span> loader = <span class=\"hljs-keyword\">new</span> THREE.JSONLoader();\n\n            loader.load(path, <span class=\"hljs-function\"><span class=\"hljs-params\">geometry</span> =&gt;</span> {\n</span></code></pre>",
         "index": 6
      },
      {
         "type": "comment",
         "lineStart": 30,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>顶点信息,  [{x:10, y:10, z:10}, ...]</p>\n"
            }
         ],
         "index": 7
      },
      {
         "type": "source",
         "html": "<pre><code>                <span class=\"hljs-keyword\">const</span> <span class=\"hljs-keyword\">vertices</span> = geometry.<span class=\"hljs-keyword\">vertices</span>;\n\n                <span class=\"hljs-keyword\">const</span> verticesLen = <span class=\"hljs-keyword\">vertices</span>.<span class=\"hljs-built_in\">length</span>;\n</code></pre>",
         "index": 8
      },
      {
         "type": "comment",
         "lineStart": 34,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>存储位置信息 </p>\n"
            }
         ],
         "index": 9
      },
      {
         "type": "source",
         "html": "<pre><code>                <span class=\"hljs-keyword\">const</span> positions = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Float32Array</span>(verticesLen * <span class=\"hljs-number\">3</span>); </code></pre>",
         "index": 10
      },
      {
         "type": "source",
         "html": "<pre><code>                <span class=\"hljs-keyword\">const</span> colors = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Float32Array</span>(verticesLen * <span class=\"hljs-number\">3</span>);\n                <span class=\"hljs-keyword\">const</span> sizes = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Float32Array</span>(verticesLen);\n\n                <span class=\"hljs-keyword\">let</span> vertex;\n                <span class=\"hljs-keyword\">let</span> <span class=\"hljs-built_in\">color</span> = <span class=\"hljs-keyword\">new</span> THREE.Color();\n\n</code></pre>",
         "index": 11
      },
      {
         "type": "comment",
         "lineStart": 41,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>const offestVector = new THREE.Vector3(offset.x, offset.y, offset.z); </p>\n"
            }
         ],
         "index": 12
      },
      {
         "type": "comment",
         "lineStart": 42,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>读取顶点信息 </p>\n"
            }
         ],
         "index": 13
      },
      {
         "type": "source",
         "html": "<pre><code>                <span class=\"hljs-keyword\">for</span> (let <span class=\"hljs-built_in\">i</span> = <span class=\"hljs-number\">0</span>, l = verticesLen; <span class=\"hljs-built_in\">i</span> &lt; l; <span class=\"hljs-built_in\">i</span>++) {\n                    vertex = vertices[i];\n</code></pre>",
         "index": 14
      },
      {
         "type": "comment",
         "lineStart": 45,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>add(offestVector). </p>\n"
            }
         ],
         "index": 15
      },
      {
         "type": "source",
         "html": "<pre><code>                    <span class=\"hljs-selector-tag\">vertex</span><span class=\"hljs-selector-class\">.toArray</span>(<span class=\"hljs-selector-tag\">positions</span>, <span class=\"hljs-selector-tag\">i</span> * 3);\n</code></pre>",
         "index": 16
      },
      {
         "type": "comment",
         "lineStart": 47,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>颜色 </p>\n"
            }
         ],
         "index": 17
      },
      {
         "type": "source",
         "html": "<pre><code>                    color.setHSL(<span class=\"hljs-number\">0.01</span> + <span class=\"hljs-number\">0.1</span> * (i / l), <span class=\"hljs-number\">1.0</span>, <span class=\"hljs-number\">0.5</span>); </code></pre>",
         "index": 18
      },
      {
         "type": "source",
         "html": "<pre><code>                    <span class=\"hljs-selector-tag\">color</span><span class=\"hljs-selector-class\">.toArray</span>(<span class=\"hljs-selector-tag\">colors</span>, <span class=\"hljs-selector-tag\">i</span> * 3);\n</code></pre>",
         "index": 19
      },
      {
         "type": "comment",
         "lineStart": 49,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>大小 </p>\n"
            }
         ],
         "index": 20
      },
      {
         "type": "source",
         "html": "<pre><code>                    sizes[i] = <span class=\"hljs-keyword\">this</span>.PARTICLE_SIZE * <span class=\"hljs-number\">0.2</span>; </code></pre>",
         "index": 21
      },
      {
         "type": "source",
         "html": "<pre><code>                }\n                <span class=\"hljs-keyword\">this</span>.vertexInfo.positions = positions;\n                <span class=\"hljs-keyword\">this</span>.vertexInfo.colors = colors;\n                <span class=\"hljs-keyword\">this</span>.vertexInfo.sizes = sizes;\n\n                resolve(vertices);\n            });\n        })\n    }\n}</code></pre>",
         "index": 22
      }
   ],
   "/src/js/particles/Particles.js": [
      {
         "lineStart": 1,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>@file 粒子集合，随机粒子 RandomParticles 和模型粒子 modelParticles 的父类，每个场景可包含多个particles\n @author 陈蔓青（chenmanqing@baidu.com)</p>\n"
            }
         ],
         "index": 0
      },
      {
         "lineStart": 5,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>eslint-disable */ </p>\n"
            }
         ],
         "index": 1
      },
      {
         "type": "comment",
         "lineStart": 8,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>粒子材质 </p>\n"
            }
         ],
         "index": 2
      },
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-keyword\">const</span> basicMaterial = <span class=\"hljs-keyword\">new</span> THREE.ShaderMaterial({ </code></pre>",
         "index": 3
      },
      {
         "type": "source",
         "html": "<pre><code>    <span class=\"hljs-selector-tag\">uniforms</span>: {\n        <span class=\"hljs-attribute\">color</span>: {\n            value: new THREE.<span class=\"hljs-built_in\">Color</span>(0xffffff)\n        },\n        <span class=\"hljs-selector-tag\">texture</span>: {\n            <span class=\"hljs-attribute\">value</span>: new THREE.<span class=\"hljs-built_in\">TextureLoader</span>().<span class=\"hljs-built_in\">load</span>(<span class=\"hljs-string\">'./textures/sprites/disc.png'</span>)\n        }\n    },\n</code></pre>",
         "index": 4
      },
      {
         "type": "comment",
         "lineStart": 17,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>定义的顶点着色器，和片元着色器，它们负责具体的粒子状态的运算 </p>\n"
            }
         ],
         "index": 5
      },
      {
         "type": "source",
         "html": "<pre><code>    <span class=\"hljs-attribute\">vertexShader</span>: document.getElementById(<span class=\"hljs-string\">'vertexshader'</span>).textContent,\n    <span class=\"hljs-attribute\">fragmentShader</span>: document.getElementById(<span class=\"hljs-string\">'fragmentshader'</span>).textContent,\n    <span class=\"hljs-attribute\">alphaTest</span>: <span class=\"hljs-number\">0.9</span>\n});\n</code></pre>",
         "index": 6
      },
      {
         "lineStart": 22,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [],
               "name": "Particles",
               "defHtml": " {<a data-jsdef-prop=\"Class\">Class</a>}",
               "commentHtml": "<p>粒子集合</p>\n"
            }
         ],
         "index": 7
      },
      {
         "type": "source",
         "html": "<pre><code>\n<span class=\"hljs-builtin-name\">export</span><span class=\"hljs-built_in\"> default </span>class Particles {\n    constructor() {\n        </code></pre>",
         "index": 8
      },
      {
         "lineStart": 28,
         "type": "comment",
         "api": [],
         "index": 9
      },
      {
         "type": "source",
         "html": "<pre><code>\n        <span class=\"hljs-keyword\">this</span>.vertexInfo = {\n            positions: [],\n            colors: [],\n            sizes: []\n        }\n        <span class=\"hljs-keyword\">this</span>.PARTICLE_SIZE = <span class=\"hljs-number\">20</span>;\n        <span class=\"hljs-keyword\">this</span>.particles = <span class=\"hljs-string\">''</span>;\n\n    }\n\n\n    </code></pre>",
         "index": 10
      },
      {
         "lineStart": 56,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 3,
                     "children": [],
                     "name": "verticesInfo",
                     "defHtml": " {<a data-jsdef-prop=\"Object\">Object</a>}",
                     "commentHtml": "<p> 顶点相关信息，通常为 <a data-jsdef-link=\"createRandomVertex\">createRandomVertex</a> 或者 <a data-jsdef-link=\"createModelVertex\">createModelVertex</a> 返回的信息</p>\n"
                  },
                  {
                     "level": 3,
                     "children": [],
                     "name": "material",
                     "defHtml": " {<a data-jsdef-prop=\"PointsMaterial\">PointsMaterial</a>}",
                     "commentHtml": "<p> 顶点材质，如果不传默认数值 {color: 0x888888, size: 2}</p>\n"
                  }
               ],
               "name": "Particles.setParticles",
               "defHtml": " (<a data-jsdef-prop=\"vertices\">vertices</a>, <a data-jsdef-prop=\"material\">material</a>) =&gt; <a data-jsdef-prop=\"null\">null</a>",
               "commentHtml": "<p>添加粒子集合</p>\n"
            }
         ],
         "index": 11
      },
      {
         "type": "source",
         "html": "<pre><code>\n    setParticles(material = basicMaterial) {\n        <span class=\"hljs-keyword\">const</span> verticesLen = <span class=\"hljs-keyword\">this</span>.vertexInfo.sizes.length;\n</code></pre>",
         "index": 12
      },
      {
         "type": "comment",
         "lineStart": 64,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>使用缓存几何模型 </p>\n"
            }
         ],
         "index": 13
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-keyword\">const</span> geometry = <span class=\"hljs-keyword\">new</span> THREE.BufferGeometry(); </code></pre>",
         "index": 14
      },
      {
         "type": "source",
         "html": "<pre><code>\n        geometry.addAttribute(<span class=\"hljs-string\">'position'</span>, <span class=\"hljs-keyword\">new</span> <span class=\"hljs-type\">THREE</span>.BufferAttribute(<span class=\"hljs-built_in\">this</span>.vertexInfo.positions, <span class=\"hljs-number\">3</span>));\n        geometry.addAttribute(<span class=\"hljs-string\">'customColor'</span>, <span class=\"hljs-keyword\">new</span> <span class=\"hljs-type\">THREE</span>.BufferAttribute(<span class=\"hljs-built_in\">this</span>.vertexInfo.colors, <span class=\"hljs-number\">3</span>));\n        geometry.addAttribute(<span class=\"hljs-string\">'size'</span>, <span class=\"hljs-keyword\">new</span> <span class=\"hljs-type\">THREE</span>.BufferAttribute(<span class=\"hljs-built_in\">this</span>.vertexInfo.sizes, <span class=\"hljs-number\">1</span>));\n\n</code></pre>",
         "index": 15
      },
      {
         "type": "comment",
         "lineStart": 70,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>添加粒子 </p>\n"
            }
         ],
         "index": 16
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-built_in\">this</span>.particles = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-type\">THREE</span>.Points(geometry, material);\n    }\n\n    setVertexInfo(vertexInfo) {\n        <span class=\"hljs-built_in\">this</span>.vertexInfo = vertexInfo;\n    }\n\n</code></pre>",
         "index": 17
      },
      {
         "type": "comment",
         "lineStart": 78,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>获取粒子集合 THREE.Points 对象 </p>\n"
            }
         ],
         "index": 18
      },
      {
         "type": "source",
         "html": "<pre><code>    getParticles(material = basicMaterial) {\n        <span class=\"hljs-keyword\">this</span>.setParticles(material);\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.particles;\n    }\n\n</code></pre>",
         "index": 19
      },
      {
         "type": "comment",
         "lineStart": 84,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>获取粒子信息 </p>\n"
            }
         ],
         "index": 20
      },
      {
         "type": "source",
         "html": "<pre><code>    getVertexInfo() {\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>.vertexInfo;\n    }\n\n    </code></pre>",
         "index": 21
      },
      {
         "lineStart": 89,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 3,
                     "children": [],
                     "name": "type",
                     "defHtml": " {<a data-jsdef-prop=\"String\">String</a>}",
                     "commentHtml": "<p> 需要更改的模型信息，&#39;position&#39; || &#39;color&#39; || &#39;size&#39;</p>\n"
                  },
                  {
                     "level": 3,
                     "children": [],
                     "name": "arr",
                     "defHtml": " {<a data-jsdef-prop=\"Array\">Array</a>}",
                     "commentHtml": "<p> 更新后的数组</p>\n"
                  },
                  {
                     "level": 3,
                     "children": [
                        {
                           "level": 5,
                           "children": [],
                           "name": ".newArray",
                           "defHtml": " {<a data-jsdef-prop=\"Array\">Array</a>}",
                           "commentHtml": "<p> 更新后的数组</p>\n"
                        },
                        {
                           "level": 5,
                           "children": [],
                           "name": ".oldArray",
                           "defHtml": " {<a data-jsdef-prop=\"Array\">Array</a>}",
                           "commentHtml": "<p> 更新前的数组</p>\n"
                        }
                     ],
                     "name": "res",
                     "defHtml": " {<a data-jsdef-prop=\"Object\">Object</a>}",
                     "commentHtml": "<p> 返回信息，包含新数组和旧数组</p>\n"
                  }
               ],
               "name": "Particles.changePoints",
               "defHtml": " (<a data-jsdef-prop=\"type\">type</a>, <a data-jsdef-prop=\"arr\">arr</a>) =&gt; <a data-jsdef-prop=\"res\">res</a>",
               "commentHtml": "<p>改变粒子的大小形状，默认使用 cpu 更新机制</p>\n"
            }
         ],
         "index": 22
      },
      {
         "type": "source",
         "html": "<pre><code>\n    changePoints(<span class=\"hljs-keyword\">type</span>, arr) {\n        <span class=\"hljs-keyword\">const</span> geometry = <span class=\"hljs-keyword\">this</span>.particles.geometry;\n        <span class=\"hljs-keyword\">const</span> attributes = geometry.attributes;\n\n        <span class=\"hljs-keyword\">const</span> res = {\n            newArray: arr,\n            oldArray: []\n        };\n</code></pre>",
         "index": 23
      },
      {
         "type": "comment",
         "lineStart": 106,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>particles.material.uniforms.color.value = new THREE.Color(0x00ff00); </p>\n"
            }
         ],
         "index": 24
      },
      {
         "type": "comment",
         "lineStart": 108,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>位置 </p>\n"
            }
         ],
         "index": 25
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">type</span> <span class=\"hljs-type\">=== </span><span class=\"hljs-symbol\">'position</span>') { </code></pre>",
         "index": 26
      },
      {
         "type": "source",
         "html": "<pre><code>            res.oldArray = attributes.<span class=\"hljs-built_in\">position</span>.<span class=\"hljs-built_in\">array</span>;\n            attributes.<span class=\"hljs-built_in\">position</span>.<span class=\"hljs-built_in\">array</span> = arr;\n            attributes.<span class=\"hljs-built_in\">position</span>.needsUpdate = <span class=\"hljs-literal\">true</span>;\n</code></pre>",
         "index": 27
      },
      {
         "type": "comment",
         "lineStart": 112,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>颜色 </p>\n"
            }
         ],
         "index": 28
      },
      {
         "type": "source",
         "html": "<pre><code>        } <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">type</span> <span class=\"hljs-type\">=== </span><span class=\"hljs-symbol\">'color</span>') { </code></pre>",
         "index": 29
      },
      {
         "type": "source",
         "html": "<pre><code>\n            res.oldArray = <span class=\"hljs-keyword\">attributes</span>.customColor.array;\n            <span class=\"hljs-keyword\">attributes</span>.customColor.array = arr;\n            <span class=\"hljs-keyword\">attributes</span>.customColor.needsUpdate = <span class=\"hljs-literal\">true</span>;\n\n</code></pre>",
         "index": 30
      },
      {
         "type": "comment",
         "lineStart": 118,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>大小 </p>\n"
            }
         ],
         "index": 31
      },
      {
         "type": "source",
         "html": "<pre><code>        } <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">type</span> <span class=\"hljs-type\">=== </span><span class=\"hljs-symbol\">'size</span>') { </code></pre>",
         "index": 32
      },
      {
         "type": "source",
         "html": "<pre><code>            res.oldArray = attributes.<span class=\"hljs-built_in\">size</span>.<span class=\"hljs-keyword\">array</span>;\n            attributes.<span class=\"hljs-built_in\">size</span>.<span class=\"hljs-keyword\">array</span> = arr;\n            attributes.<span class=\"hljs-built_in\">size</span>.needsUpdate = true;\n        }\n        <span class=\"hljs-built_in\">return</span> res;\n    }\n\n    </code></pre>",
         "index": 33
      },
      {
         "lineStart": 126,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 3,
                     "children": [
                        {
                           "level": 6,
                           "children": [],
                           "name": "scale",
                           "defHtml": "",
                           "commentHtml": "<p> 缩放，默认 [0,0,0]</p>\n"
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "rotate",
                           "defHtml": "",
                           "commentHtml": "<p> 旋转，默认 [1,1,1]</p>\n"
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "translate",
                           "defHtml": "",
                           "commentHtml": "<p> 位移，默认 [0,0,0]</p>\n"
                        }
                     ],
                     "name": "type",
                     "defHtml": " {<a data-jsdef-prop=\"String\">String</a>}",
                     "commentHtml": "<p> 需要改变的粒子集合的信息</p>\n"
                  },
                  {
                     "level": 3,
                     "children": [],
                     "name": "val",
                     "defHtml": " {<a data-jsdef-prop=\"Array\">Array</a>}",
                     "commentHtml": "<p> 相关参数的数值 [x,y,z]</p>\n"
                  }
               ],
               "name": "Particles.changeParticles",
               "defHtml": " (<a data-jsdef-prop=\"type\">type</a>, <a data-jsdef-prop=\"val\">val</a>) =&gt; <a data-jsdef-prop=\"null\">null</a>",
               "commentHtml": "<p>改变粒子集合信息，暂时只支持缓存几何体</p>\n"
            }
         ],
         "index": 34
      },
      {
         "type": "source",
         "html": "<pre><code>\n    translate(x = <span class=\"hljs-number\">0</span>, y = <span class=\"hljs-number\">0</span>, z = <span class=\"hljs-number\">0</span>) {\n        <span class=\"hljs-keyword\">this</span>.particles.position.x = x;\n        <span class=\"hljs-keyword\">this</span>.particles.position.y = y;\n        <span class=\"hljs-keyword\">this</span>.particles.position.z = z;\n    }\n    scale(x = <span class=\"hljs-number\">1</span>, y = <span class=\"hljs-number\">1</span>, z = <span class=\"hljs-number\">1</span>) {\n        <span class=\"hljs-keyword\">this</span>.particles.scale.x = x;\n        <span class=\"hljs-keyword\">this</span>.particles.scale.y = y;\n        <span class=\"hljs-keyword\">this</span>.particles.scale.z = z;\n    }\n\n    rotate({x,y,z}) {\n        <span class=\"hljs-keyword\">this</span>.particles.rotation.x = x || <span class=\"hljs-keyword\">this</span>.particles.rotation.x;\n        <span class=\"hljs-keyword\">this</span>.particles.rotation.y = y || <span class=\"hljs-keyword\">this</span>.particles.rotation.y;\n        <span class=\"hljs-keyword\">this</span>.particles.rotation.z = z || <span class=\"hljs-keyword\">this</span>.particles.rotation.z;\n    }\n\n}\n</code></pre>",
         "index": 35
      }
   ],
   "/src/js/particles/RandomParticles.js": [
      {
         "lineStart": 1,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>@file 随机粒子集合\n @author 陈蔓青（chenmanqing@baidu.com)</p>\n"
            }
         ],
         "index": 0
      },
      {
         "lineStart": 5,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>eslint-disable */ </p>\n"
            }
         ],
         "index": 1
      },
      {
         "type": "source",
         "html": "<pre><code>\n\n<span class=\"clean\"><span class=\"hljs-keyword\">import</span> Particles <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./Particles'</span>;\n\n</span></code></pre>",
         "index": 2
      },
      {
         "lineStart": 9,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 3,
                     "children": [],
                     "name": "conf.randomNum",
                     "defHtml": " {<a data-jsdef-prop=\"Number\">Number</a>}",
                     "commentHtml": "<p>需要随机的粒子数量</p>\n"
                  },
                  {
                     "level": 3,
                     "children": [],
                     "name": "conf.MINPOS",
                     "defHtml": " {<a data-jsdef-prop=\"Number\">Number</a>}",
                     "commentHtml": "<p> 最小坐标</p>\n"
                  },
                  {
                     "level": 3,
                     "children": [],
                     "name": "conf.MAXPOS",
                     "defHtml": " {<a data-jsdef-prop=\"Number\">Number</a>}",
                     "commentHtml": "<p> 最大坐标</p>\n"
                  },
                  {
                     "level": 3,
                     "children": [],
                     "name": "conf.color",
                     "defHtml": " {<a data-jsdef-prop=\"String\">String</a> || <a data-jsdef-prop=\"Float32Array\">Float32Array</a>}",
                     "commentHtml": "<p> 颜色信息</p>\n"
                  },
                  {
                     "level": 3,
                     "children": [],
                     "name": "conf.size",
                     "defHtml": " {<a data-jsdef-prop=\"Number\">Number</a> || <a data-jsdef-prop=\"Float32Array\">Float32Array</a>}",
                     "commentHtml": "<p> 大小信息</p>\n"
                  },
                  {
                     "level": 3,
                     "children": [],
                     "name": "verticesInfo",
                     "defHtml": " {<a data-jsdef-prop=\"Object\">Object</a>}",
                     "commentHtml": "<p> 返回顶点的存储信息，参照 <a data-jsdef-link=\"createModelVertex\">createModelVertex</a> 中的返回</p>\n"
                  }
               ],
               "name": "RandomParticles",
               "defHtml": " {<a data-jsdef-prop=\"Class\">Class</a>} <a data-jsdef-prop=\"conf\">conf</a> =&gt; <a data-jsdef-prop=\"verticesInfo\">verticesInfo</a>",
               "commentHtml": "<p>随机粒子集合，随机生成坐标信息，大小则根据 sizes</p>\n"
            }
         ],
         "index": 3
      },
      {
         "type": "source",
         "html": "<pre><code>\n\n<span class=\"scala\">export <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">RandomParticles</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Particles</span> </span>{\n    constructor({randomNum = <span class=\"hljs-number\">1000</span>, <span class=\"hljs-type\">MINPOS</span> = <span class=\"hljs-number\">-100</span>, <span class=\"hljs-type\">MAXPOS</span> = <span class=\"hljs-number\">100</span>, color = '', size = <span class=\"hljs-number\">4</span> }) {\n        <span class=\"hljs-keyword\">super</span>();\n        let positions, colors, sizes;\n</span></code></pre>",
         "index": 4
      },
      {
         "type": "comment",
         "lineStart": 25,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>单个顶点信息 </p>\n"
            }
         ],
         "index": 5
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-built_in\">let</span> vertexsColor, vertexsSize; </code></pre>",
         "index": 6
      },
      {
         "type": "comment",
         "lineStart": 26,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>存储位置信息 </p>\n"
            }
         ],
         "index": 7
      },
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-attribute\">        positions</span> = new Float32Array(randomNum * 3); </code></pre>",
         "index": 8
      },
      {
         "type": "comment",
         "lineStart": 28,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>是否需要遍历设置粒子颜色 </p>\n"
            }
         ],
         "index": 9
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-keyword\">const</span> isSetColor = <span class=\"hljs-keyword\">this</span>.isSetColor(<span class=\"hljs-built_in\">color</span>);\n</code></pre>",
         "index": 10
      },
      {
         "type": "comment",
         "lineStart": 30,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>需要遍历设置颜色 </p>\n"
            }
         ],
         "index": 11
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-keyword\">if</span> <span class=\"hljs-comment\">(isSetColor)</span> { </code></pre>",
         "index": 12
      },
      {
         "type": "source",
         "html": "<pre><code>            colors = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-type\">Float32Array</span>(randomNum * <span class=\"hljs-number\">3</span>);\n            vertexsColor = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-type\">THREE</span>.Color(color);\n        } <span class=\"hljs-keyword\">else</span> {\n            colors = color;\n        }\n\n</code></pre>",
         "index": 13
      },
      {
         "type": "comment",
         "lineStart": 37,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>是否需要遍历设置粒子大小 </p>\n"
            }
         ],
         "index": 14
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-keyword\">const</span> isSetSize = <span class=\"hljs-keyword\">this</span>.isSetSize(<span class=\"hljs-built_in\">size</span>);\n\n</code></pre>",
         "index": 15
      },
      {
         "type": "comment",
         "lineStart": 40,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>需要遍历设置大小 </p>\n"
            }
         ],
         "index": 16
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-keyword\">if</span> <span class=\"hljs-comment\">(isSetColor)</span> { </code></pre>",
         "index": 17
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-attr\">sizes</span> = new Float32Array(randomNum);\n            <span class=\"hljs-attr\">vertexsSize</span> = size;\n        } <span class=\"hljs-keyword\">else</span> {\n            <span class=\"hljs-attr\">sizes</span> = size;\n        }\n\n        const <span class=\"hljs-attr\">vertex</span> = new THREE.Vector3();\n        for (<span class=\"hljs-keyword\">let</span> <span class=\"hljs-attr\">i</span> = <span class=\"hljs-number\">0</span>, <span class=\"hljs-attr\">l</span> = randomNum; i &lt; l; i++) {\n</code></pre>",
         "index": 18
      },
      {
         "type": "comment",
         "lineStart": 49,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>设置顶点位置信息 </p>\n"
            }
         ],
         "index": 19
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-built_in\">vertex</span>.x = <span class=\"hljs-keyword\">this</span>.getRandomNum(MINPOS, MAXPOS);\n            <span class=\"hljs-built_in\">vertex</span>.y = <span class=\"hljs-keyword\">this</span>.getRandomNum(MINPOS, MAXPOS);\n            <span class=\"hljs-built_in\">vertex</span>.z = <span class=\"hljs-keyword\">this</span>.getRandomNum(MINPOS, MAXPOS);\n            <span class=\"hljs-built_in\">vertex</span>.toArray(positions, i * <span class=\"hljs-number\">3</span>);\n\n</code></pre>",
         "index": 20
      },
      {
         "type": "comment",
         "lineStart": 55,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>设置顶点颜色信息 </p>\n"
            }
         ],
         "index": 21
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-keyword\">if</span> (isSetColor) {\n                vertexsColor.toArray(colors, i * <span class=\"hljs-number\">3</span>);\n            }\n            <span class=\"hljs-keyword\">if</span> (isSetSize) {\n                sizes[i] = vertexsSize;\n            }\n        }\n\n        <span class=\"hljs-keyword\">this</span>.vertexInfo = {\n            positions,\n            colors,\n            sizes\n        }\n    }\n\n    isSetColor(<span class=\"hljs-built_in\">color</span>) {\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">Object</span>.prototype.toString.call(<span class=\"hljs-built_in\">color</span>) === <span class=\"hljs-string\">'[object Float32Array]'</span>) {\n            <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">false</span>;\n        }\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">true</span>;\n    }\n\n    isSetSize(<span class=\"hljs-built_in\">size</span>) {\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">Object</span>.prototype.toString.call(<span class=\"hljs-built_in\">size</span>) === <span class=\"hljs-string\">'[object Array]'</span>) {\n            <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">false</span>;\n        }\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">true</span>;\n    }\n\n</code></pre>",
         "index": 22
      },
      {
         "type": "comment",
         "lineStart": 85,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p>获取 min-max 之间的随机数 </p>\n"
            }
         ],
         "index": 23
      },
      {
         "type": "source",
         "html": "<pre><code>    getRandomNum(<span class=\"hljs-built_in\">min</span>, <span class=\"hljs-built_in\">max</span>) {\n        <span class=\"hljs-built_in\">min</span> = Math.<span class=\"hljs-built_in\">ceil</span>(<span class=\"hljs-built_in\">min</span>);\n        <span class=\"hljs-built_in\">max</span> = Math.<span class=\"hljs-built_in\">floor</span>(<span class=\"hljs-built_in\">max</span>);\n        <span class=\"hljs-keyword\">return</span> Math.<span class=\"hljs-built_in\">floor</span>(Math.<span class=\"hljs-built_in\">random</span>() * (<span class=\"hljs-built_in\">max</span> - <span class=\"hljs-built_in\">min</span> + <span class=\"hljs-number\">1</span>)) + <span class=\"hljs-built_in\">min</span>;\n    }\n}</code></pre>",
         "index": 24
      }
   ]
}