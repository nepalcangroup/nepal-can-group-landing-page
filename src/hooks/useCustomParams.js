"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useDebounce } from "./useDebounce";

const delay = 500;

export const useCustomParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [paramsToSet, setParamsToSet] = useState(null);
  const [paramsToAppend, setParamsToAppend] = useState(null);
  const [isSetting, setIsSetting] = useState(false);

  const { debouncedValue: debouncedSetParams, isBusy: busySetting } =
    useDebounce(paramsToSet, delay);
  const { debouncedValue: debouncedAppendParams, isBusy: busyAppending } =
    useDebounce(paramsToAppend, delay);

  useEffect(() => {
    if (!paramsToSet) return;
    if (debouncedSetParams) {
      const currentParams = new URLSearchParams();

      Object.entries(debouncedSetParams).forEach(([key, value]) => {
        if (value) {
          currentParams.set(key, value);
        }
      });

      router.push(`?${currentParams.toString()}`);

      setParamsToSet(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSetParams]);

  useEffect(() => {
    if (!paramsToAppend) return;
    if (debouncedAppendParams) {
      const currentParams = new URLSearchParams(searchParams.toString());

      Object.entries(debouncedAppendParams).forEach(([key, value]) => {
        if (value) {
          currentParams.set(key, value);
        } else {
          currentParams.delete(key);
        }
      });

      router.push(`?${currentParams.toString()}`);
      setParamsToAppend(null);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedAppendParams, searchParams]);

  const getParams = useMemo(() => {
    const params = {};

    searchParams.forEach((value, key) => {
      params[key] = value;
    });

    return params;
  }, [searchParams]);

  const setParams = (newParams) => {
    setParamsToSet(newParams);
  };

  const appendParams = (newParams) => {
    setParamsToAppend(newParams);
  };

  const resetParams = () => {
    setParamsToAppend(null);
    setParamsToSet(null);
    router.push("?");
  };

  useEffect(() => {
    if (busySetting || busyAppending) {
      setIsSetting(true);
    } else {
      const timeout = setTimeout(() => {
        setIsSetting(false);
      }, 200);

      return () => clearTimeout(timeout);
    }
  }, [busySetting, busyAppending]);

  return {
    getParams,
    setParams,
    appendParams,
    resetParams,
    isSetting,
  };
};
