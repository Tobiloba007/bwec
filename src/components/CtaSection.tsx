import { Reveal } from "@/components/Reveal";
import { IMG } from "@/data/images";
import { FORMS } from "@/data/site";
import { Button } from "./Button";

export function CtaSection() {
  return (
    <section className="shell my-[90px] max-[800px]:my-[55px]">
      <Reveal
        direction="scale"
        className="group grid grid-cols-[1.3fr_1fr] overflow-hidden rounded-[20px] bg-[#14b4b2] max-[800px]:grid-cols-1 max-[800px]:gap-[30px]"
      >
        <div className="flex flex-col justify-center p-[50px] max-[800px]:p-8">
          <h2 className="mb-[32px]">
            Many voices. One community.
            <br />A future without racism.
          </h2>
          <Button className="self-start" href={FORMS.getInvolved}>
            GET INVOLVED
          </Button>
        </div>
        <div className="relative overflow-hidden">
          <img
            className="h-full min-h-[300px] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
            src={IMG.communityPhotograph}
            alt="A wristband that reads spread love"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0d3b3a4d] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </div>
      </Reveal>
    </section>
  );
}
