import Layout from "../components/Layout";
import Button from "../components/Button";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold text-center">Welcome to Patch22</h1>
      <p className="text-center mt-4">Create and shop custom morale patches.</p>
      <div className="mt-6 flex justify-center gap-4">
        <Button text="Design Your Patch" link="/custom" />
        <Button text="Shop Now" link="/products" />
      </div>
    </Layout>
  );
}
