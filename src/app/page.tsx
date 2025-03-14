import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ServiceCard from "@/components/serviceCard";
import { TbSpeakerphone } from "react-icons/tb";
import TestimonialCard from "@/components/TestimonialCard";
import { ReviewData } from "@/lib/reviewData";
import { ReviewSwiper } from "@/components/personCardSwiper";
import { LogoSpin } from "@/components/LogoSpin";

export default function Home() {
  const iconStyle = "text-[#A0E00D]  h-8 w-8";
  const reviews = ReviewData;
  return (
    <main className='allPadding'>
      <section className=''>
        <div className=' py-10 flex flex-col justify-center items-center gap-5 xl:gap-8'>
          <h1 className='text-center text-2xl md:text-4xl xl:text-6xl font-bold lg:leading-14 '>
            <span className='text-[#A0E00D]'>Feature-Proof</span> Your <br />
            Business with Expart
            <span className='text-[#A0E00D]'> IT Services</span>
          </h1>
          <p className='text-center text-[.8rem] md:text-sm text-white/60'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            ratione ut molestiae fugit voluptatum commodi quis magnam sit
            accusamus ea?
          </p>
          <div
            className='flex w-full sm:max-w-1/2 lg:max-w-1/3
          items-center space-x-2'
          >
            <Input
              type='email'
              placeholder='example@gmail.com'
              className=' text-[.8rem] md:text-sm'
            />
            <Button type='submit' className=''>
              Get notified
            </Button>
          </div>
        </div>
        <AspectRatio ratio={16 / 9} className=''>
          <Image
            src='/landing_image.png'
            fill
            alt='landing'
            className='object-contain'
          />
        </AspectRatio>
        <div className=''>
          <LogoSpin />
        </div>
      </section>
      <section className='grid grid-cols-1 sm:grid-cols-2 py-10 gap-5 '>
        <div className='flex-col flex justify-center items-start gap-3 '>
          <p className='text-[#A0E00D]'>About us</p>
          <h1 className='text-2xl lg:text-4xl'>
            Welcome to <span className='font-semibold'>FourBtech</span>
          </h1>
          <p className='text-sm lg:text-sm text-white/70 py-1'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            a perferendis amet labore magnam, possimus deserunt aliquam ut
            commodi illum mollitia corporis dolor eveniet laboriosam nobis
            minima debitis consequatur quis.
          </p>
          <Button>More about us</Button>
        </div>
        <AspectRatio ratio={4 / 3} className=''>
          <Image
            src='/people.png'
            fill
            alt='landing'
            className='object-contain'
          />
        </AspectRatio>
      </section>
      <section className='*:py-2'>
        <h1 className='text-center text-3xl lg:text-4xl font-semibold'>
          Our <span className='text-[#A0E00D]'>Services</span>
        </h1>
        <p className='text-center text-sm text-white/70 py-1 px-[20%]'>
          Since 2020 we have been helping small to large businesses transform
          their businesses into digital products,
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
          <ServiceCard
            icon={<TbSpeakerphone className={iconStyle} />}
            title='Web Development'
            content='Crafting visually stunning and user-friendly websites that captivate your audience and drive engagement'
          />
          <ServiceCard
            icon={<TbSpeakerphone className={iconStyle} />}
            title='Web Development'
            content='Crafting visually stunning and user-friendly websites that captivate your audience and drive engagement'
          />
          <ServiceCard
            icon={<TbSpeakerphone className={iconStyle} />}
            title='Web Development'
            content='Crafting visually stunning and user-friendly websites that captivate your audience and drive engagement'
          />
        </div>
      </section>
      <section className='py-10'>
        <h1 className='text-2xl py-4 lg:text-4xl font-semibold text-center'>
          Testimonials <span className='text-[#A0E00D]'>About US</span>
        </h1>
        <div className='md:grid grid-cols-2 lg:grid-cols-3 gap-5 w-full hidden'>
          {reviews.map((review, index) => {
            return <TestimonialCard key={index} {...review} />;
          })}
        </div>
        <div className='block sm:hidden'>
          <ReviewSwiper />
        </div>
      </section>
      <section className='flex flex-col justify-center items-center gap-10 bg-[#121311] py-10 md:py-32'>
        <h1 className='text-center text-2xl xl:text-4xl font-semibold'>
          Ready to take your <br /> IT solutions to the next level?
        </h1>
        <p className='text-center text-sm text-white/70 px-[10%]'>
          Ready to elevate your digital strategy? Book a free consultation with
          our IT experts today!
        </p>
        <Button>Schedule a free consultation</Button>
      </section>
    </main>
  );
}
