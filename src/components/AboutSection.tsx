import React from 'react';

interface AboutSectionProps {
  onApplyClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onApplyClick }) => {
  return (
    <section id="about" className="mt-20">
      <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">关于 TeenList</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          TeenList 专注于 8 至 18 岁的青少年创造者与团队。我们不排名，只呈现。
          在这里，你可以发现真实的建造者与他们正在进行的项目，并找到你的同行者。
        </p>

        <div className="mb-6">
          <p className="text-gray-500 font-medium mb-3">我们分为两个大类：</p>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">团队 · 组织</span>
            <span className="inline-flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">个人 · 创造者</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-xl p-5">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">为什么存在</h3>
            <p className="text-gray-600 leading-relaxed">
              我们相信，值得被看见的从来不只是结果，更是那个正在动手的你。
              TeenList 记录并连接这一代的年轻建造者，帮助他们找到队友与同行者。
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-5">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">风格与设计</h3>
            <p className="text-gray-600 leading-relaxed">
              采用 Apple 风的极简设计：大圆角、柔和阴影、Inter 字体与充足留白，信息清晰、节奏平稳。
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="https://astracore.feishu.cn/wiki/ZAYfwqLG1iyO0mkfetCcB5xTn6f"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            查看文档
          </a>
          {onApplyClick && (
            <button
              onClick={onApplyClick}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-black transition-colors"
            >
              申请加入
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

