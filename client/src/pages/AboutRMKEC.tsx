import { SectionHeader } from "@/components/SectionHeader"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

import rmk1 from "@/assets/rmk11.png"
import rmk2 from "@/assets/rmk2.png"
import rmk3 from "@/assets/rmk3.png"
import rmk4 from "@/assets/rmk4.png"
import rmk5 from "@/assets/rmk5.png"
import rmk6 from "@/assets/rmk6.png"
import cheif from "@/assets/cheif2.png"

import manju from "@/assets/manjula.png"
import jothi from "@/assets/jothi.png"
import kishore from "@/assets/kishore.png"
import pradeep from "@/assets/yalamanchi.png"
import durga from "@/assets/durgadevi.png"
import sowmya from "@/assets/sowmya.png"

export default function AboutRMKEC() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">

      <div className="container mx-auto px-6">

        <SectionHeader
          title="About R.M.K. Engineering College"
          subtitle="Excellence in Engineering Education Since 1995"
        />

        <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">
          <div className="relative">
  <Swiper
    modules={[Autoplay, Pagination]}
    slidesPerView={1}
    loop={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    className="rounded-2xl shadow-xl"
  >
    <SwiperSlide>
      <img src={rmk1} className="w-full h-[420px] object-cover rounded-2xl" />
    </SwiperSlide>

    <SwiperSlide>
      <img src={rmk2} className="w-full h-[420px] object-cover rounded-2xl" />
    </SwiperSlide>

    <SwiperSlide>
      <img src={rmk3} className="w-full h-[420px] object-cover rounded-2xl" />
    </SwiperSlide>

    <SwiperSlide>
      <img src={rmk4} className="w-full h-[420px] object-cover rounded-2xl" />
    </SwiperSlide>

    <SwiperSlide>
      <img src={rmk5} className="w-full h-[420px] object-cover rounded-2xl" />
    </SwiperSlide>

    <SwiperSlide>
      <img src={rmk6} className="w-full h-[420px] object-cover rounded-2xl" />
    </SwiperSlide>
  </Swiper>
</div>

          <div className="text-muted-foreground space-y-5 leading-relaxed text-lg">
            <p>
              Established in 1995, <b>R.M.K. Engineering College</b> is one of the premier
              institutions affiliated to Anna University, Chennai. The college is accredited
              by NAAC with <b>A+ Grade</b> and NBA for several programs.
            </p>

            <p>
              The institution provides world-class infrastructure, well-equipped laboratories,
              and modern research centers. Centers of Excellence in <b>Artificial Intelligence,
              Big Data, Cloud Computing, and Information Security</b> foster innovation and
              industry collaboration.
            </p>

            <p>
              With outstanding placement records and strong discipline, RMK nurtures students
              into skilled professionals and responsible citizens with integrity and character.
            </p>
          </div>
        </div>


        <div className="mt-24 px-4">
          <div className="bg-white rounded-3xl shadow-2xl p-10">

            <SectionHeader
              title="Founder & Chairman"
              subtitle="Thiru. R.S. Munirathinam"
            />

            <div className="grid md:grid-cols-2 gap-10 items-center mt-10">

              <img
                src={cheif}
                className="rounded-2xl shadow-xl w-full h-[450px] object-cover"
                alt="Thiru. R.S. Munirathinam"
              />

              <div className="text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  Thiru. R.S. Munirathinam, a compassionate and modest person to associate with,
                  is quite sanguine in his conviction and actively partakes in initiatives for social good.
                  He is a dynamic personality, great visionary, and philanthropist.
                </p>

                <p>
                  Being elected thrice in succession, he served as a Former Member of the Tamil Nadu
                  State Assembly. He has been instrumental in setting up the Industrial Estate,
                  SIPCOT, and the Institute of Road Transport at Gummidipoondi.
                </p>

                <p>
                  He was elected as the President of the Consortium of Self-Financing Professional
                  Arts and Science Colleges in Tamil Nadu and served as the Chief Patron of the
                  All India Federation of Self-Financing Technical Institutions (AIFSFTI).
                </p>

                <p>
                  He received the <b>Vidya Ratna Award</b> for his outstanding achievements in the
                  field of education for the rural community. He was nominated as a Committee
                  Member for the Development of Schools under the Tamil Nadu Hindu Religious
                  and Charitable Endowment Department.
                </p>

                <p>
                  He received the <b>Lifetime Achievement Award (2022)</b> from the Honourable
                  Chief Minister of Tamil Nadu and the 
                  <b> Thailand–Tamil Nadu Friendship Award of Excellence 2022</b>
                  from the Consulate of Thailand.
                </p>

                <p>
                  He was conferred with an <b>Honorary Doctorate by Vels University</b> for his
                  contribution to the field of education over the past three decades.
                </p>

                <p>
                  The lush green environment, expansive buildings, well-equipped laboratories,
                  and unparalleled discipline of the students stand as shining examples of his
                  unique style of management.
                </p>

                <p>
                  With full-time participation of the management and the guidance of learned
                  professors, the institution has achieved great heights. The Management believes
                  that the Nation needs not just engineers and professionals, but virtuous men and
                  women who uphold integrity, discipline, and contribute meaningfully to the
                  development of our Nation.
                </p>
              </div>
            </div>

          </div>
        </div>


        <div className="mt-24 bg-blue-50 rounded-3xl p-10 shadow-lg">
        <SectionHeader
          title="Chairman's Message"
          subtitle="A Home Away From Home"
        />

  <div className="text-muted-foreground mt-8 leading-relaxed text-lg space-y-6">

    <p>Dear Students,</p>

    <p><b>Welcome to RMK Engineering College!</b></p>

    <p>
      The transition from school to college is a very big step in life. You have
      put in so much hard work in your public exams, spent sleepless nights,
      earned a rewarding score, and with the suggestions of your parents or
      guardian, you have joined your chosen stream of education to realize your
      life-ambition and set the foundation for your future.
    </p>

    <p>
      By choosing to create a future for yourself from our institution means that
      we, the teachers and management at RMK, are also responsible for your
      successful graduation and growth. You will cherish every day at your
      college. Right from day one, your seniors, professors, and members of the
      administration will interact with you. The zealous environment will keep
      you charged to achieve your dream with confidence like never before.
      I assure you, you are at home.
    </p>

    <p>
      It is your career path that you have now embarked upon, which will be a
      remarkable journey in itself that will prepare you for a life beyond
      college. We hope to make your journey with us engaging, encouraging,
      and enlivening, enabling you to grow as a complete individual ready to
      take on life as an adult.
    </p>

    <p>
      We pray and will work with you to see you become one with society,
      where your contribution will make a definitive difference to our world.
    </p>

    <p>
      The commitment from us begins from day one – to work with you and walk
      with you each day throughout the years you spend here. It is your home
      away from home. The learned staff and ever-accessible management are
      here to guide you, nurture your dreams, and empower you to realize your
      true potential.
    </p>

    <p>
      Be it studies, sports, or extracurricular activities, you don’t just
      graduate with a degree and a certificate – you become a graduate of life
      and a true citizen of the world of tomorrow.
    </p>

    <p><b>Wish you all the very best.</b></p>

    <div className="pt-4">
      <p>Yours truly,</p>
      <p><b>Thiru. R. S. Munirathinam</b></p>
      <p>Chairman, RMK Engineering College</p>
    </div>

      </div>
    </div>
    <div className="mt-24">
  <SectionHeader
    title="Management Committee"
    subtitle="Leadership & Governance"
  />

  <div className="mt-16 space-y-20">

    {/* Chairperson */}
    <div className="grid md:grid-cols-2 gap-10 items-center">

  <div className="w-full flex justify-center">
    <img
      src={manju}
      alt="Tmt. Manjula Munirathinam"
      className="w-full max-w-md rounded-2xl shadow-xl object-contain"
    />
  </div>

  <div>
    <h2 className="text-3xl font-bold">
      Tmt. Manjula Munirathinam, Chairperson
    </h2>

    <hr className="my-4 border-gray-300" />

    <p className="text-muted-foreground leading-relaxed text-lg">
      A keen social worker involved with various women forums.
      She has been in the educational field for more than a decade.
    </p>
  </div>

</div>

    <hr className="border-gray-300" />

    {/* Director */}
    <div className="grid md:grid-cols-2 gap-10 items-center">

  <div className="flex justify-center">
    <img
      src={jothi}
      alt="Thiru. R. Jothi Naidu"
      className="w-full max-w-md rounded-2xl shadow-xl object-contain"
    />
  </div>

  <div>
    <h2 className="text-3xl font-bold">
      Thiru. R. Jothi Naidu, Director
    </h2>

    <hr className="my-4 border-gray-300" />

    <p className="text-muted-foreground leading-relaxed text-lg">
      An industrialist with vast experience in various business lines.
      He has been associated with the Management of R.M.K. Group of Institutions
      for the past 29 years.
    </p>
  </div>

</div>

    <hr className="border-gray-300" />

    {/* Vice Chairman */}
    <div className="grid md:grid-cols-2 gap-10 items-center">

  <div className="flex justify-center">
    <img
      src={kishore}
      alt="Thiru. R.M. Kishore"
      className="w-full max-w-md rounded-2xl shadow-xl object-contain"
    />
  </div>

  <div>
    <h2 className="text-3xl font-bold">
      Thiru. R.M. Kishore, Vice Chairman
    </h2>

    <hr className="my-4 border-gray-300" />

    <p className="text-muted-foreground leading-relaxed text-lg">
      Mechanical Engineer from University of Madras with MBA from
      University of Huddersfield, UK. Served as Syndicate Member in
      Anna University and Chairman of Education & Skill Expert Committee.
    </p>
  </div>

</div>

    <hr className="border-gray-300" />

    {/* Secretary */}
    <div className="grid md:grid-cols-2 gap-10 items-center">

  <div className="flex justify-center">
    <img
      src={pradeep}
      alt="Thiru. Yalamanchi Pradeep"
      className="w-full max-w-md rounded-2xl shadow-xl object-contain"
    />
  </div>

  <div>
    <h2 className="text-3xl font-bold">
      Thiru. Yalamanchi Pradeep, Secretary
    </h2>

    <hr className="my-4 border-gray-300" />

    <p className="text-muted-foreground leading-relaxed text-lg">
      Electronics & Communication Engineer from Anna University.
      Master’s in Information Systems from Carnegie Mellon University, USA.
      Founder & Managing Director of Kranium Healthcare Systems Pvt Ltd.
    </p>
  </div>

</div>

    <hr className="border-gray-300" />

    {/* Vice Chairperson */}
    <div className="grid md:grid-cols-2 gap-10 items-center">

  <div className="flex justify-center">
    <img
      src={durga}
      alt="Dr. Durga Devi Pradeep"
      className="w-full max-w-md rounded-2xl shadow-xl object-contain"
    />
  </div>

  <div>
    <h2 className="text-3xl font-bold">
      Dr. Durga Devi Pradeep, Vice Chairperson
    </h2>

    <hr className="my-4 border-gray-300" />

    <p className="text-muted-foreground leading-relaxed text-lg">
      Bachelor’s Degree in Electronics and Communication Engineering
      from University of Madras. MBA and Ph.D. in Management from Anna University.
    </p>
  </div>

</div>

    <hr className="border-gray-300" />

    {/* Trustee */}
    <div className="grid md:grid-cols-2 gap-10 items-center">

  <div className="flex justify-center">
    <img
      src={sowmya}
      alt="Tmt. Sowmya Kishore"
      className="w-full max-w-md rounded-2xl shadow-xl object-contain"
    />
  </div>

  <div>
    <h2 className="text-3xl font-bold">
      Tmt. Sowmya Kishore, Trustee
    </h2>

    <hr className="my-4 border-gray-300" />

    <p className="text-muted-foreground leading-relaxed text-lg">
      Bachelor’s Degree in Electronics and Communication Engineering
      from Sathyabama University. Master’s in Psychology and Counselling.
      Currently pursuing Ph.D. in Psychology.
    </p>
  </div>

</div>

  </div>
</div>

      </div>
    </div>
  )
}
