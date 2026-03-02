import ReusableCard from "@/components/ReusableBlock";
import clubs from "@/data/Clubs";


export default function ClubActivities() {
    return (
        <div className="flex flex-col py-24 px-4 sm:px-8 lg:px-16 mx-auto max-w-7xl">
            {clubs.map(
                (club: any, id: number) => <ReusableCard
                    key={id}
                    isLeftAlign={club.isLeftAlign}
                    heading={club.heading}
                    content={club.content}
                    haveLogo={club.haveLogo}
                    imgSrc={club.imgSrc}
                    altText={club.altText}
                />
            )}
        </div>
    )
}
