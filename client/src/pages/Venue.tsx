import { useEffect, useState } from "react"
import { SectionHeader } from "@/components/SectionHeader"
import { Card } from "@/components/ui/card"

import rmk1 from "@/assets/rmk1.png"


import marina from "@/assets/marina.png"
import temple from "@/assets/kapaleeshwarar.png"
import mahabalipuram from "@/assets/Mahabalipuram.png"
import fort from "@/assets/fortstgeorge.png"

import v2 from "@/assets/v2.png"
import v3 from "@/assets/v3.png"

import museum from "@/assets/meu.png"
export default function Venue() {

  /* ================= AUTO IMAGE SLIDER ================= */
const campusImages = [rmk1, v2, v3]
const [slideIndex, setSlideIndex] = useState(0)

useEffect(() => {
  const timer = setInterval(() => {
    setSlideIndex((prev) => (prev + 1) % campusImages.length)
  }, 3000)
  return () => clearInterval(timer)
}, [])



  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">

      <div className="container mx-auto px-6 space-y-20">

        {/* ================================================= */}
        {/* ================= RMK COLLEGE =================== */}
        {/* ================================================= */}

        <SectionHeader
          title="Venue"
          subtitle="R.M.K. Engineering College, Chennai"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p>
              R.M.K. Engineering College, established in 1995, is one of the
              premier institutions affiliated to Anna University, Chennai.
              Accredited by NAAC with A+ Grade and NBA, the college is known for
              excellence in academics, placements, and research innovation.
            </p>

            <p>
              The campus provides world-class infrastructure including modern
              laboratories, smart classrooms, hostels, sports facilities and
              industry collaborations. It is located near NH-16 and easily
              accessible from all parts of Chennai.
            </p>

            <p>
              The conference RMKMATE 2026 will be hosted in this vibrant
              academic environment, providing an ideal setting for research,
              networking and innovation.
            </p>
          </div>

          {/* Auto Slider */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[420px]">

              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[420px]">

              <div
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{ transform: `translateX(-${slideIndex * 100}%)` }}
              >
                {campusImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    className="w-full h-full object-cover flex-shrink-0"
                  />
                ))}
              </div>

              {/* Left Arrow */}
              <button
                onClick={() =>
                  setSlideIndex(
                    slideIndex === 0 ? campusImages.length - 1 : slideIndex - 1
                  )
                }
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black transition"
              >
                ❮
              </button>

              {/* Right Arrow */}
              <button
                onClick={() =>
                  setSlideIndex((slideIndex + 1) % campusImages.length)
                }
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black transition"
              >
                ❯
              </button>

            </div>


</div>


        </div>
        {/* ================================================= */}
{/* ============== HOW TO REACH RMKEC =============== */}
{/* ================================================= */}

<div className="bg-white p-10 rounded-3xl shadow-xl">

  <h2 className="text-3xl font-bold text-primary mb-8">
    How to Reach R.M.K. Engineering College
  </h2>

  <div className="space-y-10 text-lg text-muted-foreground leading-relaxed">

    {/* By Road */}
    <div>
      <h3 className="text-2xl font-semibold text-slate-800 mb-3">
        🚗 By Road
      </h3>
      <p>
        R.M.K. Engineering College is located on NH-16 (Chennai–Kolkata Highway),
        near Kavaraipettai, approximately 35 km from Chennai city center.
      </p>
      <p className="mt-2">
        The campus is well connected by state-run and private buses from
        Koyambedu Bus Terminus (CMBT). Taxis, Ola, Uber and self-drive
        vehicles can directly reach the campus via the Chennai–Tirupati Highway.
      </p>
      <p className="mt-2">
        Parking facilities are available inside the campus for visitors.
      </p>
    </div>

    {/* By Train */}
    <div>
      <h3 className="text-2xl font-semibold text-slate-800 mb-3">
        🚆 By Train
      </h3>
      <p>
        The nearest railway station is <strong>Kavaraipettai Railway Station</strong>,
        located approximately 5 km from the campus.
      </p>
      <p className="mt-2">
        Suburban trains from Chennai Central and Chennai Beach frequently operate
        towards Gummidipoondi and Sullurupeta routes.
      </p>
      <p className="mt-2">
        From the station, auto-rickshaws and local taxis are easily available
        to reach the college within 10–15 minutes.
      </p>
    </div>

    {/* By Flight */}
    <div>
      <h3 className="text-2xl font-semibold text-slate-800 mb-3">
        ✈️ By Flight
      </h3>
      <p>
        The nearest airport is <strong>Chennai International Airport (MAA)</strong>,
        located about 45–50 km from the campus.
      </p>
      <p className="mt-2">
        The airport is well connected to major cities across India and
        international destinations.
      </p>
      <p className="mt-2">
        From the airport, taxis and app-based cab services are available.
        Travel time to the campus is approximately 1.5 hours depending on traffic.
      </p>
    </div>

  </div>

</div>

        {/* ================================================= */}
        {/* ============= HIGHLIGHTS OF CHENNAI ============== */}
        {/* ================================================= */}

        <div className="bg-primary text-white py-6 px-8 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold">Highlights of Chennai</h2>
        </div>


        {/* ===== Highlight 1 ===== */}
        <Highlight
          title="Marina Beach"
          img={marina}
          desc="The second longest urban beach in the world. A perfect place to enjoy sunrise, sea breeze and local street food."
        />

        {/* ===== Highlight 2 ===== */}
        <Highlight
          title="Kapaleeshwarar Temple"
          img={temple}
          reverse
          desc="A historic Dravidian temple dedicated to Lord Shiva. Known for its colorful gopuram and rich cultural heritage."
        />

        {/* ===== Highlight 3 ===== */}
        <Highlight
          title="Mahabalipuram"
          img={mahabalipuram}
          desc="UNESCO World Heritage Site famous for stone carvings, shore temples and ancient monuments."
        />

        {/* ===== Highlight 4 ===== */}
        <Highlight
          title="Fort St. George"
          img={fort}
          reverse
          desc="The first English fortress in India built in 1644. It now houses a museum and the Tamil Nadu Legislative Assembly."
        />

        {/* ===== Highlight 5 ===== */}
        <Highlight
          title="Government Museum, Egmore"
          img={museum}
          desc="Established in 1851, this is one of the oldest museums in India featuring archaeology, art, bronze galleries, and the famous Amaravati sculptures."
        />


      </div>
    </div>
  )
}


/* ================================================= */
/* ========= REUSABLE HIGHLIGHT COMPONENT =========== */
/* ================================================= */

function Highlight({ title, desc, img, reverse = false }: any) {
  return (
    <Card className="p-10 rounded-3xl shadow-xl border-0 bg-white">

      <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}>

        {!reverse && (
          <img
            src={img}
            className="rounded-2xl shadow-lg h-[350px] w-full object-cover"
          />
        )}

        <div>
          <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
          <p className="text-muted-foreground leading-relaxed text-lg">{desc}</p>
        </div>

        {reverse && (
          <img
            src={img}
            className="rounded-2xl shadow-lg h-[350px] w-full object-cover"
          />
        )}

      </div>

    </Card>
  )
}
