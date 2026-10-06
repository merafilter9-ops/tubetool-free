import { BookImage, CirclePlay, FilePenLine, FileSearch, Hash, ImageUp, Lightbulb, ListTree, Sparkles, Split, Tag, Text, TextSearch, Type } from "lucide-react";
import { SelectOptionsType, CountryCodeType, VideoCategoryType, GermanToEnglishMapType, SuggestedActionType, PlanOptionsType } from "./types";

export const VIDEO_CATEGORIES: VideoCategoryType[] = [
    {
        label: "Cars and vehicles",
        value: "Cars and vehicles",
        videoStyle: [
            "Reviews", "Walkarounds", "Comparisons", "DIY & Maintenance", "Test Drives", "Off-Roading Adventures", "Restorations", "Racing"
        ]
    },
    {
        label: "Comedy",
        value: "Comedy",
        videoStyle: [
            "Sketches", "Stand-Up", "Parodies", "Improv", "Vlogs with Humorous Commentary", "Reaction Videos", "Animated Comedy", "Dark Comedy"
        ]
    },
    {
        label: "Education",
        value: "Education",
        videoStyle: [
            "Tutorials/How-To", "Lectures/Lessons", "Documentaries", "Animated Explainers", "Case Studies", "Interviews with Experts", "Educational Experiments"
        ]
    },
    {
        label: "Entertainment",
        value: "Entertainment",
        videoStyle: [
            "Challenges", "Day in the Life Vlogs", "Storytimes", "Behind the Scenes", "Live Streams", "Compilation Videos", "Reaction Videos", "Interactive Games"
        ]
    },
    {
        label: "Experiments",
        value: "Experiments",
        videoStyle: [
            "Science Experiments", "DIY Projects", "Life Hacks", "Product Testing", "Gadget Reviews", "Exploration of Natural Phenomena"
        ]
    },
    {
        label: "Facts",
        value: "Facts",
        videoStyle: [
            "Top 10 Lists", "Did You Know? Videos", "Historical Insights", "Informational Pieces", "Statistical Analysis", "Myth Busting", "Geographical Exploration"
        ]
    },
    {
        label: "Fashion and beauty",
        value: "Fashion and Beauty",
        videoStyle: [
            "Makeup Tutorials", "Hairstyling Tutorials", "Fashion Lookbooks", "Clothing Hauls", "Product Reviews", "Skincare Routines", "Get Ready With Me (GRWM)"
        ]
    },
    {
        label: "Film and animation",
        value: "Film and animation",
        videoStyle: [
            "Short Films", "Animated Shorts", "Music Videos", "Film Reviews", "Behind the Scenes", "Tutorials", "Fan Films"
        ]
    },
    {
        label: "Food and Drinks",
        value: "Food and Drinks",
        videoStyle: [
            "Cooking Tutorials", "Restaurant Reviews", "Baking Tutorials", "Food Challenges", "Recipe Development", "Food Tours", "Meal Prepping"
        ]
    },
    {
        label: "Gaming",
        value: "Gaming",
        videoStyle: [
            "Gameplay Walkthroughs", "Game Reviews", "Let's Play Series", "Tutorials and Guides", "Competitive Gaming", "Modding and Customization", "Live Streams"
        ]
    },
    {
        label: "Health and Fitness",
        value: "Health and Fitness",
        videoStyle: [
            "Workout Routines", "Healthy Recipes", "Fitness Advice", "Yoga and Meditation", "Interviews with Experts", "Fitness Challenges", "Progress Documentation"
        ]
    },
    {
        label: "How-to and style",
        value: "How-to and Style",
        videoStyle: [
            "DIY Tutorials", "Life Hacks", "Home Improvement", "Fashion and Style Advice", "Crafting Tutorials", "Organization Hacks", "Personal Finance"
        ]
    },
    {
        label: "Music",
        value: "Music",
        videoStyle: [
            "Original Songs", "Cover Songs", "Music Lessons", "Live Performances", "Music Analysis", "Behind the Scenes", "Music Reactions"
        ]
    },
    {
        label: "News and politics",
        value: "News and politics",
        videoStyle: [
            "News Reports", "Analysis and Commentary", "Interviews", "Documentaries", "Fact-Checking", "Political Discussions and Debates", "Roundups"
        ]
    },
    {
        label: "Non-profits and activism",
        value: "Non-profits and activism",
        videoStyle: [
            "Documentaries", "Campaign Updates", "Interviews", "Calls to Action", "Event Coverage", "Educational Content", "Fundraising Appeals"
        ]
    },
    {
        label: "People and blogs",
        value: "People and blogs",
        videoStyle: [
            "Daily Vlogs", "Travel Vlogs", "Lifestyle Vlogs", "Storytime Vlogs", "Q&A Sessions", "Collaboration Vlogs", "Reaction Vlogs"
        ]
    },
    {
        label: "Pets and animals",
        value: "Pets and animals",
        videoStyle: [
            "Cute Animal Compilations", "Animal Care Tutorials", "Animal Rescue Stories", "Pet Training Tips", "Nature Documentaries", "Pet Vlogs", "Funny Pet Moments"
        ]
    },
    {
        label: "Prank video",
        value: "Prank Video",
        videoStyle: [
            "Harmless Pranks", "Public Pranks", "Reaction Pranks", "Costume Pranks", "Food Pranks", "Tech Pranks", "Gag Reel Pranks"
        ]
    },
    {
        label: "Roasting",
        value: "Roasting",
        videoStyle: [
            "Roasts", "Comedic Commentary", "Skit based roasts", "Parody Roasts", "Improv Roasts", "Dark Humour Roasts", "Satire"
        ]
    },
    {
        label: "Science and technology",
        value: "Science and technology",
        videoStyle: [
            "Technology Reviews", "Science Explainers", "Experiments", "Space Exploration", "Interviews with Scientists", "Documentaries", "DIY Tech Projects"
        ]
    },
    {
        label: "Sport",
        value: "Sport",
        videoStyle: [
            "Game Highlights", "Game Analysis", "Athlete Interviews", "Sports Documentaries", "Training and Workout Videos", "Live Game Coverage", "Behind the Scenes"
        ]
    },
    {
        label: "Support and Guides",
        value: "Support and Guides",
        videoStyle: [
            "How-To Guides", "Tutorials", "Troubleshooting Guides", "Personal Development", "Financial Guidance", "Mental Health Support", "Study Tips and Resources"
        ]
    },
    {
        label: "Travel and events",
        value: "Travel and events",
        videoStyle: [
            "Travel Vlogs", "Destination Guides", "Travel Tips and Advice", "Event Coverage", "Behind the Scenes", "Cultural Experiences", "Food Tours"
        ]
    },
    {
        label: "Unboxing and reviews",
        value: "Unboxing and reviews",
        videoStyle: [
            "Product Unboxings", "Product Reviews", "Tech Unboxing", "Gaming Unboxing", "Beauty Product Reviews", "Food Product Reviews", "Comparison Reviews"
        ]
    }
];

export const ALL_LANGUAGES_LIST: SelectOptionsType[] = [
    { label: 'Afrikaans', value: 'Afrikaans' },
    { label: 'Albanian', value: 'Albanian' },
    { label: 'Amharic', value: 'Amharic' },
    { label: 'Arabic', value: 'Arabic' },
    { label: 'Armenian', value: 'Armenian' },
    { label: 'Assamese', value: 'Assamese' },
    { label: 'Azerbaijani', value: 'Azerbaijani' },
    { label: 'Basque', value: 'Basque' },
    { label: 'Belarusian', value: 'Belarusian' },
    { label: 'Bengali', value: 'Bengali' },
    { label: 'Bosnian', value: 'Bosnian' },
    { label: 'Bulgarian', value: 'Bulgarian' },
    { label: 'Burmese', value: 'Burmese' },
    { label: 'Catalan', value: 'Catalan' },
    { label: 'Cebuano', value: 'Cebuano' },
    { label: 'Chichewa', value: 'Chichewa' },
    { label: 'Chinese', value: 'Chinese' },
    { label: 'Corsican', value: 'Corsican' },
    { label: 'Croatian', value: 'Croatian' },
    { label: 'Czech', value: 'Czech' },
    { label: 'Danish', value: 'Danish' },
    { label: 'Dutch', value: 'Dutch' },
    { label: 'English', value: 'English' },
    { label: 'Esperanto', value: 'Esperanto' },
    { label: 'Estonian', value: 'Estonian' },
    { label: 'Filipino', value: 'Filipino' },
    { label: 'Finnish', value: 'Finnish' },
    { label: 'French', value: 'French' },
    { label: 'Frisian', value: 'Frisian' },
    { label: 'Galician', value: 'Galician' },
    { label: 'Georgian', value: 'Georgian' },
    { label: 'German', value: 'German' },
    { label: 'Greek', value: 'Greek' },
    { label: 'Gujarati', value: 'Gujarati' },
    { label: 'Haitian Creole', value: 'Haitian Creole' },
    { label: 'Hausa', value: 'Hausa' },
    { label: 'Hawaiian', value: 'Hawaiian' },
    { label: 'Hebrew', value: 'Hebrew' },
    { label: 'Hindi', value: 'Hindi' },
    { label: 'Hinglish', value: 'Hinglish' },
    { label: 'Hmong', value: 'Hmong' },
    { label: 'Hungarian', value: 'Hungarian' },
    { label: 'Icelandic', value: 'Hcelandic' },
    { label: 'Igbo', value: 'Igbo' },
    { label: 'Indonesian', value: 'Indonesian' },
    { label: 'Irish', value: 'Irish' },
    { label: 'Italian', value: 'Italian' },
    { label: 'Japanese', value: 'Japanese' },
    { label: 'Javanese', value: 'Javanese' },
    { label: 'Kannada', value: 'Kannada' },
    { label: 'Kazakh', value: 'Kazakh' },
    { label: 'Khmer', value: 'Khmer' },
    { label: 'Kinyarwanda', value: 'Kinyarwanda' },
    { label: 'Korean', value: 'Korean' },
    { label: 'Kurdish', value: 'Kurdish' },
    { label: 'Kyrgyz', value: 'Kyrgyz' },
    { label: 'Lao', value: 'Lao' },
    { label: 'Latin', value: 'Latin' },
    { label: 'Latvian', value: 'Latvian' },
    { label: 'Lithuanian', value: 'Lithuanian' },
    { label: 'Luxembourgish', value: 'Luxembourgish' },
    { label: 'Macedonian', value: 'Macedonian' },
    { label: 'Malagasy', value: 'Malagasy' },
    { label: 'Malay', value: 'Malay' },
    { label: 'Malayalam', value: 'Malayalam' },
    { label: 'Maltese', value: 'Maltese' },
    { label: 'Maori', value: 'Maori' },
    { label: 'Marathi', value: 'Marathi' },
    { label: 'Mongolian', value: 'Mongolian' },
    { label: 'Nepali', value: 'Nepali' },
    { label: 'Norwegian', value: 'Norwegian' },
    { label: 'Odia', value: 'Odia' },
    { label: 'Pashto', value: 'Pashto' },
    { label: 'Persian', value: 'Persian' },
    { label: 'Polish', value: 'Polish' },
    { label: 'Portuguese', value: 'Portuguese' },
    { label: 'Punjabi', value: 'Punjabi' },
    { label: 'Romanian', value: 'Romanian' },
    { label: 'Russian', value: 'Russian' },
    { label: 'Samoan', value: 'Samoan' },
    { label: 'Scots Gaelic', value: 'Scots-gaelic' },
    { label: 'Serbian', value: 'Serbian' },
    { label: 'Sesotho', value: 'Sesotho' },
    { label: 'Shona', value: 'Shona' },
    { label: 'Sindhi', value: 'Sindhi' },
    { label: 'Sinhala', value: 'Sinhala' },
    { label: 'Slovak', value: 'Slovak' },
    { label: 'Slovenian', value: 'Slovenian' },
    { label: 'Somali', value: 'Somali' },
    { label: 'Spanish', value: 'Spanish' },
    { label: 'Sundanese', value: 'Sundanese' },
    { label: 'Swahili', value: 'Swahili' },
    { label: 'Swedish', value: 'Swedish' },
    { label: 'Tajik', value: 'Tajik' },
    { label: 'Tamil', value: 'Tamil' },
    { label: 'Tatar', value: 'Tatar' },
    { label: 'Telugu', value: 'Telugu' },
    { label: 'Thai', value: 'Thai' },
    { label: 'Turkish', value: 'Turkish' },
    { label: 'Turkmen', value: 'Turkmen' },
    { label: 'Ukrainian', value: 'Ukrainian' },
    { label: 'Urdu', value: 'Urdu' },
    { label: 'Uyghur', value: 'Uyghur' },
    { label: 'Uzbek', value: 'Uzbek' },
    { label: 'Vietnamese', value: 'Vietnamese' },
    { label: 'Welsh', value: 'Welsh' },
    { label: 'Xhosa', value: 'Xhosa' },
    { label: 'Yiddish', value: 'Yiddish' },
    { label: 'Yoruba', value: 'Yoruba' },
    { label: 'Zulu', value: 'Zulu' }
];

export const COUNTRY_CODES: CountryCodeType[] = [
    { code: 'AD', name: 'Andorra' },
    { code: 'AE', name: 'United Arab Emirates' },
    { code: 'AF', name: 'Afghanistan' },
    { code: 'AG', name: 'Antigua and Barbuda' },
    { code: 'AI', name: 'Anguilla' },
    { code: 'AL', name: 'Albania' },
    { code: 'AM', name: 'Armenia' },
    { code: 'AO', name: 'Angola' },
    { code: 'AQ', name: 'Antarctica' },
    { code: 'AR', name: 'Argentina' },
    { code: 'AS', name: 'American Samoa' },
    { code: 'AT', name: 'Austria' },
    { code: 'AU', name: 'Australia' },
    { code: 'AW', name: 'Aruba' },
    { code: 'AX', name: 'Åland Islands' },
    { code: 'AZ', name: 'Azerbaijan' },
    { code: 'BA', name: 'Bosnia and Herzegovina' },
    { code: 'BB', name: 'Barbados' },
    { code: 'BD', name: 'Bangladesh' },
    { code: 'BE', name: 'Belgium' },
    { code: 'BF', name: 'Burkina Faso' },
    { code: 'BG', name: 'Bulgaria' },
    { code: 'BH', name: 'Bahrain' },
    { code: 'BI', name: 'Burundi' },
    { code: 'BJ', name: 'Benin' },
    { code: 'BL', name: 'Saint Barthélemy' },
    { code: 'BM', name: 'Bermuda' },
    { code: 'BN', name: 'Brunei Darussalam' },
    { code: 'BO', name: 'Bolivia' },
    { code: 'BQ', name: 'Bonaire, Sint Eustatius and Saba' },
    { code: 'BR', name: 'Brazil' },
    { code: 'BS', name: 'Bahamas' },
    { code: 'BT', name: 'Bhutan' },
    { code: 'BV', name: 'Bouvet Island' },
    { code: 'BW', name: 'Botswana' },
    { code: 'BY', name: 'Belarus' },
    { code: 'BZ', name: 'Belize' },
    { code: 'CA', name: 'Canada' },
    { code: 'CC', name: 'Cocos (Keeling) Islands' },
    { code: 'CD', name: 'Democratic Republic of the Congo' },
    { code: 'CF', name: 'Central African Republic' },
    { code: 'CG', name: 'Congo' },
    { code: 'CH', name: 'Switzerland' },
    { code: 'CI', name: 'Côte d\'Ivoire' },
    { code: 'CK', name: 'Cook Islands' },
    { code: 'CL', name: 'Chile' },
    { code: 'CM', name: 'Cameroon' },
    { code: 'CN', name: 'China' },
    { code: 'CO', name: 'Colombia' },
    { code: 'CR', name: 'Costa Rica' },
    { code: 'CU', name: 'Cuba' },
    { code: 'CV', name: 'Cabo Verde' },
    { code: 'CW', name: 'Curaçao' },
    { code: 'CX', name: 'Christmas Island' },
    { code: 'CY', name: 'Cyprus' },
    { code: 'CZ', name: 'Czech Republic' },
    { code: 'DE', name: 'Germany' },
    { code: 'DJ', name: 'Djibouti' },
    { code: 'DK', name: 'Denmark' },
    { code: 'DM', name: 'Dominica' },
    { code: 'DO', name: 'Dominican Republic' },
    { code: 'DZ', name: 'Algeria' },
    { code: 'EC', name: 'Ecuador' },
    { code: 'EE', name: 'Estonia' },
    { code: 'EG', name: 'Egypt' },
    { code: 'EH', name: 'Western Sahara' },
    { code: 'ER', name: 'Eritrea' },
    { code: 'ES', name: 'Spain' },
    { code: 'ET', name: 'Ethiopia' },
    { code: 'FI', name: 'Finland' },
    { code: 'FJ', name: 'Fiji' },
    { code: 'FK', name: 'Falkland Islands (Malvinas)' },
    { code: 'FM', name: 'Federated States of Micronesia' },
    { code: 'FO', name: 'Faroe Islands' },
    { code: 'FR', name: 'France' },
    { code: 'GA', name: 'Gabon' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'GD', name: 'Grenada' },
    { code: 'GE', name: 'Georgia' },
    { code: 'GF', name: 'French Guiana' },
    { code: 'GG', name: 'Guernsey' },
    { code: 'GH', name: 'Ghana' },
    { code: 'GI', name: 'Gibraltar' },
    { code: 'GL', name: 'Greenland' },
    { code: 'GM', name: 'Gambia' },
    { code: 'GN', name: 'Guinea' },
    { code: 'GP', name: 'Guadeloupe' },
    { code: 'GQ', name: 'Equatorial Guinea' },
    { code: 'GR', name: 'Greece' },
    { code: 'GS', name: 'South Georgia and the South Sandwich Islands' },
    { code: 'GT', name: 'Guatemala' },
    { code: 'GU', name: 'Guam' },
    { code: 'GW', name: 'Guinea-Bissau' },
    { code: 'GY', name: 'Guyana' },
    { code: 'HK', name: 'Hong Kong' },
    { code: 'HM', name: 'Heard Island and McDonald Islands' },
    { code: 'HN', name: 'Honduras' },
    { code: 'HR', name: 'Croatia' },
    { code: 'HT', name: 'Haiti' },
    { code: 'HU', name: 'Hungary' },
    { code: 'ID', name: 'Indonesia' },
    { code: 'IE', name: 'Ireland' },
    { code: 'IL', name: 'Israel' },
    { code: 'IM', name: 'Isle of Man' },
    { code: 'IN', name: 'India' },
    { code: 'IO', name: 'British Indian Ocean Territory' },
    { code: 'IQ', name: 'Iraq' },
    { code: 'IR', name: 'Iran' },
    { code: 'IS', name: 'Iceland' },
    { code: 'IT', name: 'Italy' },
    { code: 'JE', name: 'Jersey' },
    { code: 'JM', name: 'Jamaica' },
    { code: 'JO', name: 'Jordan' },
    { code: 'JP', name: 'Japan' },
    { code: 'KE', name: 'Kenya' },
    { code: 'KG', name: 'Kyrgyzstan' },
    { code: 'KH', name: 'Cambodia' },
    { code: 'KI', name: 'Kiribati' },
    { code: 'KM', name: 'Comoros' },
    { code: 'KN', name: 'Saint Kitts and Nevis' },
    { code: 'KP', name: "Democratic People's Republic of Korea" },
    { code: 'KR', name: 'Republic of Korea' },
    { code: 'KW', name: 'Kuwait' },
    { code: 'KY', name: 'Cayman Islands' },
    { code: 'KZ', name: 'Kazakhstan' },
    { code: 'LA', name: "Lao People's Democratic Republic" },
    { code: 'LB', name: 'Lebanon' },
    { code: 'LC', name: 'Saint Lucia' },
    { code: 'LI', name: 'Liechtenstein' },
    { code: 'LK', name: 'Sri Lanka' },
    { code: 'LR', name: 'Liberia' },
    { code: 'LS', name: 'Lesotho' },
    { code: 'LT', name: 'Lithuania' },
    { code: 'LU', name: 'Luxembourg' },
    { code: 'LV', name: 'Latvia' },
    { code: 'LY', name: 'Libya' },
    { code: 'MA', name: 'Morocco' },
    { code: 'MC', name: 'Monaco' },
    { code: 'MD', name: 'Moldova' },
    { code: 'ME', name: 'Montenegro' },
    { code: 'MF', name: 'Saint Martin (French part)' },
    { code: 'MG', name: 'Madagascar' },
    { code: 'MH', name: 'Marshall Islands' },
    { code: 'MK', name: 'North Macedonia' },
    { code: 'ML', name: 'Mali' },
    { code: 'MM', name: 'Myanmar' },
    { code: 'MN', name: 'Mongolia' },
    { code: 'MO', name: 'Macao' },
    { code: 'MP', name: 'Northern Mariana Islands' },
    { code: 'MQ', name: 'Martinique' },
    { code: 'MR', name: 'Mauritania' },
    { code: 'MS', name: 'Montserrat' },
    { code: 'MT', name: 'Malta' },
    { code: 'MU', name: 'Mauritius' },
    { code: 'MV', name: 'Maldives' },
    { code: 'MW', name: 'Malawi' },
    { code: 'MX', name: 'Mexico' },
    { code: 'MY', name: 'Malaysia' },
    { code: 'MZ', name: 'Mozambique' },
    { code: 'NA', name: 'Namibia' },
    { code: 'NC', name: 'New Caledonia' },
    { code: 'NE', name: 'Niger' },
    { code: 'NF', name: 'Norfolk Island' },
    { code: 'NG', name: 'Nigeria' },
    { code: 'NI', name: 'Nicaragua' },
    { code: 'NL', name: 'Netherlands' },
    { code: 'NO', name: 'Norway' },
    { code: 'NP', name: 'Nepal' },
    { code: 'NR', name: 'Nauru' },
    { code: 'NU', name: 'Niue' },
    { code: 'NZ', name: 'New Zealand' },
    { code: 'OM', name: 'Oman' },
    { code: 'PA', name: 'Panama' },
    { code: 'PE', name: 'Peru' },
    { code: 'PF', name: 'French Polynesia' },
    { code: 'PG', name: 'Papua New Guinea' },
    { code: 'PH', name: 'Philippines' },
    { code: 'PK', name: 'Pakistan' },
    { code: 'PL', name: 'Poland' },
    { code: 'PM', name: 'Saint Pierre and Miquelon' },
    { code: 'PN', name: 'Pitcairn' },
    { code: 'PR', name: 'Puerto Rico' },
    { code: 'PS', name: 'State of Palestine' },
    { code: 'PT', name: 'Portugal' },
    { code: 'PW', name: 'Palau' },
    { code: 'PY', name: 'Paraguay' },
    { code: 'QA', name: 'Qatar' },
    { code: 'RE', name: 'Réunion' },
    { code: 'RO', name: 'Romania' },
    { code: 'RS', name: 'Serbia' },
    { code: 'RU', name: 'Russian Federation' },
    { code: 'RW', name: 'Rwanda' },
    { code: 'SA', name: 'Saudi Arabia' },
    { code: 'SB', name: 'Solomon Islands' },
    { code: 'SC', name: 'Seychelles' },
    { code: 'SD', name: 'Sudan' },
    { code: 'SE', name: 'Sweden' },
    { code: 'SG', name: 'Singapore' },
    { code: 'SH', name: 'Saint Helena, Ascension and Tristan da Cunha' },
    { code: 'SI', name: 'Slovenia' },
    { code: 'SJ', name: 'Svalbard and Jan Mayen' },
    { code: 'SK', name: 'Slovakia' },
    { code: 'SL', name: 'Sierra Leone' },
    { code: 'SM', name: 'San Marino' },
    { code: 'SN', name: 'Senegal' },
    { code: 'SO', name: 'Somalia' },
    { code: 'SR', name: 'Suriname' },
    { code: 'SS', name: 'South Sudan' },
    { code: 'ST', name: 'Sao Tome and Principe' },
    { code: 'SV', name: 'El Salvador' },
    { code: 'SX', name: 'Sint Maarten (Dutch part)' },
    { code: 'SY', name: 'Syrian Arab Republic' },
    { code: 'SZ', name: 'Eswatini' },
    { code: 'TC', name: 'Turks and Caicos Islands' },
    { code: 'TD', name: 'Chad' },
    { code: 'TF', name: 'French Southern Territories' },
    { code: 'TG', name: 'Togo' },
    { code: 'TH', name: 'Thailand' },
    { code: 'TJ', name: 'Tajikistan' },
    { code: 'TK', name: 'Tokelau' },
    { code: 'TL', name: 'Timor-Leste' },
    { code: 'TM', name: 'Turkmenistan' },
    { code: 'TN', name: 'Tunisia' },
    { code: 'TO', name: 'Tonga' },
    { code: 'TR', name: 'Turkey' },
    { code: 'TT', name: 'Trinidad and Tobago' },
    { code: 'TV', name: 'Tuvalu' },
    { code: 'TW', name: 'Taiwan' },
    { code: 'TZ', name: 'United Republic of Tanzania' },
    { code: 'UA', name: 'Ukraine' },
    { code: 'UG', name: 'Uganda' },
    { code: 'UM', name: 'United States Minor Outlying Islands' },
    { code: 'US', name: 'United States of America' },
    { code: 'UY', name: 'Uruguay' },
    { code: 'UZ', name: 'Uzbekistan' },
    { code: 'VA', name: 'Vatican City State' },
    { code: 'VC', name: 'Saint Vincent and the Grenadines' },
    { code: 'VE', name: 'Venezuela' },
    { code: 'VG', name: 'British Virgin Islands' },
    { code: 'VI', name: 'U.S. Virgin Islands' },
    { code: 'VN', name: 'Vietnam' },
    { code: 'VU', name: 'Vanuatu' },
    { code: 'WF', name: 'Wallis and Futuna' },
    { code: 'WS', name: 'Samoa' },
    { code: 'YE', name: 'Yemen' },
    { code: 'YT', name: 'Mayotte' },
    { code: 'ZA', name: 'South Africa' },
    { code: 'ZM', name: 'Zambia' },
    { code: 'ZW', name: 'Zimbabwe' },
];

export const CURRENCY_CODES: SelectOptionsType[] = [
    { label: "AED", value: "AED" },
    { label: "AFN", value: "AFN" },
    { label: "ALL", value: "ALL" },
    { label: "AMD", value: "AMD" },
    { label: "ANG", value: "ANG" },
    { label: "AOA", value: "AOA" },
    { label: "ARS", value: "ARS" },
    { label: "AUD", value: "AUD" },
    { label: "AWG", value: "AWG" },
    { label: "AZN", value: "AZN" },
    { label: "BAM", value: "BAM" },
    { label: "BBD", value: "BBD" },
    { label: "BDT", value: "BDT" },
    { label: "BGN", value: "BGN" },
    { label: "BHD", value: "BHD" },
    { label: "BIF", value: "BIF" },
    { label: "BMD", value: "BMD" },
    { label: "BND", value: "BND" },
    { label: "BOB", value: "BOB" },
    { label: "BOV", value: "BOV" },
    { label: "BRL", value: "BRL" },
    { label: "BSD", value: "BSD" },
    { label: "BTN", value: "BTN" },
    { label: "BWP", value: "BWP" },
    { label: "BYN", value: "BYN" },
    { label: "BZD", value: "BZD" },
    { label: "CAD", value: "CAD" },
    { label: "CDF", value: "CDF" },
    { label: "CHE", value: "CHE" },
    { label: "CHF", value: "CHF" },
    { label: "CHW", value: "CHW" },
    { label: "CLF", value: "CLF" },
    { label: "CLP", value: "CLP" },
    { label: "CNY", value: "CNY" },
    { label: "COP", value: "COP" },
    { label: "COU", value: "COU" },
    { label: "CRC", value: "CRC" },
    { label: "CUP", value: "CUP" },
    { label: "CVE", value: "CVE" },
    { label: "CZK", value: "CZK" },
    { label: "DJF", value: "DJF" },
    { label: "DKK", value: "DKK" },
    { label: "DOP", value: "DOP" },
    { label: "DZD", value: "DZD" },
    { label: "EGP", value: "EGP" },
    { label: "ERN", value: "ERN" },
    { label: "ETB", value: "ETB" },
    { label: "EUR", value: "EUR" },
    { label: "FJD", value: "FJD" },
    { label: "FKP", value: "FKP" },
    { label: "GBP", value: "GBP" },
    { label: "GEL", value: "GEL" },
    { label: "GHS", value: "GHS" },
    { label: "GIP", value: "GIP" },
    { label: "GMD", value: "GMD" },
    { label: "GNF", value: "GNF" },
    { label: "GTQ", value: "GTQ" },
    { label: "GYD", value: "GYD" },
    { label: "HKD", value: "HKD" },
    { label: "HNL", value: "HNL" },
    { label: "HTG", value: "HTG" },
    { label: "HUF", value: "HUF" },
    { label: "IDR", value: "IDR" },
    { label: "ILS", value: "ILS" },
    { label: "INR", value: "INR" },
    { label: "IQD", value: "IQD" },
    { label: "IRR", value: "IRR" },
    { label: "ISK", value: "ISK" },
    { label: "JMD", value: "JMD" },
    { label: "JOD", value: "JOD" },
    { label: "JPY", value: "JPY" },
    { label: "KES", value: "KES" },
    { label: "KGS", value: "KGS" },
    { label: "KHR", value: "KHR" },
    { label: "KMF", value: "KMF" },
    { label: "KPW", value: "KPW" },
    { label: "KRW", value: "KRW" },
    { label: "KWD", value: "KWD" },
    { label: "KYD", value: "KYD" },
    { label: "KZT", value: "KZT" },
    { label: "LAK", value: "LAK" },
    { label: "LBP", value: "LBP" },
    { label: "LKR", value: "LKR" },
    { label: "LRD", value: "LRD" },
    { label: "LSL", value: "LSL" },
    { label: "LYD", value: "LYD" },
    { label: "MAD", value: "MAD" },
    { label: "MDL", value: "MDL" },
    { label: "MGA", value: "MGA" },
    { label: "MKD", value: "MKD" },
    { label: "MMK", value: "MMK" },
    { label: "MNT", value: "MNT" },
    { label: "MOP", value: "MOP" },
    { label: "MRU", value: "MRU" },
    { label: "MUR", value: "MUR" },
    { label: "MVR", value: "MVR" },
    { label: "MWK", value: "MWK" },
    { label: "MXN", value: "MXN" },
    { label: "MXV", value: "MXV" },
    { label: "MYR", value: "MYR" },
    { label: "MZN", value: "MZN" },
    { label: "NAD", value: "NAD" },
    { label: "NGN", value: "NGN" },
    { label: "NIO", value: "NIO" },
    { label: "NOK", value: "NOK" },
    { label: "NPR", value: "NPR" },
    { label: "NZD", value: "NZD" },
    { label: "OMR", value: "OMR" },
    { label: "PAB", value: "PAB" },
    { label: "PEN", value: "PEN" },
    { label: "PGK", value: "PGK" },
    { label: "PHP", value: "PHP" },
    { label: "PKR", value: "PKR" },
    { label: "PLN", value: "PLN" },
    { label: "PYG", value: "PYG" },
    { label: "QAR", value: "QAR" },
    { label: "RON", value: "RON" },
    { label: "RSD", value: "RSD" },
    { label: "RUB", value: "RUB" },
    { label: "RWF", value: "RWF" },
    { label: "SAR", value: "SAR" },
    { label: "SBD", value: "SBD" },
    { label: "SCR", value: "SCR" },
    { label: "SDG", value: "SDG" },
    { label: "SEK", value: "SEK" },
    { label: "SGD", value: "SGD" },
    { label: "SHP", value: "SHP" },
    { label: "SLE", value: "SLE" },
    { label: "SOS", value: "SOS" },
    { label: "SRD", value: "SRD" },
    { label: "SSP", value: "SSP" },
    { label: "STN", value: "STN" },
    { label: "SVC", value: "SVC" },
    { label: "SYP", value: "SYP" },
    { label: "SZL", value: "SZL" },
    { label: "THB", value: "THB" },
    { label: "TJS", value: "TJS" },
    { label: "TMT", value: "TMT" },
    { label: "TND", value: "TND" },
    { label: "TOP", value: "TOP" },
    { label: "TRY", value: "TRY" },
    { label: "TTD", value: "TTD" },
    { label: "TWD", value: "TWD" },
    { label: "TZS", value: "TZS" },
    { label: "UAH", value: "UAH" },
    { label: "UGX", value: "UGX" },
    { label: "USD", value: "USD" },
    { label: "USN", value: "USN" },
    { label: "UYI", value: "UYI" },
    { label: "UYU", value: "UYU" },
    { label: "UYW", value: "UYW" },
    { label: "UZS", value: "UZS" },
    { label: "VED", value: "VED" },
    { label: "VES", value: "VES" },
    { label: "VND", value: "VND" },
    { label: "VUV", value: "VUV" },
    { label: "WST", value: "WST" },
    { label: "XAF", value: "XAF" },
    { label: "XCD", value: "XCD" },
    { label: "XOF", value: "XOF" },
    { label: "XPF", value: "XPF" },
    { label: "YER", value: "YER" },
    { label: "ZAR", value: "ZAR" },
    { label: "ZMW", value: "ZMW" },
    { label: "ZWG", value: "ZWG" },
]

/**
 * An array of metric objects used for tracking various YouTube video statistics.
 * Each metric object contains a label and a value.
 * 
 * @constant {Array<Object>}
 * @property {string} label - The display name of the metric.
 * @property {string} value - The key used to identify the metric.
 */
export const METRICS: SelectOptionsType[] = [
    { label: "Views", value: "views" },
    { label: "Comments", value: "comments" },
    { label: "Likes", value: "likes" },
    { label: "Dislikes", value: "dislikes" },
    { label: "Estimated Minutes Watched", value: "estimatedMinutesWatched" },
    { label: "Average View Duration", value: "averageViewDuration" },
    { label: "Average View Percentage", value: "averageViewPercentage" },
    { label: "Subscribers Gained", value: "subscribersGained" },
    { label: "Subscribers Lost", value: "subscribersLost" },
    { label: "Estimated Revenue", value: "estimatedRevenue" }
];

export const TOOLS = [
    {
        label: "Title Generator",
        value: "title-generator",
        icon: Type,
        description: "Title generator is a tool that helps you to generate the SEO optimized Title."
    },
    {
        label: "A/B Title Tester",
        value: "title-ab-tester",
        icon: Split,
        description: "Test 2-5 title variations before uploading and get AI CTR predictions, curiosity & clarity scores, and hybrid titles."
    },
    {
        label: "Description Generator",
        value: "description-generator",
        icon: Text,
        description: "Description generator is a tool that helps you to generate the SEO optimized Description."
    },
    {
        label: "Script Hook Generator",
        value: "script-hook-generator",
        icon: Sparkles,
        description: "Generate high-retention 15-30 second video opening hooks and scripts that stop viewer drop-off instantly."
    },
    {
        label: "Video Outline Builder",
        value: "video-outline-builder",
        icon: ListTree,
        description: "Generate structured long-form YouTube video outlines with exact timestamps, talking points, B-roll suggestions, and chapter titles."
    },
    {
        label: "Tag Generator",
        value: "tag-generator",
        icon: Tag,
        description: "Tag generator is a tool that helps you to generate the SEO optimized Tags."
    },
    {
        label: "Hashtag Generator",
        value: "hashtag-generator",
        icon: Hash,
        description: "Hashtag generator is a tool that helps you to generate the SEO optimized Hashtags."
    },

    {
        label: "Thumbnail Generator",
        value: "thumbnail-generator",
        icon: BookImage,
        description: "Thumbnail generator helps you design high-CTR thumbnails with AI-driven concepts, visual layouts, and Midjourney prompts."
    },
    {
        label: "Thumbnail Quality Checker",
        value: "thumbnail-quality-checker",
        icon: ImageUp,
        description: "Thumbnail quality checker is a tool that will analyze your thumbnail Seo and tell you whether it is ready for publication or not by suggesting the needed edits."
    },
    {
        label: "Thumbnail Guide",
        value: "thumbnail-guide",
        icon: BookImage,
        description: "Thumbnail guide is a tool that will analyze your thumbnail Seo and tell you whether it is ready for publication or not by suggesting the needed edits."
    },
    {
        label: "GO / NO-GO Predictor",
        value: "go-no-go-predictor",
        icon: FileSearch,
        description: "Get data-backed prediction on whether your YouTube video idea will work or not with AI-powered recommendations."
    },
    {
        label: "Topic Ideas",
        value: "topic-ideas",
        icon: Lightbulb,
        description: "Topic Ideas is a tool that will analyze your thumbnail Seo and tell you whether it is ready for publication or not by suggesting the needed edits."
    },
    {
        label: "Keyword Research",
        value: "keyword-research",
        icon: FileSearch,
        description: "Keyword Research is a tool that will help you to find the best keyword for your next video topic."
    },
];

/**
 * An array of essential tasks for creating and optimizing YouTube videos.
 * Each task includes a title and a description.
 * 
 * @constant {Array<Object>} ESSENTIAL_TASK
 * @property {string} ESSENTIAL_TASK[].title - The title of the task.
 * @property {string} ESSENTIAL_TASK[].description - The description of the task.
 */
export const ESSENTIAL_TASK = [
    {
        title: "Create a Good Title",
        description: "Create a title that is engaging and descriptive. It should be relevant to the content of the video and attract viewers' attention."
    },
    {
        title: "Write an Engaging Description",
        description: "Write a detailed description of the video that includes relevant keywords and phrases. This will help improve the video's visibility and reach on YouTube."
    },
    {
        title: "Generate Relevant Tags",
        description: "Use relevant tags that describe the content of the video. This will help YouTube categorize and recommend your video to viewers interested in similar content."
    },
    {
        title: "Create Effective Hashtags",
        description: "Use hashtags that are relevant to the video content and target audience. This will help increase the video's visibility and reach on YouTube."
    },
    {
        title: "Prepare a Detailed Script",
        description: "Create a detailed script that outlines the video content, structure, and key points. This will help ensure a clear and engaging presentation."
    },
    {
        title: "Research Targeted Keywords",
        description: "Research and identify targeted keywords that are relevant to the video content. This will help improve the video's searchability and ranking on YouTube."
    },
];

/**
 * VIDEO_AUDITOR_FILTER is an array of objects representing different filter options
 * for video analytics. Each filter option has a label and a corresponding value.
 *
 * @constant
 * @type {SelectOptionsType[]}
 * @default
 * [
 *   { label: "Location", value: "countryWiseVideoAnalytics" },
 *   { label: "Age Group", value: "ageGroupWiseVideoAnalytics" },
 *   { label: "Device", value: "deviceWiseVideoAnalytics" },
 *   { label: "Traffic Source", value: "trafficSourceTypeWiseVideoAnalytics" }
 * ]
 *
 * @property {string} label - The display name of the filter option.
 * @property {string} value - The value used for the filter option in analytics.
 */
export const VIDEO_AUDITOR_FILTER: SelectOptionsType[] = [
    { label: "Location", value: "countryWiseVideoAnalytics" },
    { label: "Age Group", value: "ageGroupWiseVideoAnalytics" },
    { label: "Device", value: "deviceWiseVideoAnalytics" },
    { label: "Traffic Source", value: "trafficSourceTypeWiseVideoAnalytics" }
]

/**
 * An array of date filter options for the SERP API.
 * Each option includes a value and a label.
 * 
 * @constant {SelectOptionsType[]} SERP_API_DATE_FILTER
 * @type {Array}
 * @property {string} value - The value representing the date range for the filter.
 * @property {string} label - The label describing the date range for the filter.
 * 
 * @example
 * // Example usage:
 * const filters = SERP_API_DATE_FILTER;
 * console.log(filters[0].label); // Output: "Past 7 days"
 */
export const SERP_API_DATE_FILTER: SelectOptionsType[] = [
    { value: "now 7-d", label: "Past 7 days" },
    { value: "today 1-m", label: "Past 30 days" },
    { value: "today 3-m", label: "Past 90 days" },
    { value: "today 12-m", label: "Past 12 months" },
    { value: "today 5-y", label: "Past 5 years" },
    { value: "all", label: "2004 - present" },
]

/**
 * A constant array of objects representing categories for the SERP API.
 * Each object contains a `value` and a `label` property.
 *
 * @constant
 * @type {SelectOptionsType[]}
 * @property {string} value - The unique identifier for the category.
 * @property {string} label - The human-readable name of the category.
 * 
 * @example
 * // Example usage:
 * const categories = SERP_API_CATEGORIES;
 * console.log(categories[0].label); // Outputs: "All categories"
 */
export const SERP_API_CATEGORIES: SelectOptionsType[] = [
    { value: "0", label: "All categories" },
    { value: "3", label: "Arts & Entertainment" },
    { value: "47", label: "Autos & Vehicles" },
    { value: "44", label: "Beauty & Fitness" },
    { value: "22", label: "Books & Literature" },
    { value: "12", label: "Business & Industrial" },
    { value: "5", label: "Computers & Electronics" },
    { value: "7", label: "Finance" },
    { value: "71", label: "Food & Drink" },
    { value: "8", label: "Games" },
    { value: "45", label: "Health" },
    { value: "65", label: "Hobbies & Leisure" },
    { value: "11", label: "Home & Garden" },
    { value: "13", label: "Internet & Telecom" },
    { value: "958", label: "Jobs & Education" },
    { value: "19", label: "Law & Government" },
    { value: "16", label: "News" },
    { value: "299", label: "Online Communities" },
    { value: "14", label: "People & Society" },
    { value: "66", label: "Pets & Animals" },
    { value: "29", label: "Real Estate" },
    { value: "533", label: "Reference" },
    { value: "174", label: "Science" },
    { value: "18", label: "Shopping" },
    { value: "20", label: "Sports" },
    { value: "67", label: "Travel" },
]

/**
 * A list of search sources for the SERP API.
 * Each source is represented by an object containing a value and a label.
 * 
 * @constant {Array<{ value: string, label: string }>} SERP_API_SOURCE_LIST
 * @property {string} value - The identifier for the search source.
 * @property {string} label - The human-readable name for the search source.
 * 
 * @example
 * // Accessing the label of the first search source
 * console.log(SERP_API_SOURCE_LIST[0].label); // Output: "Web Search"
 */
export const SERP_API_SOURCE_LIST: SelectOptionsType[] = [
    { value: "web", label: "Web Search" },
    { value: "images", label: "Image Search" },
    { value: "news", label: "News Search" },
    { value: "froogle", label: "Google Shopping" },
    { value: "youtube", label: "YouTube Search" },
]

/**
 * A mapping of German time units to their English equivalents.
 * 
 * This constant object provides a translation from German time unit
 * strings to their corresponding English terms. It includes singular
 * and plural forms for various time units such as months, weeks, days,
 * hours, minutes, and years.
 * 
 * @constant
 * @type {Object.<string, string>}
 * @property {string} Monat - Translates to 'month'.
 * @property {string} Monaten - Translates to 'months'.
 * @property {string} Woche - Translates to 'week'.
 * @property {string} Wochen - Translates to 'weeks'.
 * @property {string} Tag - Translates to 'day'.
 * @property {string} Tagen - Translates to 'days'.
 * @property {string} Stunde - Translates to 'hour'.
 * @property {string} Stunden - Translates to 'hours'.
 * @property {string} Minute - Translates to 'minute'.
 * @property {string} Minuten - Translates to 'minutes'.
 * @property {string} Jahr - Translates to 'year'.
 * @property {string} Jahren - Translates to 'years'.
 */
export const GERMAN_TO_ENGLISH_UNIT_MAP: GermanToEnglishMapType = {
    'Monat': 'month',
    'Monaten': 'months',
    'Woche': 'week',
    'Wochen': 'weeks',
    'Tag': 'day',
    'Tagen': 'days',
    'Stunde': 'hour',
    'Stunden': 'hours',
    'Minute': 'minute',
    'Minuten': 'minutes',
    'Jahr': 'year',
    'Jahren': 'years',
};

/**
 * A constant array of suggested actions for a user to interact with.
 * Each action provides a title, a label for display, and the corresponding action text.
 *
 * @constant
 * @type {SuggestedActionType[]}
 * @property {string} title - The title of the suggested action.
 * @property {string} label - A user-friendly label describing the action.
 * @property {string} action - The specific action text associated with the suggestion.
 */
export const SUGGESTED_ACTIONS: SuggestedActionType[] = [
    {
        title: 'Check channel performance',
        label: 'How is my channel performing?',
        action: 'How is my channel performing?',
    },
    {
        title: 'Get audience insights',
        label: 'What are my audience demographics?',
        action: 'What are my audience demographics?',
    },
    {
        title: 'Video suggestions',
        label: 'Suggest content ideas for my channel',
        action: 'Suggest content ideas for my channel.',
    },
    {
        title: 'Engagement metrics',
        label: 'What is my video engagement rate?',
        action: 'What is my video engagement rate?',
    },
];

export const PLAN_OPTIONS: PlanOptionsType = {
    monthly: [
        {
            planCode: "free",
            planName: "free",
            planDescription: "Free trial. Limited access.",
            isItPopular: false,
            currentPrice: 0,
            currency: "USD",
            currencySymbol: "$",
            priceDescription: "Perfect for beginners or small creators",
            buttonDescription: "Lifetime free. No charges.",
            featureHeading: "Includes:",
            features: [
                {
                    featureName: "Title Generator Tool:",
                    featureDescription: "Basic input fields"
                },
                {
                    featureName: "Description Generator Tool:",
                    featureDescription: "Basic input fields"
                },
                {
                    featureName: "Tag Generator Tool:",
                    featureDescription: "Basic input fields"
                },
                {
                    featureName: "Hashtag Generator Tool:",
                    featureDescription: "Basic input fields"
                },
                {
                    featureName: "Script Generator Tool:",
                    featureDescription: "Basic input fields with a standard response"
                },
                {
                    featureName: "Thumbnail Guide Tool:",
                    featureDescription: "Full access"
                },
                {
                    featureName: "Topic Ideas Tool:",
                    featureDescription: "Based on your YouTube video link"
                },
                {
                    featureName: "Keyword Research Tool:",
                    featureDescription: "Basic keyword research with similar keyword score"
                },
                {
                    featureName: "YouTube Channel Integration:",
                    featureDescription: "Add one channel"
                },
                {
                    featureName: "Dashboard Access:",
                    featureDescription: "View basic channel stats"
                },
                {
                    featureName: "Channel Auditor Report:",
                    featureDescription: "Churn, retention, sharing, view %, like/dislike, and subscriber growth"
                },
                {
                    featureName: "Channel Performance:",
                    featureDescription: "View last 30 days' performance graph"
                },
                {
                    featureName: "Channel Analytics:",
                    featureDescription: "Analytics graphs access"
                },
                {
                    featureName: "Video Auditor Tool:",
                    featureDescription: "Basic video stats"
                }
            ]
        },
        {
            planCode: "standard_monthly",
            planName: "standard",
            planDescription: "For creators ready to grow",
            isItPopular: true,
            currentPrice: 5,
            originalPrice: 7,
            currency: "USD",
            currencySymbol: "$",
            priceDescription: "For creators ready to grow",
            buttonDescription: "Billed monthly. Cancel anytime.",
            featureHeading: "Everything in Basic Plan, plus:",
            features: [
                {
                    featureName: "Advanced Title Generator:",
                    featureDescription: "More input fields for better titles"
                },
                {
                    featureName: "Advanced Description Generator:",
                    featureDescription: "All-in-one, smarter descriptions"
                },
                {
                    featureName: "Video Optimization Tool:",
                    featureDescription: "Boost video reach and engagement"
                },
                {
                    featureName: "Advanced Keyword Research Tool:",
                    featurePoints: [
                        "Trending keywords",
                        "Detailed single keyword research",
                        "Advanced score based on your channel",
                        "Competitor keyword score"
                    ]
                },
                {
                    featureName: "Thumbnail Quality Checker:",
                    featureDescription: "Personalized improvement tips"
                },
                {
                    featureName: "Content Research Tool:",
                    featureDescription: "Discover content ideas and trends"
                },
                {
                    featureName: "Channel Auditor Feedback Tool:",
                    featureDescription: "Get improvement suggestions"
                },
                {
                    featureName: "Analytics Forecasting Tool:",
                    featureDescription: "1-month performance forecasting"
                },
                {
                    featureName: "ChurnShield Tool:",
                    featureDescription: "Subscriber churn prediction"
                },
                {
                    featureName: "Competitor Analytics:",
                    featureDescription: "Insights into competitor performance"
                },
                {
                    featureName: "Video Production Tool:",
                    featureDescription: "Tools to enhance your video creation"
                },
                {
                    featureName: "Video Auditor Tool:",
                    featureDescription: "Full audit, optimization score & suggestions"
                },
            ]
        }
    ],
    yearly: [
        {
            planCode: "free",
            planName: "free",
            planDescription: "Free trial. Limited access.",
            isItPopular: false,
            currentPrice: 0,
            currency: "USD",
            currencySymbol: "$",
            priceDescription: "Perfect for beginners or small creators",
            buttonDescription: "Lifetime free. No charges.",
            featureHeading: "Includes:",
            features: [
                {
                    featureName: "Title Generator Tool:",
                    featureDescription: "Basic input fields"
                },
                {
                    featureName: "Description Generator Tool:",
                    featureDescription: "Basic input fields"
                },
                {
                    featureName: "Tag Generator Tool:",
                    featureDescription: "Basic input fields"
                },
                {
                    featureName: "Hashtag Generator Tool:",
                    featureDescription: "Basic input fields"
                },
                {
                    featureName: "Script Generator Tool:",
                    featureDescription: "Basic input fields with a standard response"
                },
                {
                    featureName: "Thumbnail Guide Tool:",
                    featureDescription: "Full access"
                },
                {
                    featureName: "Topic Ideas Tool:",
                    featureDescription: "Based on your YouTube video link"
                },
                {
                    featureName: "Keyword Research Tool:",
                    featureDescription: "Basic keyword research with similar keyword score"
                },
                {
                    featureName: "YouTube Channel Integration:",
                    featureDescription: "Add one channel"
                },
                {
                    featureName: "Dashboard Access:",
                    featureDescription: "View basic channel stats"
                },
                {
                    featureName: "Channel Auditor Report:",
                    featureDescription: "Churn, retention, sharing, view %, like/dislike, and subscriber growth"
                },
                {
                    featureName: "Channel Performance:",
                    featureDescription: "View last 30 days' performance graph"
                },
                {
                    featureName: "Channel Analytics:",
                    featureDescription: "Analytics graphs access"
                },
                {
                    featureName: "Video Auditor Tool:",
                    featureDescription: "Basic video stats"
                }
            ]
        },
        {
            planCode: "standard_yearly",
            planName: "standard",
            planDescription: "For creators ready to grow",
            isItPopular: true,
            currentPrice: 5,
            originalPrice: 7,
            currency: "USD",
            currencySymbol: "$",
            priceDescription: "For creators ready to grow",
            buttonDescription: "Billed monthly. Cancel anytime.",
            featureHeading: "Everything in Basic Plan, plus:",
            features: [
                {
                    featureName: "Advanced Title Generator:",
                    featureDescription: "More input fields for better titles"
                },
                {
                    featureName: "Advanced Description Generator:",
                    featureDescription: "All-in-one, smarter descriptions"
                },
                {
                    featureName: "Video Optimization Tool:",
                    featureDescription: "Boost video reach and engagement"
                },
                {
                    featureName: "Advanced Keyword Research Tool:",
                    featurePoints: [
                        "Trending keywords",
                        "Detailed single keyword research",
                        "Advanced score based on your channel",
                        "Competitor keyword score"
                    ]
                },
                {
                    featureName: "Thumbnail Quality Checker:",
                    featureDescription: "Personalized improvement tips"
                },
                {
                    featureName: "Content Research Tool:",
                    featureDescription: "Discover content ideas and trends"
                },
                {
                    featureName: "Channel Auditor Feedback Tool:",
                    featureDescription: "Get improvement suggestions"
                },
                {
                    featureName: "Analytics Forecasting Tool:",
                    featureDescription: "1-month performance forecasting"
                },
                {
                    featureName: "ChurnShield Tool:",
                    featureDescription: "Subscriber churn prediction"
                },
                {
                    featureName: "Competitor Analytics:",
                    featureDescription: "Insights into competitor performance"
                },
                {
                    featureName: "Video Production Tool:",
                    featureDescription: "Tools to enhance your video creation"
                },
                {
                    featureName: "Video Auditor Tool:",
                    featureDescription: "Full audit, optimization score & suggestions"
                },
            ]
        }
    ]
}