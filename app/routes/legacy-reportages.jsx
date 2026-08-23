import { Navigate, useLocation } from "react-router";

// Keep old shared links working while the public section moves to /realisations.
export default function LegacyReportages() {
  const { pathname } = useLocation();
  return <Navigate replace to={pathname.replace(/^\/reportages/, "/realisations")} />;
}
