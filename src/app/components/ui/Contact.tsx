export default function Contact() {
    return (
      <div>
        {/* Section One */}
        <div
          className="relative h-[400px] sm:h-[450px] md:h-[500px] bg-center bg-cover"
          style={{ backgroundImage: "url(/images/contact1.avif)" }}
        >
          <div className="absolute bg-black/60 inset-0 flex flex-col py-16 sm:py-24 md:py-32 px-6 justify-center items-center text-center">
            <h1 className="text-blue-800 pb-4 text-lg sm:text-xl md:text-2xl font-semibold">
              GET IN TOUCH
            </h1>
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl pb-4 font-semibold border-b-[6px] border-blue-900">
              Connect with Keshav Digital
            </h1>
            <p className="pb-4 pt-3 text-base sm:text-lg md:text-xl text-white max-w-3xl">
              We’re here to support your textile needs. Reach out to us for inquiries,
              consultations, or to learn more about our innovative fabric solutions.
            </p>
          </div>
        </div>
      </div>
    );
  }
  