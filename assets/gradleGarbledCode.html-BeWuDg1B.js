import{_ as n,o as s,c as a,e}from"./app-CwG7V0Kd.js";const l="/assets/gradleGarbledCode_01-BzA1O8eX.png",i={},p=e('<h1 id="gradle-项目中文乱码解决方案" tabindex="-1"><a class="header-anchor" href="#gradle-项目中文乱码解决方案"><span>Gradle 项目中文乱码解决方案</span></a></h1><blockquote><p>本次实验中，IDEA 中所有编码(encoding)设置均为 UTF-8</p></blockquote><h2 id="方法一-不通过-gradle-wrapper-运行-通过-intellij-idea-运行" tabindex="-1"><a class="header-anchor" href="#方法一-不通过-gradle-wrapper-运行-通过-intellij-idea-运行"><span>方法一：不通过 Gradle Wrapper 运行，通过 IntelliJ IDEA 运行</span></a></h2><ol><li><p>打开 IntelliJ IDEA，选择 <code>File -&gt; Settings -&gt; Build, Execution, Deployment -&gt; Build Tools -&gt; Gradle</code></p></li><li><p>将 <code>Build and run using</code> 和 <code>Run tests using</code> 下拉修改为 <code>IntelliJ IDEA</code>, 如下图 <img src="'+l+`" alt="修改运行设置"></p></li><li><p>后续在此项目下运行单个文件时，将会在 IDEA 中直接运行，不通过 Gradle 进行构建，编译完成后，此时项目下会出现 <code>out</code> 的文件夹，此为 IDEA 的构建输出目录</p></li></ol><h2 id="方法二-在-intellij-idea-中使用-gradle-wrapper-运行-推荐" tabindex="-1"><a class="header-anchor" href="#方法二-在-intellij-idea-中使用-gradle-wrapper-运行-推荐"><span>方法二：在 IntelliJ IDEA 中使用 Gradle Wrapper 运行 （推荐）</span></a></h2><ol><li><p>打开 IntelliJ IDEA，选择 <code>Help -&gt; Edit Custom VM Options</code>，在其内容中追加一行 <code>-Dfile.encoding=UTF-8</code></p></li><li><p>项目中 <code>build.gradle</code> 文件添加下面代码</p><div class="language-groovy line-numbers-mode" data-highlighter="prismjs" data-ext="groovy" data-title="groovy"><pre class="language-groovy"><code><span class="line">tasks<span class="token punctuation">.</span><span class="token function">withType</span><span class="token punctuation">(</span>JavaCompile<span class="token punctuation">)</span><span class="token punctuation">.</span>configureEach <span class="token punctuation">{</span></span>
<span class="line">    options<span class="token punctuation">.</span>encoding <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">&quot;UTF-8&quot;</span></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 添加测试任务</span></span>
<span class="line">tasks<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">&#39;runTest&#39;</span><span class="token punctuation">,</span> JavaExec<span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    group <span class="token operator">=</span> <span class="token string">&#39;exec&#39;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 设置主类的全限定名</span></span>
<span class="line">    mainClass <span class="token operator">=</span> <span class="token string">&#39;com.reine.Main&#39;</span></span>
<span class="line">    <span class="token comment">// 设置类路径</span></span>
<span class="line">    classpath <span class="token operator">=</span> sourceSets<span class="token punctuation">.</span>main<span class="token punctuation">.</span>runtimeClasspath</span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 如果需要，可以添加 JVM 参数</span></span>
<span class="line"><span class="token comment">//    jvmArgs = [&#39;-Dfile.encoding=UTF-8&#39;]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>项目中 <code>gradle.properties</code> 文件中添加以下代码（文件不存在则自行创建文件）</p><div class="language-properties line-numbers-mode" data-highlighter="prismjs" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="line"><span class="token key attr-name">org.gradle.jvmargs</span><span class="token punctuation">=</span><span class="token value attr-value">-Dfile.encoding=GBK</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>执行测试任务 <code>./gradlew runTest</code>, 输出</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token operator">&gt;</span> Task :runTest</span>
<span class="line">Hello world<span class="token operator">!</span></span>
<span class="line">你好世界</span>
<span class="line">sun.stdout.encoding <span class="token operator">=</span> null</span>
<span class="line">sun.stderr.encoding <span class="token operator">=</span> null</span>
<span class="line">    native.encoding <span class="token operator">=</span> GBK</span>
<span class="line">    file.encoding <span class="token operator">=</span> GBK</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="方法二-在-ternimal-中使用-gradle-wrapper-运行-推荐" tabindex="-1"><a class="header-anchor" href="#方法二-在-ternimal-中使用-gradle-wrapper-运行-推荐"><span>方法二：在 Ternimal 中使用 Gradle Wrapper 运行 （推荐）</span></a></h2><ol><li><p>增加环境变量 <code>GRADLE_OPTS</code>，值为 <code>-Dfile.encoding=GBK</code></p></li><li><p>项目中 <code>build.gradle</code> 文件添加下面代码</p><div class="language-groovy line-numbers-mode" data-highlighter="prismjs" data-ext="groovy" data-title="groovy"><pre class="language-groovy"><code><span class="line">tasks<span class="token punctuation">.</span><span class="token function">withType</span><span class="token punctuation">(</span>JavaCompile<span class="token punctuation">)</span><span class="token punctuation">.</span>configureEach <span class="token punctuation">{</span></span>
<span class="line">    options<span class="token punctuation">.</span>encoding <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">&quot;UTF-8&quot;</span></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 添加测试任务</span></span>
<span class="line">tasks<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">&#39;runTest&#39;</span><span class="token punctuation">,</span> JavaExec<span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    group <span class="token operator">=</span> <span class="token string">&#39;exec&#39;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 设置主类的全限定名</span></span>
<span class="line">    mainClass <span class="token operator">=</span> <span class="token string">&#39;com.reine.Main&#39;</span></span>
<span class="line">    <span class="token comment">// 设置类路径</span></span>
<span class="line">    classpath <span class="token operator">=</span> sourceSets<span class="token punctuation">.</span>main<span class="token punctuation">.</span>runtimeClasspath</span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 如果需要，可以添加 JVM 参数</span></span>
<span class="line"><span class="token comment">//    jvmArgs = [&#39;-Dfile.encoding=UTF-8&#39;]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>执行测试任务 <code>./gradlew runTest</code>, 输出</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token operator">&gt;</span> Task :runTest</span>
<span class="line">Hello world<span class="token operator">!</span></span>
<span class="line">你好世界</span>
<span class="line">sun.stdout.encoding <span class="token operator">=</span> null</span>
<span class="line">sun.stderr.encoding <span class="token operator">=</span> null</span>
<span class="line">    native.encoding <span class="token operator">=</span> GBK</span>
<span class="line">    file.encoding <span class="token operator">=</span> GBK</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="番外-环境变量-gradle-user-home-的作用" tabindex="-1"><a class="header-anchor" href="#番外-环境变量-gradle-user-home-的作用"><span>番外：环境变量 GRADLE_USER_HOME 的作用</span></a></h2><ul><li><p><code>GRADLE_USER_HOME</code> 是 Gradle 的用户目录，用于存储 Gradle 的缓存、日志和其他临时文件。默认情况下，Gradle 会使用 <code>~/.gradle</code> 目录来存储这些文件，但是可以通过设置 <code>GRADLE_USER_HOME</code> 环境变量来指定一个自定义的目录。</p></li><li><p><code>GRADLE_USER_HOME</code> 中可以放一些通用的配置文件，脚本（如 <code>gradle.properties</code>, <code>init.gradle</code>），在每一次执行 Gradle 命令时，都会应用这些配置文件</p></li><li><p>综上所述，我们可以将方案二中的 <code>gradle.properties</code> 文件放到 <code>GRADLE_USER_HOME</code> 目录下，这样就可以在全局范围内使用该配置文件了</p></li></ul>`,10),t=[p];function c(o,r){return s(),a("div",null,t)}const u=n(i,[["render",c],["__file","gradleGarbledCode.html.vue"]]),v=JSON.parse('{"path":"/blogs/dev/gradleGarbledCode.html","title":"Gradle 项目中文乱码解决方案","lang":"zh-CN","frontmatter":{"title":"Gradle 项目中文乱码解决方案","date":"2024/8/1","tags":["Java"],"categories":["dev"]},"headers":[{"level":2,"title":"方法一：不通过 Gradle Wrapper 运行，通过 IntelliJ IDEA 运行","slug":"方法一-不通过-gradle-wrapper-运行-通过-intellij-idea-运行","link":"#方法一-不通过-gradle-wrapper-运行-通过-intellij-idea-运行","children":[]},{"level":2,"title":"方法二：在 IntelliJ IDEA 中使用 Gradle Wrapper 运行 （推荐）","slug":"方法二-在-intellij-idea-中使用-gradle-wrapper-运行-推荐","link":"#方法二-在-intellij-idea-中使用-gradle-wrapper-运行-推荐","children":[]},{"level":2,"title":"方法二：在 Ternimal 中使用 Gradle Wrapper 运行 （推荐）","slug":"方法二-在-ternimal-中使用-gradle-wrapper-运行-推荐","link":"#方法二-在-ternimal-中使用-gradle-wrapper-运行-推荐","children":[]},{"level":2,"title":"番外：环境变量 GRADLE_USER_HOME 的作用","slug":"番外-环境变量-gradle-user-home-的作用","link":"#番外-环境变量-gradle-user-home-的作用","children":[]}],"git":{"createdTime":1722528789000,"updatedTime":1722613640000,"contributors":[{"name":"reine-ishyanami","email":"2402979195@qq.com","commits":2}]},"filePathRelative":"blogs/dev/gradleGarbledCode.md"}');export{u as comp,v as data};
