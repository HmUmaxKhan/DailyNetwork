import React from "react";
import "./Navbar.css";
export default function Countries(props) {
  return (
    <div className="button">
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="/"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown
        </a>
        <ul className="dropdown-menu">
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("ae")}
            >
              United Arab Emirates (ae)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("ar")}
            >
              Argentina (ar)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("at")}
            >
              Austria (at)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("au")}
            >
              Australia (au)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("be")}
            >
              Belgium (be)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("bg")}
            >
              Bulgaria (bg)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("br")}
            >
              Brazil (br)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("ca")}
            >
              Canada (ca)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("ch")}
            >
              Switzerland (ch)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("cn")}
            >
              China (cn)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("co")}
            >
              Colombia (co)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("cu")}
            >
              Cuba (cu)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("cz")}
            >
              Czech Republic (cz)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("de")}
            >
              Germany (de)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("eg")}
            >
              Egypt (eg)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("fr")}
            >
              France (fr)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("gb")}
            >
              United Kingdom (gb)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("gr")}
            >
              Greece (gr)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("hk")}
            >
              Hong Kong (hk)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("hu")}
            >
              Hungary (hu)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("id")}
            >
              Indonesia (id)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("ie")}
            >
              Ireland (ie)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("il")}
            >
              Israel (il)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("in")}
            >
              India (in)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("it")}
            >
              Italy (it)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("jp")}
            >
              Japan (jp)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("kr")}
            >
              South Korea (kr)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("lt")}
            >
              Lithuania (lt)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("lv")}
            >
              Latvia (lv)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("ma")}
            >
              Morocco (ma)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("mx")}
            >
              Mexico (mx)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("my")}
            >
              Malaysia (my)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("ng")}
            >
              Nigeria (ng)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("nl")}
            >
              Netherlands (nl)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("no")}
            >
              Norway (no)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("nz")}
            >
              New Zealand (nz)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("ph")}
            >
              Philippines (ph)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("pl")}
            >
              Poland (pl)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("pt")}
            >
              Portugal (pt)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("ro")}
            >
              Romania (ro)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("rs")}
            >
              Serbia (rs)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("ru")}
            >
              Russia (ru)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("sa")}
            >
              Saudi Arabia (sa)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("se")}
            >
              Sweden (se)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("sg")}
            >
              Singapore (sg)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("si")}
            >
              Slovenia (si)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("sk")}
            >
              Slovakia (sk)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("th")}
            >
              Thailand (th)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("tr")}
            >
              Turkey (tr)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("tw")}
            >
              Taiwan (tw)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("ua")}
            >
              Ukraine (ua)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("us")}
            >
              United States (us)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("ve")}
            >
              Venezuela (ve)
            </button>
          </li>
          <li>
            <button
              className="btn btn-link btn-sm"
              type="submit"
              onClick={() => props.country("za")}
            >
              South Africa (za)
            </button>
          </li>
        </ul>
      </li>
    </div>
  );
}
