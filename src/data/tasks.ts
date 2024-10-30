import { Task } from '../types/types';

// Helper function to categorize tasks based on minutes
const categorizeTasks = (tasks: Omit<Task, 'category'>[]): Task[] => {
  return tasks.map(task => ({
    ...task,
    category: task.minutes <= 5 ? 'five' :
             task.minutes <= 10 ? 'ten' :
             task.minutes <= 15 ? 'fifteen' : 'twenty'
  }));
};

const rawTasks = [
  {
    "id": "1",
    "title": "Color a picture or draw one",
    "category": "five",
    "completed": false,
    "description": "Color a picture or draw one",
    "minutes": 5
  },
  {
    "id": "2",
    "title": "Read 5 pages of a book to someone or out loud",
    "category": "five",
    "completed": false,
    "description": "Read 5 pages of a book to someone or out loud",
    "minutes": 5
  },
  {
    "id": "3",
    "title": "Take out the trash/recyclables",
    "category": "five",
    "completed": false,
    "description": "Take out the trash/recyclables",
    "minutes": 10
  },
  {
    "id": "4",
    "title": "Put the dishes away",
    "category": "five",
    "completed": false,
    "description": "Put the dishes away",
    "minutes": 5
  },
  {
    "id": "5",
    "title": "Vacuum house/area",
    "category": "five",
    "completed": false,
    "description": "Vacuum house/area",
    "minutes": 15
  },
  {
    "id": "6",
    "title": "Tidy up your room",
    "category": "five",
    "completed": false,
    "description": "Tidy up your room",
    "minutes": 10
  },
  {
    "id": "7",
    "title": "Brush your teeth",
    "category": "five",
    "completed": false,
    "description": "Brush your teeth",
    "minutes": 5
  },
  {
    "id": "8",
    "title": "Feed the pets",
    "category": "five",
    "completed": false,
    "description": "Feed the pets",
    "minutes": 5
  },
  {
    "id": "9",
    "title": "Water the plants",
    "category": "five",
    "completed": false,
    "description": "Water the plants",
    "minutes": 5
  },
  {
    "id": "10",
    "title": "Pick up 10 toys or items off the floor",
    "category": "five",
    "completed": false,
    "description": "Pick up 10 toys or items off the floor",
    "minutes": 5
  },
  {
    "id": "11",
    "title": "Wash your hands and face",
    "category": "five",
    "completed": false,
    "description": "Wash your hands and face",
    "minutes": 5
  },
  {
    "id": "12",
    "title": "Fold a blanket neatly",
    "category": "five",
    "completed": false,
    "description": "Fold a blanket neatly",
    "minutes": 5
  },
  {
    "id": "13",
    "title": "Wipe down a table or countertop",
    "category": "five",
    "completed": false,
    "description": "Wipe down a table or countertop",
    "minutes": 5
  },
  {
    "id": "14",
    "title": "Write a thank-you note to someone",
    "category": "five",
    "completed": false,
    "description": "Write a thank-you note to someone",
    "minutes": 10
  },
  {
    "id": "15",
    "title": "Organize a bookshelf or drawer",
    "category": "five",
    "completed": false,
    "description": "Organize a bookshelf or drawer",
    "minutes": 10
  },
  {
    "id": "16",
    "title": "Do 10 jumping jacks",
    "category": "five",
    "completed": false,
    "description": "Do 10 jumping jacks",
    "minutes": 5
  },
  {
    "id": "17",
    "title": "Dust a shelf",
    "category": "five",
    "completed": false,
    "description": "Dust a shelf",
    "minutes": 5
  },
  {
    "id": "18",
    "title": "Straighten your shoes in the closet",
    "category": "five",
    "completed": false,
    "description": "Straighten your shoes in the closet",
    "minutes": 5
  },
  {
    "id": "19",
    "title": "Put away all your clothes in the closet or drawers",
    "category": "five",
    "completed": false,
    "description": "Put away all your clothes in the closet or drawers",
    "minutes": 10
  },
  {
    "id": "20",
    "title": "Clean the bathroom mirror",
    "category": "five",
    "completed": false,
    "description": "Clean the bathroom mirror",
    "minutes": 5
  },
  {
    "id": "21",
    "title": "Set the table for a meal",
    "category": "five",
    "completed": false,
    "description": "Set the table for a meal",
    "minutes": 5
  },
  {
    "id": "22",
    "title": "Sweep the floor",
    "category": "five",
    "completed": false,
    "description": "Sweep the floor",
    "minutes": 10
  },
  {
    "id": "23",
    "title": "Empty the dishwasher",
    "category": "five",
    "completed": false,
    "description": "Empty the dishwasher",
    "minutes": 10
  },
  {
    "id": "24",
    "title": "Fold and put away laundry",
    "category": "five",
    "completed": false,
    "description": "Fold and put away laundry",
    "minutes": 15
  },
  {
    "id": "25",
    "title": "Wipe down light switches",
    "category": "five",
    "completed": false,
    "description": "Wipe down light switches",
    "minutes": 5
  },
  {
    "id": "26",
    "title": "Clean your desk or workspace",
    "category": "five",
    "completed": false,
    "description": "Clean your desk or workspace",
    "minutes": 10
  },
  {
    "id": "27",
    "title": "Help cook a meal",
    "category": "five",
    "completed": false,
    "description": "Help cook a meal",
    "minutes": 20
  },
  {
    "id": "28",
    "title": "Walk around the block",
    "category": "five",
    "completed": false,
    "description": "Walk around the block",
    "minutes": 15
  },
  {
    "id": "29",
    "title": "Organize your backpack",
    "category": "five",
    "completed": false,
    "description": "Organize your backpack",
    "minutes": 10
  },
  {
    "id": "30",
    "title": "Rake leaves in the yard",
    "category": "five",
    "completed": false,
    "description": "Rake leaves in the yard",
    "minutes": 15
  },
  {
    "id": "31",
    "title": "Clean the sink in the kitchen",
    "category": "five",
    "completed": false,
    "description": "Clean the sink in the kitchen",
    "minutes": 10
  },
  {
    "id": "32",
    "title": "Play a board game with someone",
    "category": "five",
    "completed": false,
    "description": "Play a board game with someone",
    "minutes": 20
  },
   {
    "id": "34",
    "title": "Put groceries away",
    "category": "five",
    "completed": false,
    "description": "Put groceries away",
    "minutes": 10
  },
  {
    "id": "35",
    "title": "Take a short walk outside",
    "category": "five",
    "completed": false,
    "description": "Take a short walk outside",
    "minutes": 10
  },
  {
    "id": "36",
    "title": "Do a puzzle for 10 minutes",
    "category": "five",
    "completed": false,
    "description": "Do a puzzle for 10 minutes",
    "minutes": 10
  },
  {
    "id": "37",
    "title": "Help organize the fridge",
    "category": "five",
    "completed": false,
    "description": "Help organize the fridge",
    "minutes": 15
  },
  {
    "id": "38",
    "title": "Clear and wipe the dining table",
    "category": "five",
    "completed": false,
    "description": "Clear and wipe the dining table",
    "minutes": 5
  },
  {
    "id": "39",
    "title": "Sharpen pencils and organize the pencil box",
    "category": "five",
    "completed": false,
    "description": "Sharpen pencils and organize the pencil box",
    "minutes": 5
  },
  {
    "id": "40",
    "title": "Clean your shoes",
    "category": "five",
    "completed": false,
    "description": "Clean your shoes",
    "minutes": 10
  },
  {
    "id": "41",
    "title": "Help fold towels",
    "category": "five",
    "completed": false,
    "description": "Help fold towels",
    "minutes": 10
  },
  {
    "id": "42",
    "title": "Water the garden or outdoor plants",
    "category": "five",
    "completed": false,
    "description": "Water the garden or outdoor plants",
    "minutes": 10
  },
  {
    "id": "43",
    "title": "Check the mail",
    "category": "five",
    "completed": false,
    "description": "Check the mail",
    "minutes": 5
  },
  {
    "id": "44",
    "title": "Clean a window",
    "category": "five",
    "completed": false,
    "description": "Clean a window",
    "minutes": 10
  },
  {
    "id": "45",
    "title": "Organize a toy bin",
    "category": "five",
    "completed": false,
    "description": "Organize a toy bin",
    "minutes": 15
  },
  {
    "id": "46",
    "title": "Wipe down door handles",
    "category": "five",
    "completed": false,
    "description": "Wipe down door handles",
    "minutes": 5
  },
  {
    "id": "47",
    "title": "Clean up outdoor toys",
    "category": "five",
    "completed": false,
    "description": "Clean up outdoor toys",
    "minutes": 10
  },
  {
    "id": "48",
    "title": "Take a 5-minute stretch break",
    "category": "five",
    "completed": false,
    "description": "Take a 5-minute stretch break",
    "minutes": 5
  },
  {
    "id": "49",
    "title": "Help set up for a family activity",
    "category": "five",
    "completed": false,
    "description": "Help set up for a family activity",
    "minutes": 10
  },
  {
    "id": "50",
    "title": "Make your bed",
    "category": "five",
    "completed": false,
    "description": "Make your bed",
    "minutes": 5
  },
  {
    "id": "51",
    "title": "Sort laundry into piles (lights and darks)",
    "category": "five",
    "completed": false,
    "description": "Sort laundry into piles (lights and darks)",
    "minutes": 10
  },
  {
    "id": "52",
    "title": "Sweep the garage",
    "category": "five",
    "completed": false,
    "description": "Sweep the garage",
    "minutes": 15
  },
  {
    "id": "53",
    "title": "Read a book quietly for 10 minutes",
    "category": "five",
    "completed": false,
    "description": "Read a book quietly for 10 minutes",
    "minutes": 10
  },
  {
    "id": "54",
    "title": "Help take out the recycling",
    "category": "five",
    "completed": false,
    "description": "Help take out the recycling",
    "minutes": 5
  },
  {
    "id": "55",
    "title": "Wipe down the kitchen counters",
    "category": "five",
    "completed": false,
    "description": "Wipe down the kitchen counters",
    "minutes": 5
  },
  {
    "id": "56",
    "title": "Pick up any trash in the yard",
    "category": "five",
    "completed": false,
    "description": "Pick up any trash in the yard",
    "minutes": 10
  },
  {
    "id": "57",
    "title": "Help prepare lunch or snacks",
    "category": "five",
    "completed": false,
    "description": "Help prepare lunch or snacks",
    "minutes": 15
  },
  {
    "id": "58",
    "title": "Sort toys by color or type",
    "category": "five",
    "completed": false,
    "description": "Sort toys by color or type",
    "minutes": 10
  },
  {
    "id": "59",
    "title": "Organize school supplies",
    "category": "five",
    "completed": false,
    "description": "Organize school supplies",
    "minutes": 10
  },
  {
    "id": "60",
    "title": "Clean the car (inside)",
    "category": "five",
    "completed": false,
    "description": "Clean the car (inside)",
    "minutes": 20
  },
  {
    "id": "61",
    "title": "Wash vegetables for a meal",
    "category": "five",
    "completed": false,
    "description": "Wash vegetables for a meal",
    "minutes": 5
  },
  {
    "id": "62",
    "title": "Help pick up after a meal",
    "category": "five",
    "completed": false,
    "description": "Help pick up after a meal",
    "minutes": 5
  },
  {
    "id": "63",
    "title": "Collect dirty laundry from the house",
    "category": "five",
    "completed": false,
    "description": "Collect dirty laundry from the house",
    "minutes": 5
  },
  {
    "id": "64",
    "title": "Stack and organize books",
    "category": "five",
    "completed": false,
    "description": "Stack and organize books",
    "minutes": 10
  },
{
  "id": "65",
  "title": "Help wash windows",
  "category": "five",
  "completed": false,
  "description": "Help wash windows",
  "minutes": 15
},
  {
    "id": "66",
    "title": "Mop a small section of the floor",
    "category": "five",
    "completed": false,
    "description": "Mop a small section of the floor",
    "minutes": 10
  },
  {
    "id": "67",
    "title": "Take care of the compost",
    "category": "five",
    "completed": false,
    "description": "Take care of the compost",
    "minutes": 10
  },
  {
    "id": "68",
    "title": "Organize the shoe rack",
    "category": "five",
    "completed": false,
    "description": "Organize the shoe rack",
    "minutes": 5
  },
  {
    "id": "69",
    "title": "Help clean up after an activity",
    "category": "five",
    "completed": false,
    "description": "Help clean up after an activity",
    "minutes": 5
  },
  {
    "id": "70",
    "title": "Make a simple craft or art project",
    "category": "five",
    "completed": false,
    "description": "Make a simple craft or art project",
    "minutes": 15
  },
  {
    "id": "71",
    "title": "Refill a pets water bowl",
    "category": "five",
    "completed": false,
    "description": "Refill a pets water bowl",
    "minutes": 5
  },
  {
    "id": "72",
    "title": "Sweep the porch or patio",
    "category": "five",
    "completed": false,
    "description": "Sweep the porch or patio",
    "minutes": 10
  },
  {
    "id": "73",
    "title": "Collect sticks or debris in the yard",
    "category": "five",
    "completed": false,
    "description": "Collect sticks or debris in the yard",
    "minutes": 10
  },
  {
    "id": "74",
    "title": "Wipe down the bathroom sink",
    "category": "five",
    "completed": false,
    "description": "Wipe down the bathroom sink",
    "minutes": 5
  },
  {
    "id": "75",
    "title": "Clean up any shoes left out in the house",
    "category": "five",
    "completed": false,
    "description": "Clean up any shoes left out in the house",
    "minutes": 5
  },
  {
    "id": "76",
    "title": "Help clean out the pantry",
    "category": "five",
    "completed": false,
    "description": "Help clean out the pantry",
    "minutes": 15
  },
  {
    "id": "77",
    "title": "Help fold napkins or placemats",
    "category": "five",
    "completed": false,
    "description": "Help fold napkins or placemats",
    "minutes": 5
  },
  {
    "id": "78",
    "title": "Help wash the family car",
    "category": "five",
    "completed": false,
    "description": "Help wash the family car",
    "minutes": 20
  },
  {
    "id": "79",
    "title": "Organize the game shelf",
    "category": "five",
    "completed": false,
    "description": "Organize the game shelf",
    "minutes": 10
  },
  {
    "id": "80",
    "title": "Help put away groceries",
    "category": "five",
    "completed": false,
    "description": "Help put away groceries",
    "minutes": 15
  },
  {
    "id": "81",
    "title": "Pick out tomorrow's outfit",
    "category": "five",
    "completed": false,
    "description": "Pick out tomorrow's outfit",
    "minutes": 5
  },
  {
    "id": "82",
    "title": "Help pack your school bag for tomorrow",
    "category": "five",
    "completed": false,
    "description": "Help pack your school bag for tomorrow",
    "minutes": 5
  },
  {
    "id": "83",
    "title": "Sort through old papers or assignments",
    "category": "five",
    "completed": false,
    "description": "Sort through old papers or assignments",
    "minutes": 10
  },
  {
    "id": "84",
    "title": "Play a memory game with someone",
    "category": "five",
    "completed": false,
    "description": "Play a memory game with someone",
    "minutes": 15
  },
  {
    "id": "85",
    "title": "Help clean up outdoor sports equipment",
    "category": "five",
    "completed": false,
    "description": "Help clean up outdoor sports equipment",
    "minutes": 10
  },
  {
    "id": "86",
    "title": "Write a letter to a family member",
    "category": "five",
    "completed": false,
    "description": "Write a letter to a family member",
    "minutes": 10
  },
  {
    "id": "87",
    "title": "Build a small Lego structure",
    "category": "five",
    "completed": false,
    "description": "Build a small Lego structure",
    "minutes": 15
  },
  {
    "id": "88",
    "title": "Play outside with a ball or jump rope",
    "category": "five",
    "completed": false,
    "description": "Play outside with a ball or jump rope",
    "minutes": 15
  },
  {
    "id": "89",
    "title": "Help hang up wet towels",
    "category": "five",
    "completed": false,
    "description": "Help hang up wet towels",
    "minutes": 5
  },
  {
    "id": "90",
    "title": "Help clean out the fridge",
    "category": "five",
    "completed": false,
    "description": "Help clean out the fridge",
    "minutes": 15
  },
  {
    "id": "91",
    "title": "Help organize the garage",
    "category": "five",
    "completed": false,
    "description": "Help organize the garage",
    "minutes": 20
  },
  {
    "id": "92",
    "title": "Clean up art supplies after a project",
    "category": "five",
    "completed": false,
    "description": "Clean up art supplies after a project",
    "minutes": 5
  },
  {
    "id": "93",
    "title": "Make a card for someone",
    "category": "five",
    "completed": false,
    "description": "Make a card for someone",
    "minutes": 10
  },
  {
    "id": "94",
    "title": "Organize craft supplies",
    "category": "five",
    "completed": false,
    "description": "Organize craft supplies",
    "minutes": 15
  },
  {
    "id": "95",
    "title": "Sweep up crumbs in the kitchen",
    "category": "five",
    "completed": false,
    "description": "Sweep up crumbs in the kitchen",
    "minutes": 5
  },
  {
    "id": "96",
    "title": "Clean out the junk drawer",
    "category": "five",
    "completed": false,
    "description": "Clean out the junk drawer",
    "minutes": 10
  },
  {
    "id": "97",
    "title": "Help move furniture to vacuum",
    "category": "five",
    "completed": false,
    "description": "Help move furniture to vacuum",
    "minutes": 20
  },
{
    "id": "98",
    "title": "Clean up your toys and games",
    "category": "five",
    "completed": false,
    "description": "Clean up your toys and games",
    "minutes": 10
  },
  {
    "id": "99",
    "title": "Help make a grocery list",
    "category": "five",
    "completed": false,
    "description": "Help make a grocery list",
    "minutes": 10
  },
  {
    "id": "100",
    "title": "Help wrap a present",
    "category": "five",
    "completed": false,
    "description": "Help wrap a present",
    "minutes": 10
  }
];

export const TASKS: Task[] = categorizeTasks(rawTasks);