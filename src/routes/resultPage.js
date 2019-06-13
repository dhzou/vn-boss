import React from "react";
import { Modal, SearchBar, List, Toast } from "antd-mobile";
import { isAuthenticated } from "../utils/session";
import { createHashHistory } from "history";
import {
  search,
  userInfo,
  postproductData,
  getProduct
} from "../services/service";
const Item = List.Item;
const prompt = Modal.prompt;
const img = [
  "https://www.wegene.com/static/dist/svg/metabolism.svg",
  "https://www.wegene.com/static/dist/svg/physical.svg",
  "https://www.wegene.com/static/dist/svg/weight_lose.svg",
  "https://www.wegene.com/static/dist/svg/response_to_exercise.svg",
  "https://www.wegene.com/static/dist/svg/sports_protection.svg"
];
var defaultData = [
  {
    id: 1,
    name: "血压",
    stat: "ACTIVE",
    desc: "血压描述",
    dataProductIndices: [
      {
        id: 1,
        productid: 1,
        name: "舒张压",
        value: null,
        unit: "个",
        stat: "ACTIVE"
      },
      {
        id: 2,
        productid: 1,
        name: "收缩压",
        value: null,
        unit: "个",
        stat: "ACTIVE"
      }
    ],
    dataProductIdea: null,
    resultType: null
  },
  {
    id: 2,
    name: "握力",
    stat: "ACTIVE",
    desc: "握力测试描述",
    dataProductIndices: [
      {
        id: 3,
        productid: 2,
        name: "左手",
        value: null,
        unit: null,
        stat: "ACTIVE"
      },
      {
        id: 4,
        productid: 2,
        name: "右手",
        value: null,
        unit: null,
        stat: "ACTIVE"
      }
    ],
    dataProductIdea: null,
    resultType: null
  },
  {
    id: 3,
    name: "肺活量",
    stat: "ACTIVE",
    desc: "肺活量描述",
    dataProductIndices: [
      {
        id: 5,
        productid: 3,
        name: "肺活量",
        value: null,
        unit: null,
        stat: "ACTIVE"
      }
    ],
    dataProductIdea: null,
    resultType: null
  },
  {
    id: 4,
    name: "反应能力",
    stat: "ACTIVE",
    desc: "反应能力描述",
    dataProductIndices: [
      {
        id: 6,
        productid: 4,
        name: "瞬时反应",
        value: null,
        unit: null,
        stat: "ACTIVE"
      },
      {
        id: 7,
        productid: 4,
        name: "距离反应",
        value: null,
        unit: null,
        stat: "ACTIVE"
      }
    ],
    dataProductIdea: null,
    resultType: null
  },
  {
    id: 5,
    name: "体前屈",
    stat: "ACTIVE",
    desc: "体前屈描述",
    dataProductIndices: [
      {
        id: 8,
        productid: 5,
        name: "体前屈",
        value: null,
        unit: null,
        stat: "ACTIVE"
      }
    ],
    dataProductIdea: null,
    resultType: null
  },
  {
    id: 6,
    name: "闭眼单腿站立",
    stat: "ACTIVE",
    desc: "闭眼单腿站立描述",
    dataProductIndices: [
      {
        id: 9,
        productid: 6,
        name: "左腿",
        value: null,
        unit: null,
        stat: "ACTIVE"
      },
      {
        id: 10,
        productid: 6,
        name: "右腿",
        value: null,
        unit: null,
        stat: "ACTIVE"
      }
    ],
    dataProductIdea: null,
    resultType: null
  },
  {
    id: 7,
    name: "体重",
    stat: "ACTIVE",
    desc: "体重描述",
    dataProductIndices: [
      {
        id: 11,
        productid: 7,
        name: "体重",
        value: null,
        unit: null,
        stat: "ACTIVE"
      }
    ],
    dataProductIdea: null,
    resultType: null
  },
  {
    id: 8,
    name: "身体脂肪率",
    stat: "ACTIVE",
    desc: "身体脂肪率描述",
    dataProductIndices: [
      {
        id: 12,
        productid: 8,
        name: "身体脂肪率",
        value: null,
        unit: null,
        stat: "ACTIVE"
      }
    ],
    dataProductIdea: null,
    resultType: null
  },
  {
    id: 9,
    name: "身体年龄",
    stat: "ACTIVE",
    desc: "身体年龄描述",
    dataProductIndices: [
      {
        id: 13,
        productid: 9,
        name: "身体年龄",
        value: null,
        unit: null,
        stat: "ACTIVE"
      }
    ],
    dataProductIdea: null,
    resultType: null
  },
  {
    id: 10,
    name: "身高",
    stat: "ACTIVE",
    desc: "身高描述",
    dataProductIndices: [
      {
        id: 14,
        productid: 10,
        name: "身高",
        value: null,
        unit: null,
        stat: "ACTIVE"
      }
    ],
    dataProductIdea: null,
    resultType: null
  },
  {
    id: 11,
    name: "BIM",
    stat: "ACTIVE",
    desc: "BIM描述",
    dataProductIndices: [
      {
        id: 15,
        productid: 11,
        name: "BMI",
        value: null,
        unit: null,
        stat: "ACTIVE"
      }
    ],
    dataProductIdea: null,
    resultType: null
  },
  {
    id: 12,
    name: "基础代谢",
    stat: "ACTIVE",
    desc: "基础代谢描述",
    dataProductIndices: [
      {
        id: 16,
        productid: 12,
        name: "基础代谢",
        value: null,
        unit: null,
        stat: "ACTIVE"
      }
    ],
    dataProductIdea: null,
    resultType: null
  },
  {
    id: 13,
    name: "内脏脂肪指数",
    stat: "ACTIVE",
    desc: "内脏脂肪指数描述",
    dataProductIndices: [
      {
        id: 17,
        productid: 13,
        name: "内脏脂肪指数",
        value: null,
        unit: null,
        stat: "ACTIVE"
      }
    ],
    dataProductIdea: null,
    resultType: null
  },
  {
    id: 14,
    name: "全身皮下脂肪率",
    stat: "ACTIVE",
    desc: "全身皮下脂肪率描述",
    dataProductIndices: [
      {
        id: 18,
        productid: 14,
        name: "全身皮下脂肪率",
        value: null,
        unit: null,
        stat: "ACTIVE"
      }
    ],
    dataProductIdea: null,
    resultType: null
  },
  {
    id: 15,
    name: "全身肌肉率",
    stat: "ACTIVE",
    desc: "全身肌肉率描述",
    dataProductIndices: [
      {
        id: 19,
        productid: 15,
        name: "全身肌肉率",
        value: null,
        unit: null,
        stat: "ACTIVE"
      }
    ],
    dataProductIdea: null,
    resultType: null
  },
  {
    id: 16,
    name: "上肢皮下脂肪率",
    stat: "ACTIVE",
    desc: "上肢皮下脂肪率描述",
    dataProductIndices: [
      {
        id: 20,
        productid: 16,
        name: "上肢皮下脂肪率",
        value: null,
        unit: null,
        stat: "ACTIVE"
      }
    ],
    dataProductIdea: null,
    resultType: null
  },
  {
    id: 17,
    name: "上肢肌肉率",
    stat: "ACTIVE",
    desc: "上肢肌肉率描述",
    dataProductIndices: [
      {
        id: 21,
        productid: 17,
        name: "上肢肌肉率",
        value: null,
        unit: null,
        stat: "ACTIVE"
      }
    ],
    dataProductIdea: null,
    resultType: null
  },
  {
    id: 18,
    name: "躯干皮下脂肪率",
    stat: "ACTIVE",
    desc: "躯干皮下脂肪率描述",
    dataProductIndices: [
      {
        id: 22,
        productid: 18,
        name: "躯干皮下脂肪率",
        value: null,
        unit: null,
        stat: "ACTIVE"
      }
    ],
    dataProductIdea: null,
    resultType: null
  },
  {
    id: 19,
    name: "躯干肌肉率",
    stat: "ACTIVE",
    desc: "躯干肌肉率描述",
    dataProductIndices: [
      {
        id: 23,
        productid: 19,
        name: "躯干肌肉率",
        value: null,
        unit: null,
        stat: "ACTIVE"
      }
    ],
    dataProductIdea: null,
    resultType: null
  },
  {
    id: 20,
    name: "下肢皮下脂肪率",
    stat: "ACTIVE",
    desc: "下肢皮下脂肪率",
    dataProductIndices: [
      {
        id: 24,
        productid: 20,
        name: "下肢皮下脂肪率",
        value: null,
        unit: null,
        stat: "ACTIVE"
      }
    ],
    dataProductIdea: null,
    resultType: null
  },
  {
    id: 21,
    name: "下肢皮下肌肉率",
    stat: "ACTIVE",
    desc: "下肢皮下肌肉率描述",
    dataProductIndices: [
      {
        id: 25,
        productid: 21,
        name: "下肢肌肉率",
        value: null,
        unit: null,
        stat: "ACTIVE"
      }
    ],
    dataProductIdea: null,
    resultType: null
  },
  {
    id: 22,
    name: "台阶",
    stat: "ACTIVE",
    desc: "台阶测试描述",
    dataProductIndices: [
      {
        id: 26,
        productid: 22,
        name: "1分钟",
        value: null,
        unit: null,
        stat: "ACTIVE"
      },
      {
        id: 27,
        productid: 22,
        name: "2分钟",
        value: null,
        unit: null,
        stat: "ACTIVE"
      },
      {
        id: 28,
        productid: 22,
        name: "3分钟",
        value: null,
        unit: null,
        stat: "ACTIVE"
      }
    ],
    dataProductIdea: null,
    resultType: null
  },
  {
    id: 23,
    name: "皮脂尺",
    stat: "ACTIVE",
    desc: "皮脂尺描述",
    dataProductIndices: [
      {
        id: 29,
        productid: 23,
        name: "皮脂尺",
        value: null,
        unit: null,
        stat: "ACTIVE"
      }
    ],
    dataProductIdea: null,
    resultType: null
  }
];
class resultPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: [],
      value: "",
      userInfo: ""
    };
  }

  handleClick = (item, sub) => {
    return prompt(
      sub.name,
      "",
      [
        {
          text: "取消",
          onPress: value =>
            new Promise(resolve => {
              resolve();
            })
        },
        {
          text: "确定",
          onPress: value =>
            new Promise((resolve, reject) => {
              if (!value) {
                Toast.info("请输入数据");
                reject();
              }
              var productList = [
                {
                  name: item.name,
                  dataProductIndices: [
                    { name: sub.name, value: value, unit: sub.unit }
                  ]
                }
              ];
              postproductData({
                batchNum: this.batchNum,
                testUserCode: this.state.value,
                productList: productList
              }).then(data => {
                if (data && data.data && data.data.status === 0) {
                  const newData = [...this.state.productData];
                  newData.forEach(preItem => {
                    if (item.id === preItem.id) {
                      preItem.dataProductIndices.forEach(preSub => {
                        if (preSub.id === sub.id) {
                          preSub.value = value;
                        }
                      });
                    }
                  });
                  this.setState({ productData: newData });
                  resolve();
                } else {
                  Toast.info("录入数据失败");
                }
              });
            })
        }
      ],
      "default",
      sub.value,
      ["请输入测试值"]
    );
  };
  componentDidMount() {
    const cookies = isAuthenticated();
    if (cookies) {
      const userInfo = JSON.parse(cookies);
      this.batchNum = userInfo.batchNum;
    }
    getProduct().then(data=>{
      if(data.data.status === 0) {
        defaultData = data.data.data;
      } 
    })
  }

  searchInfoByUserId = () => {
    if (!this.state.value) {
      Toast.info("请输入用户id");
    } else {
      userInfo({ testUserCode: this.state.value }).then(data => {
        if (data.data.status === 0) {
          this.setState({ userInfo: data.data.data });
        } else {
          Toast.info(data.data.message);
        }
      });
      search({ batchNum: this.batchNum, testUserCode: this.state.value }).then(
        data => {
          if (data.data.status === 0) {
            const productDatas = JSON.parse(JSON.stringify(defaultData));
            productDatas.forEach(item => {
              data.data.data &&
                data.data.data.forEach(sub => {
                  if (item.id === sub.id) {
                    item.dataProductIndices.forEach(pItem => {
                      sub.dataProductIndices &&
                        sub.dataProductIndices.forEach(ssub => {
                          if (pItem.id === ssub.id) {
                            pItem.value = ssub.value;
                          }
                        });
                    });
                  }
                });
            });
            this.setState({ productData: productDatas });
          } else {
            Toast.info(data.data.message);
          }
        }
      );
    }
  };

  goBack = () => {
    createHashHistory().goBack();
  };

  onChange = ev => {
    this.setState({ value: ev });
  };
  handClick = item => {
    // this.props.dispatch(routerRedux.push("/detail"));
  };
  render() {
    return (
      <div>
        <div>
          <SearchBar
            value={this.state.value}
            placeholder="请输入用户编码"
            onSubmit={this.searchInfoByUserId}
            onClear={value => console.log(value, "onClear")}
            onFocus={() => console.log("onFocus")}
            onBlur={this.searchInfoByUserId}
            onCancel={() => console.log("onCancel")}
            showCancelButton
            onChange={this.onChange}
          />

          <div>
            {this.state.userInfo ? (
              <div
                style={{
                  background: "linear-gradient(90deg,#bfe885,#98e07e)",
                  minHeight: 90,
                  color: "#fff",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingLeft: 10,
                  paddingRight: 10
                }}
              >
                <div>
                  <p style={{ fontSize: "18px" }}>
                    {this.state.userInfo.testName}
                  </p>
                  <p style={{ marginTop: 5 }}>
                    {this.state.userInfo.gender} {this.state.userInfo.age}岁
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "18px" }}>
                    编号：{this.state.userInfo.testUserCode}
                  </p>
                </div>
              </div>
            ) : (
              <div
                style={{
                  height: 90,
                  lineHeight: "90px",
                  textAlign: "center",
                  background: "linear-gradient(90deg,#bfe885,#98e07e)",
                  color: "#fff"
                }}
              >
                暂无该用户
              </div>
            )}
            {this.state.userInfo &&
              this.state.productData &&
              this.state.productData.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    style={{
                      padding: "0 10px",
                      marginTop: 20,
                      background: "#fff"
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        height: 40
                      }}
                    >
                      <img width="26" alt="" src={img[index % 5]} />
                      <p style={{ marginLeft: 10 }}>{item.name}</p>
                    </div>
                    <List className="my-list">
                      {item.dataProductIndices &&
                        item.dataProductIndices.map(sub => {
                          return (
                            <Item
                              key={sub.id}
                              extra={sub.value + sub.unit}
                              onClick={() => this.handleClick(item, sub)}
                            >
                              {sub.name}
                            </Item>
                          );
                        })}
                    </List>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
export default resultPage;
