import { useState } from "react"
import { SectionHeader } from "@/components/SectionHeader"
import { Card } from "@/components/ui/card"

import chief from "@/assets/cheif.png"
import manjula from "@/assets/manjula.png"
import jothi from "@/assets/jothi.png"
import kishore from "@/assets/kishore.png"
import junaid from "@/assets/junaid.png"
import elwin from "@/assets/elwin.png"
import yalamanchi from "@/assets/yalamanchi.png"
import durgadevi from "@/assets/durgadevi.png"
import sowmya from "@/assets/sowmya.png" 
import palani from "@/assets/palani.png"
import pitchandi from "@/assets/pitchandi.png"
import mono from "@/assets/monoharan.png"
import pavai from "@/assets/pavai.png"
import siva from "@/assets/siva.png"
import mani from "@/assets/mani.png"

import sethukarasi from "@/assets/sethu.png"
import paulraj from "@/assets/paulraj.png"
import neelakandan from "@/assets/neelakandan.png"

import jaison from "@/assets/jaison.png"
import geetha from "@/assets/geetha.png"
import selvi from "@/assets/selvi.png"

import thilagavathy from "@/assets/thilaga.png"
import kavitha from "@/assets/kavitha.png"
import arthanareswaran from "@/assets/arthana.png"
import lalitha from "@/assets/lalitha.png"
import manikannan from "@/assets/manikandan.png"
import naveen from "@/assets/naveen.png"
import vijay from "@/assets/vijay.png"
import therasa from "@/assets/thera.png"
import lakshmi from "@/assets/haritha.png"
import geethaR from "@/assets/geetha.png"
import vasuki from "@/assets/vasuki.png"
import chithambaramani from "@/assets/chithambaram.png"

import mohanaprakash from "@/assets/mohan.png"
import johnberkmans from "@/assets/johnbk.png"
import jasmine from "@/assets/jasmin.png"
import prabhu from "@/assets/prabu.png"
import banupriya from "@/assets/banu.png"
import kirubakaran from "@/assets/kiruba.png"
import babyshamini from "@/assets/baby.png"
import maheswari from "@/assets/mahesh.png"
import thiyagarajan from "@/assets/thiyag.png"
import annal from "@/assets/annal.png"
import vijayabharathi from "@/assets/vijaybh.png"
import sumitha from "@/assets/sumitha.png"
import ilampiray from "@/assets/ilam.png"
import sajithra from "@/assets/saji.png"
import velmurugesh from "@/assets/vel.png"

import bharathi from "@/assets/bharathi.png"
import rohini from "@/assets/rohini.png"
import nandhini from "@/assets/nandhini.png"
import gayathri from "@/assets/gayathiri.png"
import deepa from "@/assets/deepa.png"
import haritha from "@/assets/harithav.png"
import kanimozhi from "@/assets/kani.png"
import vengateshwaran from "@/assets/venga.png"
import soniya from "@/assets/soniya.png"
import latha from "@/assets/latha.png"
import jayalakshmi from "@/assets/jaya.png"
import ramya from "@/assets/ramya.png"
import gangadevi from "@/assets/ganga.png"
import mangalapriya from "@/assets/mangala.png"
import ramesh from "@/assets/ramesh.png"
import karthikeyan from "@/assets/karthi.png"
import sindhuja from "@/assets/sindhu.png"

const members = [
  {
    name: "Thiru. R.S. Munirathinam",
    role: "Chief Patron",
    img: chief,
    intro: "Founder & Chairman of RMK Group of Institutions"
  },
  {
    name: "Smt. Manjula Munirathinam",
    role: "Patron",
    img: manjula,
    intro: "Chairperson - RMK Group of Institutions"
  },
  {
    name: "Shri. R. Jothi Naidu",
    role: "Patron",
    img: jothi,
    intro: "Director - RMK Group of Institutions"
  },
  {
    name: "Shri. R.M. Kishore",
    role: "Patron",
    img: kishore,
    intro: "Vice-Chairman - RMK Group of Institutions"
  },
  {
    name: "Shri. Yalamanchi Pradeep",
    role: "Patron",
    img: yalamanchi,
    intro: "Secretary - RMK Group of Institutions"
  },
  {
    name: "Dr. Durgadevi Pradeep",
    role: "Patron",
    img: durgadevi,
    intro: "Vice-Chairperson - RMK Group of Institutions"
  },
  {
    name: "Smt. Sowmya Kishore",
    role: "Patron",
    img: sowmya,
    intro: "Management Trustee - RMK Group of Institutions"
  },
  {
    name: "Dr. M. S. Palanichamy",
    role: "Advisor",
    img: palani,
    intro: "RMK Group of Institutions"
  },
  {
    name: "Shri. T. Pitchandi I.A.S",
    role: "Advisor",
    img: pitchandi,
    intro: "RMK Group of Institutions"
  },
  {
    name: "Shri. V. Manoharan",
    role: "Advisor",
    img: mono,
    intro: "RMK Group of Institutions"
  },
  {
    name: "Dr. K. A. Mohamed Junaid",
    role: "Principal",
    img: junaid,
    intro: "RMK Engineering College"
  },
  {
    name: "Dr. Elwin Chandra Monie",
    role: "Dean - Research",
    img: elwin,
    intro: "RMK Group of Institutions"
  },
 
  {
    name: "Dr. K. K. Sivagnana Prabhu",
    role: "Dean - CDC",
    img: siva,
    intro: "RMK Group of Institutions"
  },
  {
    name: "Dr. K. Manivannan",
    role: "Dean - EA",
    img: mani,
    intro: "RMK Group of Institutions"
  },
   {
    name: "Dr. S. Pavai Madheshwari",
    role: "Dean - Academics",
    img: pavai,
    intro: "RMK Engineering Colege"
  },
  
  
]
const coreCommittee = [
  {
    title: "Convener",
    name: "Dr. K.A. Mohamed Junaid",
    role: "Principal",
    img: junaid
  },
  {
    title: "General Chair",
    name: "Dr. T. Sethukarasi",
    role: "HoD / CSE",
    img: sethukarasi
  },
  {
    title: "Conference Chair",
    name: "Dr. D. Paulraj",
    role: "Professor / CSE",
    img: paulraj
  },
  {
    title: "Conference Chair",
    name: "Dr. S. Neelakandan",
    role: "Professor / CSE",
    img: neelakandan
  }
]
const organisingCommittee = [
 

{
  name: "Dr. Selvi S",
  degree: "M.E., Ph.D.",
  role: "Professor",
  img: selvi
},
  {
    name: "Dr. Jaison B",
    degree: "M.E., Ph.D.",
    role: "Professor",
    img: jaison
  },
  {
    name: "Dr. Geetha C",
    degree: "M.E., Ph.D.",
    role: "Professor",
    img: geetha
  },
  {
  name: "Dr. Thilagavathy A",
  degree: "M.E., Ph.D.",
  role: "Associate Professor (Gr II)",
  img: thilagavathy
},
{
  name: "Dr. Kavitha P",
  degree: "M.E., Ph.D.",
  role: "Associate Professor (Gr II)",
  img: kavitha
},
{
  name: "Dr. Arthanareswaran A",
  degree: "M.E., Ph.D.",
  role: "Associate Professor (Gr II)",
  img: arthanareswaran
},
{
  name: "Dr. Lalitha S D",
  degree: "M.Tech., Ph.D.",
  role: "Associate Professor (Gr II)",
  img: lalitha
},
{
  name: "Dr. Manikannan K",
  degree: "M.E., Ph.D.",
  role: "Associate Professor (Gr II)",
  img: manikannan
},
{
  name: "Dr. Naveen Raju D",
  degree: "M.Tech., Ph.D.",
  role: "Associate Professor (Gr II)",
  img: naveen
},
{
  name: "Mr. Vijaya Kumar S",
  degree: "M.E., (Ph.D.)",
  role: "Associate Professor (Gr II)",
  img: vijay
},
{
  name: "Dr. Therasa P R",
  degree: "M.E., Ph.D.",
  role: "Associate Professor (Gr II)",
  img: therasa
},
{
  name: "Dr. Lakshmi Haritha M",
  degree: "M.E., Ph.D.",
  role: "Associate Professor (Gr II)",
  img: lakshmi
},
{
  name: "Dr. Geetha R",
  degree: "M.E., Ph.D.",
  role: "Associate Professor",
  img: geethaR
},
{
  name: "Dr. Vasukidevi G",
  degree: "M.C.A., M.E., Ph.D.",
  role: "Associate Professor (Gr II)",
  img: vasuki
},
{
  name: "Dr. Chithambaramani R",
  degree: "M.E., Ph.D.",
  role: "Associate Professor (Gr II)",
  img: chithambaramani
},
{
  name: "Dr. Mohanaprakash T A",
  degree: "M.Tech., Ph.D.",
  role: "Associate Professor (Gr II)",
  img: mohanaprakash
},
{
  name: "Mr. John Berkmans T",
  degree: "M.Tech., (Ph.D.)",
  role: "Associate Professor",
  img: johnberkmans
},
{
  name: "Ms. Jasmine Gilda A",
  degree: "M.E., (Ph.D.)",
  role: "Associate Professor (Gr I)",
  img: jasmine
},
{
  name: "Mr. Prabhu V",
  degree: "M.E., (Ph.D.)",
  role: "Associate Professor (Gr I)",
  img: prabhu
},
{
  name: "Ms. Banupriya N",
  degree: "M.E., (Ph.D.)",
  role: "Assistant Professor",
  img: banupriya
},
{
  name: "Mr. Kirubakaran D",
  degree: "M.C.A., M.E.",
  role: "Assistant Professor (Gr II)",
  img: kirubakaran
},
{
  name: "Ms. Baby Shamini P",
  degree: "M.E., (Ph.D.)",
  role: "Assistant Professor (Gr II)",
  img: babyshamini
},
{
  name: "Ms. Maheswari B",
  degree: "M.E., (Ph.D.)",
  role: "Asst. Professor (Gr II)",
  img: maheswari
},
{
  name: "Mr. Thiyagarajan M",
  degree: "B.E., M.Tech., (Ph.D.)",
  role: "Asst. Professor (Gr II)",
  img: thiyagarajan
},
{
  name: "Ms. Annal Priyadarshini D",
  degree: "M.E.",
  role: "Asst. Professor (Gr II)",
  img: annal
},
{
  name: "Mr. Vijayabharathi R",
  degree: "M.E.",
  role: "Asst. Professor (Gr II)",
  img: vijayabharathi
},
{
  name: "Ms. Sumitha T",
  degree: "M.E., (Ph.D.)",
  role: "Assistant Professor",
  img: sumitha
},
{
  name: "Ms. Ilampiray P",
  degree: "M.E., (Ph.D.)",
  role: "Assistant Professor",
  img: ilampiray
},
{
  name: "Ms. Sajithra S",
  degree: "M.E., (Ph.D.)",
  role: "Assistant Professor",
  img: sajithra
},
{
  name: "Mr. Vel Murugesh Kumar N",
  degree: "M.E., (Ph.D.)",
  role: "Assistant Professor",
  img: velmurugesh
},
{
  name: "Ms. Bharathi B",
  degree: "M.E., (Ph.D.)",
  role: "Assistant Professor",
  img: bharathi
},
{
  name: "Ms. Rohini S",
  degree: "M.E., (Ph.D.)",
  role: "Assistant Professor",
  img: rohini
},
{
  name: "Ms. Nandhini P S",
  degree: "M.E.",
  role: "Asst. Professor",
  img: nandhini
},
{
  name: "Ms. Gayathri S",
  degree: "M.E., (Ph.D.)",
  role: "Assistant Professor",
  img: gayathri
},
{
  name: "Ms. Deepa R",
  degree: "M.Tech., (Ph.D.)",
  role: "Assistant Professor",
  img: deepa
},
{
  name: "Ms. Haritha V",
  degree: "M.E.",
  role: "Assistant Professor",
  img: haritha
},
{
  name: "Ms. Kanimozhi S",
  degree: "M.E.",
  role: "Assistant Professor",
  img: kanimozhi
},
{
  name: "Mr. Vengateshwaran M",
  degree: "M.E., (Ph.D.)",
  role: "Assistant Professor",
  img: vengateshwaran
},
{
  name: "Ms. M. Soniya",
  degree: "M.Tech., (Ph.D.)",
  role: "Assistant Professor",
  img: soniya
},
{
  name: "Ms. Latha J",
  degree: "M.E., (Ph.D.)",
  role: "Assistant Professor",
  img: latha
},
{
  name: "Ms. Jayalakshmi K",
  degree: "B.E., M.E.",
  role: "Assistant Professor",
  img: jayalakshmi
},
{
  name: "Ms. Ramya P",
  degree: "M.E.",
  role: "Asst. Professor",
  img: ramya
},
{
  name: "Ms. Ganga Devi P",
  degree: "B.E., M.Tech.",
  role: "Asst. Professor",
  img: gangadevi
},
{
  name: "Ms. Mangala Priya S",
  degree: "B.Tech., M.E., (Ph.D.)",
  role: "Asst. Professor",
  img: mangalapriya
},
{
  name: "Dr. Ramesh T",
  degree: "M.E., Ph.D.",
  role: "Associate Professor (Gr II)",
  img: ramesh
},
{
  name: "Mr. Karthikeyan M P",
  degree: "M.Tech., (Ph.D.)",
  role: "Associate Professor (Gr I)",
  img: karthikeyan
},
{
  name: "Ms. Sindhuja K",
  degree: "M.E., (Ph.D.)",
  role: "Assistant Professor",
  img: sindhuja
}





]



const roles = ["All", "Chief Patron", "Patron", "Advisor"]

export default function Committees() {
  const [filter, setFilter] = useState("All")

  const filtered =
    filter === "All" ? members : members.filter(m => m.role === filter)

  const MemberCard = ({ member }: any) => (
    <Card className="p-6 text-center rounded-2xl hover:shadow-xl transition">
      <div className="flex justify-center mb-4">
        <img
          src={member.img}
          alt={member.name}
          className="w-40 h-40 rounded-full object-cover"
        />
      </div>

      <h3 className="font-bold text-lg text-primary">{member.name}</h3>
      <p className="text-sm font-medium text-gray-600">{member.role}</p>
      <p className="text-sm text-muted-foreground mt-2">{member.intro}</p>
    </Card>
  )

  return (
    <div className="bg-slate-50 pt-24 pb-20">

      <section className="container mx-auto px-6">

        <SectionHeader
          title="Committee Members"
          subtitle="Leadership & Advisory Team"
        />

        {/* 🔥 FILTER BAR FIRST */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {roles.map(r => (
            <button
              key={r}
              onClick={() => setFilter(r)}
              className={`px-6 py-2 rounded-full border font-medium transition ${
                filter === r
                  ? "bg-primary text-white"
                  : "bg-white hover:bg-slate-100"
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        {/* 🔥 MEMBERS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(m => (
            <MemberCard key={m.name} member={m} />
          ))}
        </div>
        {/* ================= CORE COMMITTEE ================= */}
<section className="mt-32">

  <SectionHeader
    title="Committee Members"
    subtitle="Convener & Chairs"
  />

  {/* Convener */}
  <div className="mb-24 text-center">
    <h2 className="text-4xl font-extrabold text-primary mb-3">
      Convener
    </h2>
    <div className="w-24 h-1 bg-primary mx-auto mb-10 rounded-full"></div>

    <Card className="max-w-4xl mx-auto bg-gray-100 rounded-3xl shadow-lg p-12 hover:shadow-2xl transition duration-300">
      <img
        src={junaid}
        alt="Dr. K.A. Mohamed Junaid"
        className="w-48 h-48 mx-auto rounded-full object-cover mb-6 border-4 border-primary/20"
      />
      <h3 className="font-bold text-2xl">
        Dr. K.A. Mohamed Junaid
      </h3>
      <p className="text-base text-gray-600 mt-2">
        Principal - RMK Engineering College
      </p>
    </Card>
  </div>


  {/* General Chair */}
  <div className="mb-24 text-center">
  <h2 className="text-4xl font-extrabold text-primary mb-3">
    General Chair
  </h2>
  <div className="w-24 h-1 bg-primary mx-auto mb-10 rounded-full"></div>

  <Card className="max-w-4xl mx-auto bg-gray-100 rounded-3xl shadow-lg p-12 hover:shadow-2xl transition duration-300">
    <img
      src={sethukarasi}
      alt="Dr. T. Sethukarasi"
      className="w-64 h-64 mx-auto rounded-full object-cover object-top mb-6 border-4 border-primary/20"
    />
    <h3 className="font-bold text-2xl">
      Dr. T. Sethukarasi
    </h3>
    <p className="text-base text-gray-600 mt-2">
      HOD / CSE
      <br/>
      R.M.K Engineering College
    </p>
  </Card>
</div>


  {/* Conference Chair */}
<div className="text-center mb-28">
  <h2 className="text-4xl font-extrabold text-primary mb-3">
    Conference Chair
  </h2>
  <div className="w-24 h-1 bg-primary mx-auto mb-16 rounded-full"></div>

  <div className="flex flex-col md:flex-row justify-center items-center gap-16">
    
    <div className="w-full md:w-[500px] bg-gray-100 p-12 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300">
      <img
        src={paulraj}
        alt="Dr. D. Paulraj"
        className="w-56 h-56 mx-auto rounded-full object-cover mb-8"
      />
      <h3 className="font-bold text-3xl text-blue-700">
        Dr. D. Paulraj
        
      </h3>
      <p className="text-lg text-gray-700 mt-3">
        Professor / CSE
        <br/>
        R.M.K Engineering College
      </p>
    </div>

    <div className="w-full md:w-[500px] bg-gray-100 p-12 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300">
      <img
        src={neelakandan}
        alt="Dr. S. Neelakandan"
        className="w-56 h-56 mx-auto rounded-full object-cover mb-8"
      />
      <h3 className="font-bold text-3xl text-blue-700">
        Dr. S. Neelakandan
      </h3>
      <p className="text-lg text-gray-700 mt-3">
        Professor / CSE
        <br/>
        R.M.K Engineering College
      </p>
    </div>

  </div>
</div>

</section>
{/* ================= ORGANISING COMMITTEE ================= */}

<section className="mt-24">
  <SectionHeader
    title="Organising Committee"
    subtitle="Conference Coordinators"
  />

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
    {organisingCommittee.map(member => (
      <Card
        key={member.name}
        className="bg-slate-800 text-white p-8 text-center rounded-2xl"
      >
        <img
          src={member.img}
          alt={member.name}
          className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-white mb-6"
        />

        <h3 className="text-xl font-bold">{member.name}</h3>
        <p className="text-sm opacity-80">{member.degree}</p>
        <p className="mt-2 text-base">{member.role}</p>
      </Card>
    ))}
  </div>
</section>

        {/* ================= INTERNATIONAL & NATIONAL COMMITTEES ================= */}
<section className="mt-24 bg-white rounded-3xl shadow-lg p-10">

  <SectionHeader
    title="International & National Committee Members"
    subtitle="Expert Panel and Academic Advisors"
  />

  <div className="grid md:grid-cols-2 gap-12">

    {/* ===== International ===== */}
    <div>
      <h3 className="text-xl font-bold text-primary mb-6">
        International Committee Members
      </h3>

      <ul className="space-y-4 text-sm text-gray-700">
        <li><b>Dr. Naresh Chand</b> — Life Fellow IEEE, Associate Vice President, Chapter Relations, IEEE Photonics Society, USA</li>
        <li><b>Dr. San Murugesan</b> — Director, BRITE Professional Services, Adjunct Professor, Western Sydney University, Australia</li>
        <li><b>Dr. Ahmad Asari Sulaiman</b> — Professor, Universiti Teknologi MARA (UiTM), Malaysia</li>
        <li><b>Dr. Celestine Iwendi</b> — Fellow Higher Education Academy, UK</li>
        <li><b>Dr. Krishnadas Nanath</b> — Associate Professor in Data Science, Middlesex University, Dubai</li>
        <li><b>Dr. Ashish Seth</b> — Professor, INHA University, South Korea</li>
        <li><b>Dr. Mohammad T. Khasawneh</b> — Professor, Systems Science & Industrial Engineering, USA</li>
        <li><b>Dr. Yong Wang</b> — Assistant Professor, Thomas J. Watson College, USA</li>
      </ul>
    </div>

    {/* ===== National ===== */}
    <div>
      <h3 className="text-xl font-bold text-primary mb-6">
        National Committee Members
      </h3>

      <ul className="space-y-4 text-sm text-gray-700">
        <li><b>Dr. P. Sakthivel</b> — Chairman, IEEE Madras Section</li>
        <li><b>Dr. S. Radha</b> — Secretary, IEEE Madras Section</li>
        <li><b>Dr. S. Brindha</b> — Treasurer, IEEE Madras Section</li>
        <li><b>Dr. V. Nagarajan</b> — Conference Committee Member</li>
        <li><b>Dr. N. Venkateswaran</b> — Professor, Dept. of ECE, Chennai</li>
        <li><b>Dr. S. Raghavan</b> — Professor (HAG), NIT Trichy</li>
        <li><b>Dr. Surajith Debnath</b> — HoD, Women's Polytechnic, Tripura</li>
        <li><b>Dr. D. Sriram Kumar</b> — Professor, Dept. of ECE, NIT Trichy</li>
        <li><b>Dr. Srinivas Talabattula</b> — Associate Professor, IISc Bangalore</li>
        <li><b>Dr. Hrishikesh Venkataraman</b> — Associate Professor, IIIT Sri City</li>
        <li><b>Dr. M.D. Selvaraj</b> — Associate Professor, IIITDM Kancheepuram</li>
        <li><b>Dr. J. Klutto Milleth</b> — Chief Technologist, CEWIT Chennai</li>
      </ul>
    </div>

  </div>
</section>


      </section>
    </div>
  )
}
