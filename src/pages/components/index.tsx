import Button from "components/ui/Button";
import Card from "components/ui/Card";
import variants from "constants/variants";

interface Props {

}

const Components = (props: Props) => {
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
          <Button variant={variants.warning}>Warning Button</Button>
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
    </div>
  )
}

export default Components;