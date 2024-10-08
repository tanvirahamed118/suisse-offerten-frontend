function CustomerSay() {
  return (
    <section>
      <div className="container">
        <h2 className="text-2xl text-black font-bold text-center md:text-4xl">
          What our customers say
        </h2>
        <div className="md:w-full rounded-md py-14">
          <iframe
            src="https://player.vimeo.com/video/907652347?h=36beb3f8f6"
            width="100%"
            height="350"
            className="rounded-md"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default CustomerSay;
