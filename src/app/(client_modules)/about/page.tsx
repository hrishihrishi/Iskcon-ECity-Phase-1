import type { Metadata } from "next";
import PageHeader from "@/shared/components/page-header";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About ISKCON | Srila Prabhupada & Our Mission",
  description:
    "Learn about ISKCON Electronic City's spiritual lineage, our Founder-Acharya His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, and our mission of spreading Bhakti Yoga and Vedic wisdom across Bengaluru.",
  alternates: {
    canonical: "https://iskcon-e-city-phase-1-two.vercel.app//about",
  },
  openGraph: { url: "https://iskcon-e-city-phase-1-two.vercel.app//about" },
};

const Founder = () => {
  return (
    <main className="min-h-screen bg-[#fff8ef] text-[#221b00]">
      <PageHeader className="relative h-[250px] md:h-[350px] bg-[#f7d2be]/40 border-b border-amber-900/10 flex items-center justify-center">
        <div className="relative w-full h-full max-w-4xl mx-auto p-4 flex items-center justify-center">
          <Image
            src={"/images/prabhupada_smiling.svg"}
            fill={true}
            alt="Srila Prabhupada — Founder-Acharya of ISKCON Electronic City Bengaluru"
            className="object-contain drop-shadow-md"
            priority
          />
        </div>
      </PageHeader>

      <article className="max-w-4xl mx-auto px-5 md:px-8 py-12 md:py-16 space-y-8 font-sans">
        {/* Section Header */}
        <div className="border-b border-amber-900/10 pb-6">
          <span className="text-[#745849] font-bold text-xs uppercase tracking-widest block mb-2">
            Founder-Acharya
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#221b00]">
            His Divine Grace A.C. Bhaktivedanta Swami Prabhupada
          </h1>
        </div>

        {/* Content Paragraphs */}
        <div className="space-y-6 text-[#4f453f] text-base md:text-lg leading-relaxed font-body">
          <p>{`Born in 1896 in Calcutta, India, His Divine Grace A.C. Bhaktivedanta Swami Prabhupada had a transformative encounter with his spiritual mentor, Srila Bhaktisiddhanta Sarasvati Gosvami, in Calcutta in 1922. Srila Bhaktisiddhanta Sarasvati, a revered religious scholar and the founder of sixty-four Gaudiya Mathas (Vedic institutes), recognized the potential in this educated young man and persuaded him to devote his life to imparting Vedic knowledge. Srila Prabhupada formally became his disciple in 1933.`}</p>

          <p>
            {`During their initial meeting, Srila Bhaktisiddhanta Sarasvati urged Srila Prabhupada to disseminate Vedic wisdom in English. In the ensuing years, Srila Prabhupada wrote a commentary on the Bhagavad-gita, supported the Gaudiya Matha's endeavors, and, in 1944, initiated the publication of Back to Godhead, an English bi-weekly magazine. Operating single-handedly, Srila Prabhupada handled editing, manuscript typing, galley proof checks, and distribution. His disciples in the West now continue the magazine.`}
          </p>

          <p>{`In 1950, Srila Prabhupada embraced the vanaprastha (retired) order, withdrawing from married life to dedicate more time to study and writing. He relocated to the holy city of Vrndavana, residing in the historic temple of Radha-Damodara, where he immersed himself in profound study and writing. Taking sannyasa (renounced order of life) in 1959, Srila Prabhupada embarked on his magnum opus: a multivolume commentated translation of the eighteen-thousand-verse Srimad-Bhagavatam (Bhagavata Purana). Additionally, he authored "Easy Journey to Other Planets."`}</p>

          <p>
            {`After publishing three volumes of the Bhagavatam, Srila Prabhupada ventured to the United States in September 1965 to fulfill his spiritual master's mission. By November 14, 1977, when he passed away, he had overseen the growth of the International Society for Krishna Consciousness (ISKCON) into a global confederation with over one hundred asramas, schools, temples, institutes, and farm communities.`}
          </p>

          <p>
            {`In 1972, Srila Prabhupada pioneered the introduction of the Vedic education system in the West, establishing the gurukula school in Dallas, Texas. His disciples subsequently founded similar schools worldwide.`}
          </p>

          <p>{`Srila Prabhupada's influence extended to the construction of large international cultural centers in India, notably at Sridhama Mayapur and Vrndavana. These centers serve as spiritual hubs and educational institutions. Additionally, he inaugurated the Krishna Balaram Mandir in Sri Vrindavana Dhama in 1975.`}</p>

          <p>{`However, Srila Prabhupada's most enduring legacy lies in his written works, highly esteemed for their authority, depth, and clarity. Translated into over fifty languages, his writings serve as textbooks in numerous college courses. The Bhaktivedanta Book Trust, established in 1972, has become the world's largest publisher of books in Indian religion and philosophy, preserving Srila Prabhupada's teachings.`}</p>

          <p>{`Despite his advanced age, Srila Prabhupada circled the globe fourteen times in just twelve years on extensive lecture tours across six continents. He continued prolific writing throughout this period, creating a comprehensive library of Vedic philosophy, religion, literature, and culture.`}</p>

          <p>
            {`Srila Prabhupada spent several significant years in Vrindavan before embarking on his mission to America, unveiling the splendor of Vrindavan-dham to the world through his travels and preaching.`}
          </p>
        </div>

        {/* Chronology Card */}
        <div className="bg-white rounded-2xl p-6 md:p-10 border border-amber-900/10 shadow-sm space-y-6 mt-10">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#e8621a]"></span>
            <h2 className="text-xl md:text-2xl font-serif font-bold text-[#221b00]">
              Srila Prabhupada Chronology
            </h2>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#4f453f] text-sm md:text-base">
            <li className="bg-[#fff3d2]/50 p-3.5 rounded-lg border border-amber-900/5">
              <strong className="text-[#221b00]">1954:</strong> Left family,
              entered vanaprastha
            </li>
            <li className="bg-[#fff3d2]/50 p-3.5 rounded-lg border border-amber-900/5">
              <strong className="text-[#221b00]">1956:</strong> Resided in
              Vrindavan, Vamsi Gopal temple
            </li>
            <li className="bg-[#fff3d2]/50 p-3.5 rounded-lg border border-amber-900/5">
              <strong className="text-[#221b00]">1959:</strong> Began
              translating Srimad Bhagavatam in Delhi
            </li>
            <li className="bg-[#fff3d2]/50 p-3.5 rounded-lg border border-amber-900/5">
              <strong className="text-[#221b00]">July 1959:</strong> Moved
              upstairs to Radha-Damodara temple
            </li>
            <li className="bg-[#fff3d2]/50 p-3.5 rounded-lg border border-amber-900/5">
              <strong className="text-[#221b00]">Sept. 17, 1959:</strong> Took
              sannyasa, renounced order of life
            </li>
            <li className="bg-[#fff3d2]/50 p-3.5 rounded-lg border border-amber-900/5">
              <strong className="text-[#221b00]">1960 Fall:</strong> Published
              Easy Journey to Other Planets
            </li>
            <li className="bg-[#fff3d2]/50 p-3.5 rounded-lg border border-amber-900/5">
              <strong className="text-[#221b00]">1962 July:</strong> Moved to
              downstairs rooms at Radha-Damodara
            </li>
            <li className="bg-[#fff3d2]/50 p-3.5 rounded-lg border border-amber-900/5">
              <strong className="text-[#221b00]">1962-1964:</strong> Published
              Volumes 1-3 Srimad Bhagavatam
            </li>
            <li className="bg-[#fff3d2]/50 p-3.5 rounded-lg border border-amber-900/5">
              <strong className="text-[#221b00]">1965 Aug 13:</strong> Departed
              Calcutta on Jaladuta for America
            </li>
            <li className="bg-[#fff3d2]/50 p-3.5 rounded-lg border border-amber-900/5">
              <strong className="text-[#221b00]">1967-1972:</strong> Returned to
              Radha-Damodara, delivered lectures
            </li>
            <li className="bg-[#fff3d2]/50 p-3.5 rounded-lg border border-amber-900/5 col-span-1 md:col-span-2">
              <strong className="text-[#221b00]">1977:</strong> Entered eternal
              lila of Radha &amp; Krishna in Goloka Vrindavan
            </li>
          </ul>

          <p className="text-xs text-[#745849] italic text-right pt-2">
            (from: Mahanidhi Swami: Prabhupada in Radha-Damodara, BBT 2003)
          </p>
        </div>
      </article>
    </main>
  );
};

export default Founder;
