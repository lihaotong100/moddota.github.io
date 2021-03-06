import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";

export function StaticVideo({ path, controls = false }: { path: string; controls: boolean }) {
    return (
        <video width="100%" height="100%" autoPlay muted loop controls={controls}>
            <source src={useBaseUrl(path)} type="video/mp4"></source>
        </video>
    );
}
