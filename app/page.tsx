import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import events, { Event } from "@/lib/contants";

function Page() {
  return (
    <section>
      <h1 className="text-center">
        The Hub for Every Day Event You Can't Miss!!
      </h1>
      <p className="mt-4 text-center">
        Hackathons, Meetups, and Conferences, All In One Place
      </p>
      <ExploreBtn />
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {events.map((event: Event) => (
            <li className="list-none" key={event.title}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default Page;
