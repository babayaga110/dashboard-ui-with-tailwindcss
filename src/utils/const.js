import {
    ChevronDownIcon,
    HomeIcon,
    TicketIcon,
    Cog6ToothIcon,
    Square2StackIcon,
    QuestionMarkCircleIcon,
    SparklesIcon,
    UserCircleIcon,
    ShieldCheckIcon,
    LightBulbIcon,
    ArrowRightStartOnRectangleIcon,
  } from "@heroicons/react/24/solid";
  
const sideItems = [
    { icon: HomeIcon, title: "Home" },
    { icon: Square2StackIcon, title: "Events" },
    { icon: TicketIcon, title: "Orders" },
    { icon: Cog6ToothIcon, title: "Settings" },
  ];
  
  const upcomingEvents = [
    { title: "Bear Hug: Live in Concert" },
    { title: "Six Fingers - DJ Set" },
    { title: "We All Look The Same" },
    { title: "Viking People" },
  ];
  
  const dropDownMenuItem = [
    { icon: UserCircleIcon, title: "My account" },
    { icon: ShieldCheckIcon, title: "Privacy policy" },
    { icon: LightBulbIcon, title: "Share feedback" },
    { icon: ArrowRightStartOnRectangleIcon, title: "Logout" },
  ];

  const sortingOptions = [
    { title: "Last Week" },
    { title: "Last Month" },
    { title: "Last Year" },
    { title: "All Time" },
  ];
  const orderData = [
    {
      title: "Total revenue",
      value: "$2.6M",
      percentage: "+3.5%",
      color: "green",
    },
    {
      title: "Average order value",
      value: "$265",
      percentage: "-2.5%",
    },
    {
      title: "Tickets sold",
      value: "1,200",
      percentage: "+5%",
    },
    {
      title: "Page views",
      value: "12,000",
      percentage: "-5%",
    },
  ];

  export { sideItems, upcomingEvents, dropDownMenuItem , sortingOptions , orderData  }