import { HiOutlineSquares2X2 } from 'react-icons/hi2';
import {
  MdOutlineFort,
  MdPeopleAlt,
  MdNoteAlt,
  MdKeyboardArrowRight,
} from 'react-icons/md';
import { TbDeviceLandlinePhone } from 'react-icons/tb';
import { BiSolidBookBookmark } from 'react-icons/bi';
import {
  BsPatchCheckFill,
  BsLightbulbFill,
  BsFillBookmarkFill,
} from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { PiSignOutBold } from 'react-icons/pi';
import { LuBookOpenCheck } from 'react-icons/lu';
import { AiOutlineHome } from 'react-icons/ai';
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
} from '../components/assets/random';

export const navLinks = [
  {
    name: 'Pratices', link: '/', icon: HiOutlineSquares2X2, margin: true,
  },
  { name: 'Courses', link: '/next', icon: MdOutlineFort },
  { name: 'Progress', link: '/', icon: BsPatchCheckFill },
  { name: 'Instructors', link: '/', icon: MdPeopleAlt },
  { name: 'Music Notes', link: '/', icon: MdNoteAlt },
];

export const footLinks = [
  {
    name: 'Settings', link: '/', icon: FiSettings, margin: true,
  },
  { name: 'Sign Out', link: '/', icon: PiSignOutBold },
];

export const randomImages = [
  { name: 'image1', icon: image1 },
  { name: 'image2', icon: image2 },
  { name: 'image3', icon: image3 },
  { name: 'image4', icon: image4 },
  { name: 'image5', icon: image5 },
  { name: 'image6', icon: image6 },
  { name: 'image7', icon: image7 },
];

export const musicFoot = [
  {
    name: 'Important Practises',
    icon: LuBookOpenCheck,
    icon1: MdKeyboardArrowRight,
  },
  { name: 'Assignments', icon: AiOutlineHome, icon1: MdKeyboardArrowRight },
  { name: 'Music Notes', icon: MdNoteAlt, icon1: MdKeyboardArrowRight },
];

export const musicTheories = [
  {
    icon: image1,
    name: 'Latest News',
    detail: 'Discover the latest updates',
    last: 'Stay up to date with the music world',
    icon1: TbDeviceLandlinePhone,
  },
  {
    icon: image1,
    name: 'Music Pratice Tips',
    detail: 'Imporove your skills',
    last: 'Enhance your music abilities',
    icon1: BsLightbulbFill,
  },
  {
    icon: image1,
    name: 'Music Instruments Guide',
    detail: 'Discover different instruments',
    last: 'Explore their unique sounds',
    icon1: BiSolidBookBookmark,
  },
  {
    icon: image1,
    name: 'Music Note Memorization',
    detail: 'Master music notes',
    last: 'Track your progress',
    icon1: BsFillBookmarkFill,
  },
];
