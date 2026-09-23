import { useState } from "react";
import { UserRound, MapPin } from "lucide-react";
import { toast } from "react-toastify";

const Player = ({
  player,
  setAvilableBalance,
  availableBalance,
  selectplayer,
  setSelectPlayer,
}) => {
  const [selected, setSelected] = useState(false);

  const {
    name,
    country,
    role,
    image,
    price,
    bowlingStyle,
    battingStyle,
    rating,
  } = player;

  const handleSelectPlayer = (player) => {
    // ১. আগেই সিলেক্ট করা থাকলে কিছু করবে না
    if (selected) {
      toast.info("Player already selected!");
      return;
    }
    if (selected >= 6) {
      alert("Sorry! You can't add more players")
      return;
    }

    // ২. পর্যাপ্ত ব্যালেন্স আছে কিনা চেক
    if (availableBalance < player.price) {
      toast.error("Not Enough Balance!");
      return;
    }

    // ৩. ব্যালেন্স আপডেট এবং প্লেয়ার যুক্ত করা
    setAvilableBalance(availableBalance - player.price);
    setSelectPlayer([...selectplayer, player]);
    setSelected(true);
    toast.success(`${name} added to your team!`);
  };

  return (
    <div className="p-4 shadow-xl rounded-2xl border border-gray-100 bg-white flex flex-col justify-between">
      <div>
        {/* Image Section */}
        <img
          className="rounded-xl w-full h-52 object-cover"
          src={image}
          alt={name}
        />

        {/* Player Name & Country */}
        <h3 className="font-bold text-lg mt-4 flex items-center gap-2 text-gray-800">
          <UserRound className="w-5 h-5 text-gray-600" />
          {name}
        </h3>
        <p className="flex items-center gap-2 text-gray-500 text-sm mt-1">
          <MapPin className="w-4 h-4 text-gray-400" />
          {country}
        </p>

        {/* Details Section */}
        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg mt-4 text-sm font-medium">
          <p className="text-gray-600">Role: <span className="text-gray-800 font-semibold">{role}</span></p>
          <p className="text-gray-600">Rating: <span className="text-amber-500 font-bold">{rating}</span></p>
        </div>

        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg mt-2 text-sm text-gray-600">
          <p><span className="font-medium text-gray-800">Bowling:</span> {bowlingStyle}</p>
          <p><span className="font-medium text-gray-800">Batting:</span> {battingStyle}</p>
        </div>
      </div>

      {/* Price & Action Button */}
      <div className="flex justify-between items-center mt-5 pt-3 border-t border-gray-100">
        <h3 className="font-bold text-lg text-gray-900">${price}</h3>
        <button
          disabled={selected}
          onClick={() => handleSelectPlayer(player)}
          className={`py-2 px-5 rounded-xl font-semibold transition-all duration-200 ${
            selected
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-amber-400 hover:bg-amber-500 text-gray-900 shadow-md active:scale-95"
          }`}
        >
          {selected ? "Selected" : "Choose Player"}
        </button>
      </div>
    </div>
  );
};

export default Player;