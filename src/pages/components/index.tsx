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
    </div>
  )
}

export default Components;