import * as React from "react";
import { render as testingLibraryRender } from "@testing-library/react";
import { render as mjmlReactRender } from "mjml-react";
import {ExampleHtml, ExampleString} from "../../src/emails/example/example";

describe("<Example />", () => {
  const exampleProps = {
    firstName: 'name',
    companyName: 'company'
  };

  it("should render correctly", () => {
    const container = testingLibraryRender(<ExampleHtml companyName={exampleProps.companyName} firstName={exampleProps.companyName} />);
    expect(container).toMatchSnapshot();
  });

  it("should have zero errors", () => {
    const reactMessage = ExampleHtml(exampleProps);
    const {errors} = mjmlReactRender(reactMessage, {validationLevel: "strict"});

    expect(errors.length).toEqual(0);
  });

  it("should return correct html", () => {
    const reactMessage = ExampleHtml(exampleProps);
    const {html} = mjmlReactRender(reactMessage, {validationLevel: "soft"});
    expect(html).toMatchSnapshot();
  });

  it("should return correct text message", () => {
    const reactMessage = ExampleString(exampleProps);
    expect(reactMessage)
        .toEqual(`First Name: ${exampleProps.firstName}, Company Name: ${exampleProps.companyName}`);
  });
});

