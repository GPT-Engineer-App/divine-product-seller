import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="text-center">
      <section className="hero bg-gray-200 py-20">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Store</h1>
          <p className="text-xl mb-8">Find the best products here</p>
          <Button className="mx-auto">Shop Now</Button>
        </div>
      </section>
    </div>
  );
};

export default Index;