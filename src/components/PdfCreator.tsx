import {
  Document,
  PDFViewer,
  Page,
  StyleSheet,
  View,
  Text,
  Image,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import React, { useState, useRef } from "react";

const profile =
  "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D";

const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    gap: 30,
    padding: 20,
    width: 400,
  },
  section: {
    padding: 10,
    // height: 40,
    // width: 400,
    backgroundColor: "#bdbcb9",
  },
  section2: {
    padding: 10,
    // height: 40,
    // width: 40,
    backgroundColor: "purple",
  },
  text: {
    // width:30
    textAlign: "justify",
    // overflow:"hidden",
  },
  profileWrap: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
  },
  profileStyle: {
    width: 120,
    height: 120,
    objectFit: "contain",
    borderRadius: "5px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    gap: "10",
  },
});
const PdfCreator = () => {
  const [pdfUrl, setUrl] = useState<string | Blob | null>("");

  console.log(pdfUrl);
  const btnRef = useRef(null);

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    btnRef?.current?.click();
  };
  const handleLoadSuccess = ({ url }: { url: string }) => {
    setUrl(url);
  };
  return (
    <>
      <form style={{ background: "red" }} onSubmit={submitForm}>
        <button>Submit</button>
      </form>

      <PDFDownloadLink
        style={{ marginTop: 140, display: "none" }}
        document={<PdfTemp />}
        // fileName="user_profile.pdf"
        // onLoadedData={handleLoadSuccess}
      >
        {({ blob, url, loading, error, }) => (
          <button ref={btnRef} onClick={() => setUrl(url)}>
            {loading ? "Loading document..." : "Download now!"}
          </button>
        )}
      </PDFDownloadLink>
    </>
  );
};

export default PdfCreator;

function PdfTemp() {
  return (
    <>
      <Document>
        <Page style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              exercitationem quod sunt? Maiores quod saepe sint eius at tempore
              nam in pariatur corporis numquam perferendis voluptatum illo, quae
              asperiores enim placeat quos id sapiente. Corrupti iure doloremque
              ex nesciunt natus non voluptate dicta explicabo tempora saepe.
              Repellendus vitae porro molestias!
            </Text>
            <View style={styles.profileWrap}>
              <Image style={styles.profileStyle} src={profile} />
              <View style={styles.details}>
                <Text>User name : Paras</Text>
                <Text>Age : 24</Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </>
  );
}
