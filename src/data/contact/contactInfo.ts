import { Clock, Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contact.craftslogic@gmail.com",
    link: "mailto:contact.craftslogic@gmail.com",
    description: "Send us an email anytime",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+92 335 1848 651",
    link: "tel:+923351848651",
    description: "Mon-Fri from 9am to 6pm",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Remote & Global",
    link: "#",
    description: "Working with clients worldwide",
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "< 24 hours",
    link: "#",
    description: "Average response time",
  },
];
export default contactInfo;
