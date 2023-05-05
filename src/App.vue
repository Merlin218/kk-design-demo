<template>
  <div id="app">
    <h2>Avatar 头像</h2>
    <el-avatar size="large" :src="pic" style="margin-bottom: 20px"></el-avatar>
    <h2>Avatar Group 头像组</h2>
    <el-avatar-group :max-count="2">
      <el-avatar icon="el-icon-user-solid"></el-avatar>
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar>
      <el-avatar>示</el-avatar>
    </el-avatar-group>
    <h2>Badge 徽章</h2>
    <el-badge :value="12" class="badge-item" type="success">
      <el-avatar size="large">示</el-avatar>
    </el-badge>
    <h2>Breadcrumb 面包屑</h2>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/pageNav' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <h2>Card 卡片</h2>
    <el-card class="box-card card">
      <div slot="header">
        <div class="card-header">
          <el-avatar :size="40">示</el-avatar>
          <div
            style="
              margin-left: 10px;
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;
            "
          >
            <div style="font-size: 14px; font-weight: 600">Card Header</div>
            <div style="font-size: 12px">Card Header</div>
          </div>
        </div>
      </div>
      <el-image slot="cover" :src="pic"></el-image>
      <div slot="footer">
        <el-button>查阅文档</el-button>
        <el-button type="primary">快速开始</el-button>
      </div>
      Teamshare汇集了云文档、多维表格、Office等在线创作协同工具，同时为文件提供安全、强大的云端存储和内容管理能力，文档所有者可以根据需要灵活设置浏览、编辑等权限，让协作有序又高效。
      无论是写方案、报告、会议纪要、新人培训，还是项目管理、数据收集、OKR
      管理，甚至更多的日常工作，你都可以通过Teamshare与企业内外出色协作完成。
    </el-card>
    <h2>Collapse 折叠面板</h2>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="一致性 Consistency" name="1">
        <div>
          与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
        </div>
        <div>
          在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
        </div>
      </el-collapse-item>
      <el-collapse-item disabled title="反馈 Feedback(disabled)" name="2">
        <div>
          控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
        </div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </el-collapse-item>
      <el-collapse-item title="效率 Efficiency" name="3">
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>
          清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
        </div>
        <div>
          帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
        </div>
      </el-collapse-item>
      <el-collapse-item title="可控 Controllability" name="4">
        <div>
          用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
        </div>
        <div>
          结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
        </div>
      </el-collapse-item>
    </el-collapse>
    <h2>Dropdown 下拉框</h2>
    <el-dropdown>
      <el-button type="primary">
        更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item>双皮奶</el-dropdown-item>
        <el-dropdown-item>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <h2>SvgIcon SVG图标</h2>
    <svg-icon src="/test.svg" :width="200" :height="100" />
    <h2>DescriptionsCard 描述</h2>
    <el-descriptions-card :data="descriptionData"></el-descriptions-card>
    <h2>Modal 模态对话框（原Dialog）</h2>
    <el-button type="text" @click="dialogVisible = true"
      >点击打开 Dialog</el-button
    >
    <el-dialog
      :size="size"
      title="提示"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
    >
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <h2>Pagination 翻页器</h2>
    <el-pagination :total="50" />
    <h2>Popover 气泡卡片</h2>
    <el-popover
      placement="right"
      arrow
      title="标题"
      description="开关类型字段，控制需求是否开启AB流程"
      width="200"
      trigger="hover"
    >
      <el-button slot="reference">hover 激活</el-button>
    </el-popover>
    <h2>Steps 步骤条</h2>
    <el-steps :space="200" :active="1" finish-status="success">
      <el-step title="已完成"></el-step>
      <el-step title="进行中"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>
    <h2>Table 表格</h2>
    <el-table
      :data="tableData"
      style="width: 100%"
      :default-sort="{ prop: 'date', order: 'descending' }"
    >
      <el-table-column type="selection"> </el-table-column>
      <el-table-column prop="date" label="日期" sortable width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" sortable width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
    <h2>Tabs 标签栏</h2>
    <el-tabs v-model="activeName" tab-position="top">
      <el-tab-pane closable label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane closable label="配置管理" name="second"
        >配置管理</el-tab-pane
      >
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
    <h2>Tag 标签</h2>
    <div v-for="color in colors" :key="color">
      <el-tag :color="color">默认标签</el-tag>
      <el-tag effect="dark" :color="color">默认标签</el-tag>
      <el-tag effect="plain" :color="color">默认标签</el-tag>
    </div>
    <h2>Timeline 时间线</h2>
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :timestamp="activity.timestamp"
      >
        {{ activity.content }}
      </el-timeline-item>
    </el-timeline>
    <h2>Tooltip 工具提示</h2>
    <el-tooltip
      class="item"
      effect="dark"
      content="Right Center 提示文字"
      placement="right"
    >
      <el-button>右边</el-button>
    </el-tooltip>
    <h2>Tree 树形控件</h2>
    <el-tree
      :data="treeData"
      :props="defaultTreeProps"
      @node-click="handleNodeClick"
    ></el-tree>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      dialogVisible: false,
      activeName: "first",
      size: "small",
      treeData: [
        {
          label: "一级 1",
          icon: "el-icon-s-tools",
          children: [
            {
              label: "二级 1-1",
              icon: "el-icon-s-tools",
              children: [
                {
                  icon: "el-icon-s-tools",
                  label: "三级 1-1-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1",
                },
              ],
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1",
                },
              ],
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1",
                },
              ],
            },
          ],
        },
      ],
      defaultTreeProps: {
        children: "children",
        label: "label",
      },
      activities: [
        {
          content: "活动按期开始",
          timestamp: "2018-04-15",
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13",
        },
        {
          content: "创建成功",
          timestamp: "2018-04-11",
        },
      ],
      popoverVisible: false,
      colors: [
        "amber",
        "blue",
        "cyan",
        "green",
        "gray",
        "indigo",
        "light-blue",
        "light-green",
        "lime",
        "orange",
        "pink",
        "purple",
        "red",
        "teal",
        "violet",
        "yellow",
        "white",
      ],
      pic:
        "https://picgo-1305798447.cos.ap-guangzhou.myqcloud.com/img/202303281147044.png",
      descriptionData: [
        { label: "实际用户数量", value: "1,480,000" },
        { label: "7天留存", value: "98%" },
        { label: "安全等级", value: "3级" },
        { label: "垂类标签", value: 111 },
        { label: "认证状态", value: "未认证" },
      ],
      tableData1: [
        {
          id: "12987122",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
        {
          id: "12987123",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
        {
          id: "12987125",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
        {
          id: "12987126",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      tableData2: [
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          id: 3,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          children: [
            {
              id: 31,
              date: "2016-05-01",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1519 弄",
            },
            {
              id: 32,
              date: "2016-05-01",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1519 弄",
            },
          ],
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    handleNodeClick(data) {
      console.log(data);
    },
    scrollToBottomAndBack() {
      const appElement = document.documentElement;
      const speed = 1; // px per second

      const step = () => {
        const scrollHeight = appElement.scrollHeight;
        const clientHeight = appElement.clientHeight;
        const distance = scrollHeight - clientHeight - appElement.scrollTop;
        if (distance > 0) {
          appElement.scrollTop = Math.min(
            appElement.scrollTop + speed,
            scrollHeight
          );
          requestAnimationFrame(step);
        } else {
          setTimeout(() => {
            appElement.scrollTop = 0;
            this.scrollToBottomAndBack();
          }, 3000);
        }
      };

      requestAnimationFrame(step);
    },
  },
  mounted() {
    this.scrollToBottomAndBack();
  },
};
</script>

<style scoped>
.badge-item {
  margin-top: 10px;
  margin-right: 40px;
}
.container {
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #00000020;
}

.card {
  margin-top: 20px;
}

.demo-basic {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.badge-item {
  margin-top: 10px;
  margin-right: 40px;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.box-card {
  width: 360px;
}

.clearfix:after {
  clear: both;
}

.card-header {
  display: flex;
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
