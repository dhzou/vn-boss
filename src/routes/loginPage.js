import React from "react";
import { List, InputItem, Button, NavBar, Toast } from "antd-mobile";
import { login } from "../services/service";
import styles from "../assets/css/home.less";
import { createHashHistory } from 'history'
import { isAuthenticated,authenticateSuccess } from '../utils/session';
class loginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
  }
  componentDidMount(){
    document.title="登陆";
    const cookies = isAuthenticated();
   if (cookies) {
    const userInfo = JSON.parse(cookies);
    this.setState({userName:userInfo.username,password:userInfo.password})
   }
  }

  handleClick = () => {
    if (!this.state.userName || !this.state.password) {
      Toast.info("参数不能为空");
      return;
    } else {
      login({
        username: this.state.userName,
        password: this.state.password
      }).then(data => {
        if (data.data.status === 0) {
          authenticateSuccess(JSON.stringify(data.data.data))
          createHashHistory().push("/result")
        } else {
          Toast.info(data.data.message);
        }
      });
    }
  };
  render() {
    return (
      <div className={styles["animate-route"]}>
        <NavBar mode="dark">登录</NavBar>
        <div style={{ padding: 16 }}>
          <List style={{ marginTop: 100 }}>
            <InputItem
              clear
              placeholder="请输入账号"
              value={this.state.userName}
              onChange={ev => {
                this.setState({ userName: ev });
              }}
            >
              账号
            </InputItem>
            <InputItem
              clear
              placeholder="请输入密码"
              value={this.state.password}
              onChange={ev => {
                this.setState({ password: ev });
              }}
            >
              密码
            </InputItem>
            <Button
              style={{ borderRadius: 10, marginTop: 20 }}
              type="primary"
              onClick={this.handleClick}
            >
              登录
            </Button>
          </List>
        </div>
      </div>
    );
  }
}

export default loginPage;
