import { useState } from "react";

type IconName =
  | "backpack"
  | "bolt"
  | "cart"
  | "chevron"
  | "close"
  | "gear"
  | "group"
  | "headset"
  | "home"
  | "plus"
  | "search"
  | "shirt"
  | "trophy";

const iconPaths: Record<IconName, React.ReactNode> = {
  home: (
    <>
      <path d="m3 10 9-7 9 7" />
      <path d="M5 9v11h14V9M9 20v-6h6v6" />
    </>
  ),
  backpack: (
    <>
      <path d="M7 8V6a5 5 0 0 1 10 0v2" />
      <rect x="4" y="8" width="16" height="13" rx="3" />
      <path d="M8 12h8M9 8V5h6v3" />
    </>
  ),
  shirt: <path d="m8 4-5 3 2 5 3-1v9h8v-9l3 1 2-5-5-3c-.5 1.3-1.8 2-4 2S8.5 5.3 8 4Z" />,
  cart: (
    <>
      <path d="M3 4h2l2.2 11h10.7l2-7H6" />
      <circle cx="9" cy="20" r="1" />
      <circle cx="17" cy="20" r="1" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" />
    </>
  ),
  trophy: (
    <>
      <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
      <path d="M8 6H4v2a4 4 0 0 0 5 4M16 6h4v2a4 4 0 0 1-5 4M12 13v4M8 21h8M9 17h6v4" />
    </>
  ),
  group: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20v-2a6 6 0 0 1 12 0v2M16 4a3 3 0 0 1 0 6M17 13a5 5 0 0 1 4 5v2" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m16 16 5 5" />
    </>
  ),
  close: <path d="m6 6 12 12M18 6 6 18" />,
  headset: (
    <>
      <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
      <path d="M4 14h3v6H5a1 1 0 0 1-1-1v-5ZM20 14h-3v6h2a1 1 0 0 0 1-1v-5ZM17 20c0 1-1 2-3 2h-2" />
    </>
  ),
  bolt: <path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z" />,
  chevron: <path d="m9 6 6 6-6 6" />,
};

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {iconPaths[name]}
    </svg>
  );
}

const friends = [
  { name: "RogueFox", status: "In Lobby", color: "#ffbd2e", initials: "RF", online: true },
  {
    name: "KiraByte",
    status: "Battle Royale • 12m",
    color: "#d94dff",
    initials: "KB",
    online: true,
  },
  { name: "Axel", status: "In Match • 21 left", color: "#48c7ff", initials: "AX", online: true },
  { name: "Moonshot", status: "Offline", color: "#7a8495", initials: "MS", online: false },
];

function Character() {
  return (
    <svg
      className="character"
      viewBox="0 0 430 590"
      role="img"
      aria-label="Cartoon survival operative holding a rifle"
    >
      <defs>
        <linearGradient id="jacket" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#52616d" />
          <stop offset="1" stopColor="#202b34" />
        </linearGradient>
        <linearGradient id="pants" x1="0" x2="0" y1="0" y2="1">
          <stop stopColor="#31414b" />
          <stop offset="1" stopColor="#11191f" />
        </linearGradient>
        <linearGradient id="gun" x1="0" x2="1">
          <stop stopColor="#171f24" />
          <stop offset=".5" stopColor="#3e4e55" />
          <stop offset="1" stopColor="#141b1f" />
        </linearGradient>
        <filter id="shadow">
          <feDropShadow dx="0" dy="9" stdDeviation="5" floodOpacity=".35" />
        </filter>
      </defs>
      <ellipse cx="220" cy="557" rx="128" ry="24" fill="#071019" opacity=".7" />
      <g filter="url(#shadow)" stroke="#111a20" strokeWidth="7" strokeLinejoin="round">
        <path
          fill="url(#pants)"
          d="M148 343 130 500l-15 36 63 2 20-166 18 1 25 165h64l-18-40-14-154Z"
        />
        <path fill="#1b272e" d="m130 500-16 36 64 2 5-39Z" />
        <path fill="#1b272e" d="m240 499 2 39h64l-19-40Z" />
        <path fill="#b7d82d" d="m139 285-5 76 143 1-2-78-37-21-64-2Z" />
        <path
          fill="url(#jacket)"
          d="m159 214-46 37 24 100 55-18 30 10 56-5 21-91-48-35-26 20-40-2Z"
        />
        <path fill="#29363e" d="m113 251-34 106 40 15 31-86Z" />
        <path fill="#d69b62" d="m82 353-9 29c-3 11 5 22 16 23l11 1c8 0 14-7 12-15l-4-24Z" />
        <path fill="#29363e" d="m297 246 37 95-40 17-34-76Z" />
        <path fill="#d69b62" d="m331 334 12 28c4 10-3 22-14 24l-11 2c-8 1-15-5-14-13l2-25Z" />
        <path fill="#d69b62" d="m175 207 3 30c5 17 53 18 56-3l-2-34Z" />
        <path
          fill="#e1a66d"
          d="M164 125c-9 17-5 67 12 84 20 20 60 12 72-15 8-18 9-58-8-73-19-17-63-16-76 4Z"
        />
        <path
          fill="#202b31"
          d="M157 145c0-43 29-66 68-58 27 6 40 27 32 66l-17-31c-26 10-49 12-68 6l-9 25Z"
        />
        <path fill="#35434b" d="M156 130c5-35 30-53 66-48 26 3 42 22 40 51-33-13-68-13-106-3Z" />
        <path fill="#91b820" d="M154 130c35-14 72-13 110 2l-3 17c-36-11-71-12-106-2Z" />
        <path fill="#1e292f" d="M165 118c8-30 35-42 59-35-3 22-23 35-59 35Z" />
        <path fill="#d69b62" d="M163 153c-15-8-17 24 2 25M248 153c15-8 17 24-2 25" />
      </g>
      <g fill="none" stroke="#172027" strokeLinecap="round">
        <path d="M183 158c6-4 12-4 18 0M221 158c6-4 12-4 17 0" strokeWidth="5" />
        <circle cx="192" cy="161" r="3" fill="#172027" />
        <circle cx="229" cy="161" r="3" fill="#172027" />
        <path d="M203 184c9 5 17 4 24-2" strokeWidth="4" />
      </g>
      <g stroke="#0e1519" strokeWidth="6" strokeLinejoin="round">
        <path fill="url(#gun)" d="m78 293 226-43 8 35-222 54-12-12Z" />
        <path fill="#26343b" d="m300 248 72-9 7 16-68 28Z" />
        <path fill="#172127" d="m172 282 58-12 4 15-58 13Z" />
        <path fill="#222e34" d="m214 291 31-3 11 63-24 4Z" />
        <path fill="#202c32" d="m130 311 39-7-21 57-25 5Z" />
        <path fill="#b7d82d" d="m227 269 59-11 5 10-61 13Z" />
      </g>
      <g fill="#d69b62" stroke="#111a20" strokeWidth="6">
        <path d="M144 286c12-9 26-3 31 8l9 20-31 11-18-18c-7-7-3-16 9-21Z" />
        <path d="M274 286c-8-8-20-6-25 3l-9 17 27 10 15-14c6-6 3-12-8-16Z" />
      </g>
      <g stroke="#111a20" strokeWidth="6">
        <path fill="#51636d" d="M173 245h67l4 76-72 1Z" />
        <path fill="#25323a" d="M183 257h20v47h-20zM211 257h20v47h-20z" />
        <path fill="#b7d82d" d="M203 257h8v47h-8z" />
      </g>
    </svg>
  );
}

export default function App() {
  const [active, setActive] = useState("Lobby");
  const [queue, setQueue] = useState(false);
  const [friendsOpen, setFriendsOpen] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [mode, setMode] = useState("SQUADS");

  const nav = [
    ["Lobby", "home"],
    ["Inventory", "backpack"],
    ["Skins", "shirt"],
    ["Shop", "cart"],
  ] as [string, IconName][];

  return (
    <main className="game-shell">
      <div className="world-map" aria-hidden="true">
        <span className="terrain t1" />
        <span className="terrain t2" />
        <span className="terrain t3" />
        <span className="road r1" />
        <span className="road r2" />
        {Array.from({ length: 12 }).map((_, i) => (
          <span className={`tree tree-${i + 1}`} key={i} />
        ))}
      </div>

      <header className="topbar">
        <button className="brand" onClick={() => setActive("Lobby")} aria-label="Back to lobby">
          <span className="brand-mark">
            <Icon name="bolt" size={27} />
          </span>
          <span>
            <b>LAST</b>
            <strong>STAND</strong>
          </span>
        </button>
        <nav className="main-nav" aria-label="Main navigation">
          {nav.map(([label, icon]) => (
            <button
              className={active === label ? "active" : ""}
              key={label}
              onClick={() => setActive(label)}
            >
              <Icon name={icon} />
              <span>{label}</span>
              {label === "Shop" && <i>NEW</i>}
            </button>
          ))}
        </nav>
        <div className="top-actions">
          <button className="currency">
            <span className="coin">C</span>
            <b>2,450</b>
            <Icon name="plus" size={16} />
          </button>
          <button className="currency">
            <span className="gem">◆</span>
            <b>175</b>
            <Icon name="plus" size={16} />
          </button>
          <button
            className="icon-button"
            onClick={() => setSettingsOpen(true)}
            aria-label="Open settings"
          >
            <Icon name="gear" />
          </button>
        </div>
      </header>

      <section className="content">
        <aside className="left-column">
          <div className="profile-card panel">
            <div className="avatar">
              <span>RX</span>
              <i>42</i>
            </div>
            <div className="profile-copy">
              <small>ONLINE</small>
              <h2>Rex_Ranger</h2>
              <div className="xp">
                <span style={{ width: "68%" }} />
              </div>
              <p>18,240 / 26,800 XP</p>
            </div>
            <button className="more">•••</button>
          </div>

          <div className="mode-panel panel">
            <div className="panel-label">
              <Icon name="group" size={18} />
              <span>GAME MODE</span>
            </div>
            <button
              className="mode-selector"
              onClick={() =>
                setMode(mode === "SQUADS" ? "DUOS" : mode === "DUOS" ? "SOLO" : "SQUADS")
              }
            >
              <span>
                <small>BATTLE ROYALE</small>
                <b>{mode}</b>
              </span>
              <Icon name="chevron" />
            </button>
            <div className="mode-meta">
              <span>
                <i className="status-dot" /> NA EAST
              </span>
              <span>
                FILL TEAM <b>ON</b>
              </span>
            </div>
          </div>

          <div className="missions panel">
            <div className="panel-title">
              <span>DAILY MISSIONS</span>
              <small>18H 24M</small>
            </div>
            <div className="mission">
              <div className="mission-icon">
                <Icon name="trophy" size={21} />
              </div>
              <div>
                <b>Deal 2,000 damage</b>
                <div className="progress">
                  <span style={{ width: "64%" }} />
                </div>
                <small>1,280 / 2,000</small>
              </div>
              <strong>+500</strong>
            </div>
            <div className="mission">
              <div className="mission-icon green">
                <Icon name="bolt" size={20} />
              </div>
              <div>
                <b>Survive 3 matches</b>
                <div className="progress">
                  <span style={{ width: "33%" }} />
                </div>
                <small>1 / 3</small>
              </div>
              <strong>+350</strong>
            </div>
          </div>
        </aside>

        <section className="stage" aria-label="Character preview">
          <div className="season">
            <span>SEASON 04</span>
            <h1>OUTLANDS</h1>
            <p>23 DAYS REMAINING</p>
          </div>
          {active !== "Lobby" && (
            <div className="section-toast">
              <Icon name={nav.find((n) => n[0] === active)?.[1] || "home"} />
              <span>
                <small>VIEWING</small>
                {active.toUpperCase()}
              </span>
              <button onClick={() => setActive("Lobby")}>RETURN</button>
            </div>
          )}
          <div className="player-banner">
            <span className="crown">♜</span>
            <b>Rex_Ranger</b>
            <small>READY</small>
          </div>
          <div className="radar-ring ring-one" />
          <div className="radar-ring ring-two" />
          <Character />
          <div className="squad-slots">
            <button>
              <span>
                <Icon name="plus" />
              </span>
              <b>INVITE PLAYER</b>
            </button>
            <button>
              <span>
                <Icon name="plus" />
              </span>
              <b>INVITE PLAYER</b>
            </button>
            <button>
              <span>
                <Icon name="plus" />
              </span>
              <b>INVITE PLAYER</b>
            </button>
          </div>
          <div className="play-zone">
            <div className="party-state">
              <span className="status-dot" />
              <b>{queue ? "SEARCHING FOR MATCH" : "PARTY READY"}</b>
            </div>
            <button
              className={`play-button ${queue ? "queued" : ""}`}
              onClick={() => setQueue(!queue)}
            >
              <span>{queue ? "CANCEL" : "PLAY"}</span>
              <small>{queue ? "EST. 00:42" : `${mode} • BATTLE ROYALE`}</small>
            </button>
          </div>
        </section>

        <aside className={`friends-panel panel ${friendsOpen ? "" : "collapsed"}`}>
          <div className="friends-head">
            <div>
              <Icon name="group" size={19} />
              <b>FRIENDS</b>
              <span>3</span>
            </div>
            <button onClick={() => setFriendsOpen(!friendsOpen)} aria-label="Toggle friends panel">
              <Icon name={friendsOpen ? "close" : "group"} size={18} />
            </button>
          </div>
          {friendsOpen && (
            <>
              <label className="search">
                <Icon name="search" size={16} />
                <input placeholder="Search friends" />
              </label>
              <button className="invite-card">
                <span>
                  <Icon name="plus" />
                </span>
                <div>
                  <b>INVITE FRIENDS</b>
                  <small>Build your squad</small>
                </div>
              </button>
              <div className="friend-label">ONLINE — 3</div>
              <div className="friend-list">
                {friends.map((friend) => (
                  <button className={!friend.online ? "offline" : ""} key={friend.name}>
                    <span
                      className="friend-avatar"
                      style={{ "--avatar": friend.color } as React.CSSProperties}
                    >
                      {friend.initials}
                      <i />
                    </span>
                    <span>
                      <b>{friend.name}</b>
                      <small>{friend.status}</small>
                    </span>
                    {friend.online && <i className="join">+</i>}
                  </button>
                ))}
              </div>
              <button className="social-button">
                <Icon name="headset" size={18} /> OPEN SOCIAL HUB
              </button>
            </>
          )}
        </aside>
      </section>

      <footer>
        <span>
          <kbd>ESC</kbd> BACK
        </span>
        <span>
          <kbd>F1</kbd> NEWS
        </span>
        <span className="server">
          <i className="status-dot" /> SERVER: 28 MS
        </span>
        <span>BUILD 1.4.07</span>
      </footer>

      {settingsOpen && (
        <div className="modal-backdrop" onMouseDown={() => setSettingsOpen(false)}>
          <div className="settings-modal panel" onMouseDown={(e) => e.stopPropagation()}>
            <div className="settings-title">
              <div>
                <Icon name="gear" />
                <span>
                  <small>GAME OPTIONS</small>
                  <b>SETTINGS</b>
                </span>
              </div>
              <button onClick={() => setSettingsOpen(false)}>
                <Icon name="close" />
              </button>
            </div>
            <div className="setting-row">
              <span>
                <b>MASTER VOLUME</b>
                <small>Overall game audio</small>
              </span>
              <input type="range" defaultValue="72" />
            </div>
            <div className="setting-row">
              <span>
                <b>GRAPHICS QUALITY</b>
                <small>Optimized for this system</small>
              </span>
              <button className="value">
                HIGH <Icon name="chevron" size={16} />
              </button>
            </div>
            <div className="setting-row">
              <span>
                <b>VOICE CHAT</b>
                <small>Talk with your squad</small>
              </span>
              <button className="toggle on">
                <i />
              </button>
            </div>
            <button className="save-settings" onClick={() => setSettingsOpen(false)}>
              SAVE CHANGES
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
