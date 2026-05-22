// Заглушка — только для тестирования вне LMS
if (!window.API) {
  window.API = {
    LMSInitialize: () => "true",
    LMSSetValue:   (k, v) => { console.log("SCORM set:", k, v); return "true"; },
    LMSCommit:     () => "true",
    LMSFinish:     () => "true",
    LMSGetValue:   () => "",
    LMSGetLastError: () => "0",
    LMSGetErrorString: () => "",
    LMSGetDiagnostic: () => ""
  };
}
