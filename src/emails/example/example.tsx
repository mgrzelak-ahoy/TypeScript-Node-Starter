import React from "react";

import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlClass,
  MjmlColumn,
  MjmlHead,
  MjmlImage,
  MjmlSection,
  MjmlStyle,
  MjmlText
} from "mjml-react";
import {EmailGenerator} from "../interfaces";

export interface ExampleProps {
    firstName: string;
    companyName: string;
}

const ExampleHtml = ({firstName, companyName}: ExampleProps): React.ReactElement => {
    return (
      <Mjml>
        <MjmlHead>
          <MjmlAttributes>
            <MjmlAll padding="0px" />
            <MjmlClass name="preheader" color="#000000" fontSize="11px" fontFamily="Ubuntu, Helvetica, Arial, sans-serif" padding="0px" />
          </MjmlAttributes>
          <MjmlStyle inline>
            {"a { text-decoration: none; color: inherit; }"}
          </MjmlStyle>
        </MjmlHead>
        <MjmlBody backgroundColor="#e0f2ff">
          <MjmlSection backgroundColor="#2a5cab" padding="10px 0">
            <MjmlColumn width="33%">
              <MjmlImage src="http://go.mailjet.com/tplimg/mtrq/b/ox8s/mg1qg.png" alt="logo" width="150px" padding="10px 0" />
            </MjmlColumn>
            <MjmlColumn width="66%">
              <MjmlText align="left" color="#ffffff" fontSize="20px" fontFamily="Lato, Helvetica, Arial, sans-serif" padding="18px 0px">the only way to travel</MjmlText>
            </MjmlColumn>
          </MjmlSection>
          <MjmlSection backgroundColor="#ffffff" paddingTop="20px">
            <MjmlColumn width="100%">
              <MjmlImage src="http://go.mailjet.com/tplimg/mtrq/b/ox8s/mg1qh.png" alt="tickets" width="192px" padding="10px 25px" />
              <MjmlText align="center" color="#FAB701" fontSize="25px" fontFamily="Lato, Helvetica, Arial, sans-serif" padding="10px 25px"><strong>Hey {firstName}
                <br />
                <br />
            It&apos;s been a long time since you last traveled with us.
                {/* eslint-disable-next-line react/jsx-closing-tag-location */}
              </strong>
              </MjmlText>
              <MjmlText align="center" color="#EC652D" fontSize="18px" fontFamily="Lato, Helvetica, Arial, sans-serif" padding="10px 30px"><strong>Have a look at some of the top destinations people are booking right now!</strong></MjmlText>
            </MjmlColumn>
          </MjmlSection>
          <MjmlSection backgroundColor="#ffffff" padding="20px 0">
            <MjmlColumn>
              <MjmlImage src="http://go.mailjet.com/tplimg/mtrq/b/ox8s/mg1qy.png" alt="New York" width="184px" padding="0 25px" />
              <MjmlText align="center" color="#EC652D" fontSize="20px" fontFamily="Lato, Helvetica, Arial, sans-serif" vertical-align="top" padding="20px 25px"><strong>New York</strong> <br />
                <p style={{fontSize: "15px",color:"#000000"}}>$399&#xA0;</p>
              </MjmlText>
            </MjmlColumn>
            <MjmlColumn>
              <MjmlImage src="http://go.mailjet.com/tplimg/mtrq/b/ox8s/mg1qr.png" alt="London" width="184px" padding="0 25px" />
              <MjmlText align="center" color="#EC652D" fontSize="20px" fontFamily="Lato, Helvetica, Arial, sans-serif" vertical-align="top" padding="20px 25px"><strong>London</strong> <br />
                <p style={{fontSize: "15px",color:"#000000"}}>$399&#xA0;</p>
              </MjmlText>
            </MjmlColumn>
            <MjmlColumn>
              <MjmlImage src="http://go.mailjet.com/tplimg/mtrq/b/ox8s/mg1qv.png" alt="Berlin" width="184px" padding="0 25px" />
              <MjmlText align="center" color="#EC652D" fontSize="20px" fontFamily="Lato, Helvetica, Arial, sans-serif" vertical-align="top" padding="20px 25px"><strong>Berlin</strong> <br />
                <p style={{fontSize: "15px",color:"#000000"}}>$399&#xA0;</p>
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>
          <MjmlSection backgroundColor="#FAB700" padding="10px">
            <MjmlColumn vertical-align="top" width="100%">
              <MjmlText align="center" color="#EC652D" fontSize="20px" fontFamily="Lato, Helvetica, Arial, sans-serif" padding="10px 25px">Best, <br /><br /> The {companyName} Team</MjmlText>
            </MjmlColumn>
          </MjmlSection>
        </MjmlBody>
      </Mjml>
    );
};

const ExampleString = ({firstName, companyName}: ExampleProps): string => {
    return (
        `First Name: ${firstName}, Company Name: ${companyName}`
    );
};

export const Example = ({firstName, companyName}: ExampleProps): EmailGenerator => ({
    message: ExampleString({firstName, companyName}),
    reactMessage: ExampleHtml({firstName, companyName}),
});
