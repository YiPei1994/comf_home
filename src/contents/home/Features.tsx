import { Card } from '../../components/Card';
import Container from '../../components/Container';
import { features } from '../../utils/Data';

function Features() {
  return (
    <Container className="flex flex-col gap-8 p-12 py-12 md:flex-row md:flex-wrap  md:justify-between  lg:p-16 xl:gap-12">
      <h3 className="w-3/4 md:text-center lg:w-full">
        What makes our brand different
      </h3>
      {features.map((feature, i) => (
        <Card key={i} title={feature.title} icon={feature.icon}>
          <p>{feature.description}</p>
        </Card>
      ))}
    </Container>
  );
}

export default Features;
