import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalender";
import EventCalendar from "@/components/EventCalendar";

const StudentPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold text-verde-100">Horario (4A)</h1>
          <BigCalendar/>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <div className="bg-white p-4 rounded-md">
        <h1 className="text-xl font-semibold">
          Atajos
        </h1>
          <div className="mt-4flox gap-4 flex-wrap text-xs text-verde">
          </div>
        </div>
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default StudentPage;
