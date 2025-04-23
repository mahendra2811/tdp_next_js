export default function About() {
  return (
    <section className="max-w-xl mx-auto text-center">
      <h1 className="text-2xl font-bold text-primary mb-3">About Thar Desert Photography</h1>
      <img
        src="https://thardesertphotography.com/images/team-1.jpg"
        alt="Photographer Profile"
        className="mx-auto rounded-full h-32 w-32 object-cover mb-4 border"
      />
      <div className="mb-4 text-base text-muted-foreground">
        {/* Paste your biography or studio story here */}
        We are desert lovers, passionate about capturing the stunning beauty of Rajasthan. Paste your history, credentials, or story here.
      </div>
      <div className="mb-2">
        <strong>Our Mission: </strong>
        <span>To help travelers and adventurers experience and immortalize the Thar Desert through powerful storytelling and beautiful photography.</span>
      </div>
      <div className="mb-8">
        <strong>Our Vision: </strong>
        <span>To be Rajasthan's leading desert photography and tour provider, delighting guests from around the world.</span>
      </div>
      <div>
        {/* Add awards, testimonials, or team here if desired */}
      </div>
    </section>
  );
}
