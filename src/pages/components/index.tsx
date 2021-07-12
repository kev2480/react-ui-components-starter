import { useState } from "react";
import Button from "components/ui/Button";
import Card from "components/ui/Card";
import Form from "components/ui/Form";
import Label from "components/ui/Form/label";
import Input from "components/ui/Form/input";
import Error from "components/ui/Form/error";
import variants from "constants/variants";
import Icon from "components/ui/Icon";

interface Props {

}

const Components = (props: Props) => {
  const [buttonClick, setButtonClick] = useState(false);

  return (
    <div>
      <h1>A list of components!</h1>
      <section className="u-margin-bottom">
        <h2>
          Buttons
        </h2>
        <div className="u-flex u-flex--column u-flex--align-start">
          <Button onClick={() => {}} className="u-margin-bottom-small">Normal Button</Button>
          <Button variant={variants.primary} className="u-margin-bottom-small">Primary Button</Button>
          <Button variant={variants.warning} className="u-margin-bottom-small">Warning Button</Button>
          <Button onClick={() => {}} className="c-button--small">Small Button</Button>
        </div>
      </section>
      <section>
        <Card>
          <h2 className="u-margin-top-none">I am a card!</h2>
          <ul>
            <li>With</li>
            <li>a</li>
            <li>list</li>
            <li>of</li>
            <li>Things!</li>
          </ul>
          <div className="u-text-right">
            <Button variant={variants.primary}>And a button</Button>
          </div>
        </Card>
      </section>
      <section>
        <h2>Colours</h2>
        <div className="u-flex u-flex--wrap">
          <div className="u-background-primary u-margin-bottom-small u-margin-right-small u-flex u-flex--align-center u-flex--justify-center" style={{width: 100, height: 100}}>
            <p className="u-text-bold">Primary</p>
          </div>
          <div className="u-background-secondary u-text-white  u-margin-bottom-small u-margin-right-small u-flex u-flex--align-center u-flex--justify-center" style={{width: 100, height: 100}}>
            <p className="u-text-bold">Secondary</p>
          </div>
          <div className="u-background-warning u-margin-bottom-small u-margin-right-small u-flex u-flex--align-center u-flex--justify-center" style={{width: 100, height: 100}}>
            <p className="u-text-bold">Warning</p>
          </div>
          <div className="u-background-tertiary u-margin-bottom-small u-margin-right-small u-flex u-flex--align-center u-flex--justify-center" style={{width: 100, height: 100}}>
            <p className="u-text-bold">Tertiary</p>
          </div>
          <div className="u-background-error u-text-white u-margin-bottom-small u-margin-right-small  u-flex u-flex--align-center u-flex--justify-center" style={{width: 100, height: 100}}>
            <p className="u-text-bold">Error</p>
          </div>
        </div>
      </section>
      <section>
        <h2>Form elements</h2>
        <Card>
          <Form>
            <fieldset>
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name"/>
            </fieldset>
            <fieldset>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email"/>
            </fieldset>
            <fieldset className="u-margin-bottom">
              <Label htmlFor="password" hasError aria-describedby="passwordError">Password</Label>
              <Input id="password" type="password" hasError/>
              <Error id="passwordError">Please enter a password</Error>
            </fieldset>
            <div className="u-text-right">
              <Input type="submit" className="c-button c-button--primary c-button--small" id="submit" />
            </div>
          </Form>
        </Card>
      </section>
      <section>
        <h2>Icons</h2>
        <div className="u-flex u-flex--wrap">
          <Icon name="heart" width="32" height="32" className="u-margin-right-small"/>
          <Icon name="heart-red" width="32" height="32" className="u-margin-right-small"/>
          <Button variant="icon" onClick={() => setButtonClick(!buttonClick)} className="u-margin-right-small">
            <Icon name={buttonClick ? "heart-red" : "heart"} width="32" height="32" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Components;