import PaintingList from '../components/PaintingList';
import Section from '../components/Section';
import paintings from '../../src/paintings.json';

export const App = () => {
  return (
    <div>
      <Section title="Топ недели">
        <PaintingList items={paintings} />
        {/* <PaintingList items={paintings} /> */}
      </Section>
      <Section title="Лучшее">
        <PaintingList items={paintings} />
      </Section>
    </div>
  );
};
