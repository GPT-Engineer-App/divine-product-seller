const About = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6">About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border p-4 rounded-lg">
          <img
            src="/placeholder.svg"
            alt="Know More About God"
            className="mx-auto object-cover w-full h-[200px] mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Know More About God</h3>
          <p className="text-lg">
            Brief description about God.
          </p>
        </div>
        <div className="border p-4 rounded-lg">
          <img
            src="/placeholder.svg"
            alt="Know More About Bikash"
            className="mx-auto object-cover w-full h-[200px] mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Know More About Bikash</h3>
          <p className="text-lg">
            Brief description about Bikash.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;