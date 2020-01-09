"use strict";
exports.__esModule = true;
var react_1 = require("react");
var mjml_react_1 = require("mjml-react");
exports.ExampleHtml = function (_a) {
    var title = _a.title, buttonContent = _a.buttonContent;
    return (<mjml_react_1.Mjml>
      <mjml_react_1.MjmlBody backgroundColor="#ffffff">
        <mjml_react_1.MjmlSection backgroundColor="#ffffff" paddingBottom="0px" paddingTop="0">
          <mjml_react_1.MjmlColumn verticalAlign="top" width="100%">
            <mjml_react_1.MjmlImage src="http://go.mailjet.com/tplimg/mtrq/b/ox8s/mg1rw.png" alt="" align="center" border="none" width="600px" paddingLeft="0px" paddingRight="0px" paddingBottom="0px" paddingTop="0"/>
          </mjml_react_1.MjmlColumn>
        </mjml_react_1.MjmlSection>
        <mjml_react_1.MjmlSection backgroundColor="#009FE3" verticalAlign="top" paddingBottom="0px" paddingTop="0">
          <mjml_react_1.MjmlColumn verticalAlign="top" width="100%">
            <mjml_react_1.MjmlText align="left" color="#ffffff" fontSize="45px" fontFamily="open Sans Helvetica, Arial, sans-serif" paddingLeft="25px" paddingRight="25px" paddingBottom="30px" paddingTop="50px">
Welcome aboard
            </mjml_react_1.MjmlText>
          </mjml_react_1.MjmlColumn>
        </mjml_react_1.MjmlSection>
        <mjml_react_1.MjmlSection background-color="#009fe3" padding-bottom="20px" padding-top="20px">
          <mjml_react_1.MjmlColumn vertical-align="middle" width="100%">
            <mjml_react_1.MjmlText align="left" color="#ffffff" font-size="22px" font-family="open Sans Helvetica, Arial, sans-serif" padding-left="25px" padding-right="25px">
              <span style={{ color: "#FEEB35" }}>
                Dear [[FirstName]]
              </span>
              <br />
              <br />
              {" "}
Welcome to [[CompanyName]].
            </mjml_react_1.MjmlText>
            <mjml_react_1.MjmlText align="left" color="#ffffff" font-size="15px" font-family="open Sans Helvetica, Arial, sans-serif" padding-left="25px" padding-right="25px">We&apos;re really excited you&apos;ve decided to give us a try. In case you have any questions, feel free to reach out to us at [[ContactEmail]]. You can login to your account with your username [[UserName]]</mjml_react_1.MjmlText>
            <mjml_react_1.MjmlButton align="left" font-size="22px" font-weight="bold" background-color="#ffffff" border-radius="10px" color="#1AA0E1" font-family="open Sans Helvetica, Arial, sans-serif">Login</mjml_react_1.MjmlButton>
            <mjml_react_1.MjmlText align="left" color="#ffffff" font-size="15px" font-family="open Sans Helvetica, Arial, sans-serif" padding-left="25px" padding-right="25px">
Thanks,
              <br />
              {" "}
The [[CompanyName]] Team
            </mjml_react_1.MjmlText>
          </mjml_react_1.MjmlColumn>
        </mjml_react_1.MjmlSection>
      </mjml_react_1.MjmlBody>
    </mjml_react_1.Mjml>);
};
exports.ExampleString = function (_a) {
    var title = _a.title, buttonContent = _a.buttonContent;
    return ("Title: " + title + ", ButtonContent: " + buttonContent);
};
