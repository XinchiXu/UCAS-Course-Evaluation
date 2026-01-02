// Copy and paste this code into browser console and press Enter to run
const EVAL_DATA = {
    "课程评估": {
        texts: [
            "我最喜欢这门课程中理论与实践结合的生动教学方式，每次案例都极具启发性。",
            "本课程可增加更多互动讨论环节和前沿行业案例以进一步提升学习深度和广度。",
            "我每周平均投入约八到十小时用于课程学习、作业完成和延伸阅读。",
            "在选课前我已对该领域有浓厚兴趣并主动了解过相关知识背景和发展动态。",
            "我始终保持全勤记录并积极参与课堂互动，经常主动提问和回答问题。"
        ],
        radioIndex: 0,
        checkboxes: [0, 1, 2, 3, 4]
    },
    "教师评估": {
        texts: [
            "我最喜欢这位老师生动有趣的讲解方式和理论联系实际的案例教学方法，课堂氛围非常活跃。",
            "我希望老师能增加更多互动讨论环节并提供更详细的学习资料，这会有助于我们进一步消化知识点。"
        ]
    }
};

function autoFill() {
    const title = document.querySelector("#page-title")?.textContent;
    const config = EVAL_DATA[title];
    const form = document.querySelector("#regfrm");
    if (!title || !config || !form) return;
    form.querySelector("table").querySelectorAll("tr").forEach(tr => {
        tr.querySelector("input.required")?.click();
    });
    form.querySelectorAll("textarea.required").forEach((text, index) => {
        text.value = config.texts[index];
    });
    if (title === "课程评估") {
        form.querySelectorAll("input.required.radio")[config.radioIndex]?.click();
        config.checkboxes.forEach(reason => {
            form.querySelectorAll("input.required.checkbox")[reason]?.click();
        });
    }
}

autoFill();