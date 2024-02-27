import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6";

const NewsLetter = () => {
  return (
    <div>
      {/* 1st box */}
      <div>
        <h3 className=" text-lg font-bold mb-2 flex items-center gap-2">
          <FaEnvelopeOpenText />
          Email me for jobs
        </h3>

        <p className=" text-primary/75 text-base mb-4">
          Ut esse eiusmod aute. Sit enim labore dolore. Aute ea fugiat commodo
          ea foes.
        </p>

        <div className=" w-full space-y-4">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="name@gmail.com"
            className=" w-full block py-2 pl-3 border focus:outline-none"
          />
          <input
            type="submit"
            value={"Subscribe"}
            className=" w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm to-white cursor-pointer font-semibold pr-3"
          />
        </div>
      </div>

      {/* 2nd box */}
      <div className="mt-20">
        <h3 className=" text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket />
          Get noticed faster
        </h3>

        <p className=" text-primary/75 text-base mb-4">
          Ut esse eiusmod aute. Sit enim labore dolore. Aute ea fugiat commodo
          ea foes.
        </p>

        <div className=" w-full space-y-4">
          <input
            type="submit"
            value={"Up load your resume"}
            className=" w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm to-white cursor-pointer font-semibold pr-3"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
