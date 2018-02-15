import { Component, OnInit } from '@angular/core';

interface User {
  name: string;
  account: string;
  selected?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public list: Array<User> = [
    { account: 'mu_cheng__', name: 'Bling Bling 梁 C 予（予哥）' },
    { account: 'Pt1120697135', name: '潘婷' },
    { account: 'wxid_210bzxg7havf12', name: '无名（李响老师）' },
    { account: 'patrickies', name: '. . . .（盘也周）' },
    { account: 'tonev1', name: 'Elvin.（海威）' },
    { account: 'Ashley_hjf', name: 'ashley（胡捡妃）' },
    { account: 'huangsimi007', name: '. .（黄思米）' },
    { account: 'lanya52000000', name: '☘亚兰' },
    { account: 'yaozhunizhenben', name: 'backhug（冯瑶）' },
    { account: 'chenyuanyuan__1209', name: '清欢（陈圆圆）' },
    { account: 'KILLER_XIAN_001', name: '小贤哥（徐象贤）' },
    { account: 'Cuka192509', name: '小奶花（刘晶晶）' },
    { account: 'z863985484', name: 'Angelababy（张小莹）' },
    { account: 'cj13145212009', name: '自学习的荷兰猪（王宇鹏）' },
    { account: 'linhao0860', name: '匿青心（林浩）' },
    { account: 'jianger1213', name: '^0^（江河）' },
    { account: 'Y2confuse', name: '兔子不爱👻白萝卜（麦麦）' },
    { account: 'dkv351223892', name: '王捷🦁Ace' },
    { account: 'theprettysunshine', name: '有一堆大排骨（黄丽莎）' },
    { account: 'xmq857302874', name: 'Reus（熊孟奇）' },
    { account: 'huizhangn', name: '张会' },
    { account: 'rourouyi', name: '舌尖上的逗比肉~（何雅谨）' },
    { account: 'a----------jun', name: 'XHR（蓉蓉）' },
    { account: 'lxe529022487', name: '胖大星（陆星儿）' },
    { account: 'xyy1216038205', name: '月球上的人（瑶瑶）' },
    { account: 'zyq549265259', name: 'DOBi_（张钰奇）' },
    { account: 'Bribao_', name: '张宝植' },
    { account: 'DEANSAMCASS', name: '苏苏苏（苏彦冰）' },
    { account: 'kiss52013141214007', name: 'Cher.（雪儿）' },
    { account: 'Marisol-sira', name: '红拂夜奔八千里（贺爽）' },
    { account: 'wxid_ma3b3wljlp3o22', name: 'i believe（刘波）' },
    { account: 'yuyu19950713', name: '赵芷玉' },
    { account: 'song66666666666', name: '. 🦄 . xxxx（昵称太难打了..）' },
    { account: 'y0912', name: '九十二（FFairy7）' },
    { account: 'z_y_y_love', name: '__Snowy（帮主）' },
    { account: 'xutianguaa', name: '徐甜瓜（徐甜华）' },
    { account: 'Wqp960903', name: '一只耳的沸猪猪（萍儿）' },
    { account: 'XDL521777', name: '一直幸福的狗（谢东丽）' },
    { account: 'tskmcmc', name: '童舒康' },
    { account: 'cfy583534197', name: '陈风扬' },
    { account: 'wxid_0lx2vi07h91j21', name: '段玉婷' },
    { account: 'lxw501355024', name: '得七得八（廖雪雯）' },
    { account: 'wuwanjie55', name: '帅气的杰哥（伍万杰）' },
    { account: 'WFstern', name: '吴飞' },
    { account: 'Emmanuel_9687', name: 'Vicky（吴菁）' },
  ];

  private cacheList: Array<User> = [];

  private selected01: User;
  public ok01 = false;
  private selected02: User;
  public ok02 = false;
  private selected03: User;
  public ok03 = false;

  ngOnInit(): void {
    this.list.forEach(item => this.cacheList.push({ account: item.account, name: item.name }));
    this.startTick();
  }

  private startTick() {
    const count = this.cacheList.length;
    const crt_index = parseInt(<any>(Math.random() * count), 10);
    if (!this.ok01) {
      this.selected01 = this.cacheList[crt_index];
    }
    if (!this.ok02) {
      this.selected02 = this.cacheList[crt_index];
    }
    if (!this.ok03) {
      this.selected03 = this.cacheList[crt_index];
    }
    setTimeout(() => this.startTick(), 50);
  }

  public select(index: number) {
    console.log(index);
    let selected: User;
    if (index === 0) {
      selected = this.selected01;
      this.ok01 = true;
    } else if (index === 1) {
      selected = this.selected02;
      this.ok02 = true;
    } else if (index === 2) {
      selected = this.selected03;
      this.ok03 = true;
    }
    const idx = this.cacheList.findIndex(i => i.account === selected.account);
    const source = this.list.find(i => i.account === this.cacheList[idx].account);
    this.cacheList.splice(idx, 1);
    selected.selected = true;
    if (source) {
      source.selected = true;
    }
  }

}
